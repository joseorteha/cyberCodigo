"use client";

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import '../scss/TestimonialForm.scss';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    quote: '',
    image: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = fileName;

    const { error: uploadError } = await supabase.storage
      .from('testimonials')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Supabase upload error:', uploadError);
      throw new Error(`Error al subir la imagen: ${uploadError.message}`);
    }

    const { data } = supabase.storage
      .from('testimonials')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      let imageUrl = '';
      
      if (formData.image) {
        imageUrl = await uploadImage(formData.image);
      }

      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: formData.name,
            title: formData.title,
            quote: formData.quote,
            image_url: imageUrl,
            approved: false
          }
        ]);

      if (error) throw error;

      setMessage('¡Gracias! Tu testimonio ha sido enviado y será revisado pronto.');
      setFormData({
        name: '',
        title: '',
        quote: '',
        image: null
      });
    } catch (error: any) {
      setMessage(`Hubo un error al enviar tu testimonio. Detalle: ${error.message}`);
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="testimonial-form-container">
      <div className="testimonial-form">
        <h2>Comparte tu Experiencia</h2>
        <p>Ayúdanos a contar tu historia de éxito con Cyber Código</p>
        
        {message && (
          <div className={`message ${message.includes('Gracias') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Cargo o empresa *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Ej: CEO de Mi Empresa, Emprendedor, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote">Tu testimonio *</label>
            <textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleInputChange}
              required
              placeholder="Cuéntanos sobre tu experiencia con Cyber Código..."
              rows={4}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Foto de perfil (opcional)</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <small>Formatos: JPG, PNG, GIF. Máximo 5MB</small>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Testimonio'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm; 