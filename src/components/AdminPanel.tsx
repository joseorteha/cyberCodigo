"use client";

import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../lib/supabase';
import Image from 'next/image';
import '../scss/AdminPanel.scss';

const AdminPanel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/testimonials');
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de testimonios.');
      }
      const data = await response.json();
      setTestimonials(data);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      console.error('Error fetching testimonials:', error);
      setMessage(`Error al cargar los testimonios: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  const approveTestimonial = async (id: number) => {
    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'PATCH',
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      
      setMessage(data.message);
      fetchTestimonials();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      console.error('Error approving testimonial:', error); // <-- que diga "approving"
      setMessage(`Error al aprobar: ${message}`); // <-- que diga "aprobar"
    }
  };

  const deleteTestimonial = async (id: number) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este testimonio?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/testimonials/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setMessage(data.message);
      fetchTestimonials();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      console.error('Error deleting testimonial:', error);
      setMessage(`Error al eliminar: ${message}`);
    }
  };

  const pendingTestimonials = testimonials.filter(t => !t.approved);
  const approvedTestimonials = testimonials.filter(t => t.approved);

  if (loading) {
    return (
      <div className="admin-panel-container">
        <div className="loading">Cargando testimonios...</div>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      <div className="admin-panel">
        <h1>Panel de Administración - Testimonios</h1>
        
        {message && (
          <div className="message">
            {message}
            <button onClick={() => setMessage('')} className="close-btn">×</button>
          </div>
        )}

        <div className="stats">
          <div className="stat-card">
            <h3>Pendientes</h3>
            <span className="stat-number">{pendingTestimonials.length}</span>
          </div>
          <div className="stat-card">
            <h3>Aprobados</h3>
            <span className="stat-number">{approvedTestimonials.length}</span>
          </div>
          <div className="stat-card">
            <h3>Total</h3>
            <span className="stat-number">{testimonials.length}</span>
          </div>
        </div>

        {pendingTestimonials.length > 0 && (
          <section className="testimonials-section">
            <h2>Testimonios Pendientes de Aprobación</h2>
            <div className="testimonials-grid">
              {pendingTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card pending">
                  <div className="testimonial-header">
                    {testimonial.image_url && (
                      <Image
                        src={testimonial.image_url}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="testimonial-img"
                      />
                    )}
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p className="title">{testimonial.title}</p>
                      <p className="date">
                        {new Date(testimonial.created_at).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                  </div>
                  <p className="quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="actions">
                    <button
                      onClick={() => approveTestimonial(testimonial.id)}
                      className="approve-btn"
                    >
                      ✓ Aprobar
                    </button>
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className="delete-btn"
                    >
                      ✕ Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {approvedTestimonials.length > 0 && (
          <section className="testimonials-section">
            <h2>Testimonios Aprobados</h2>
            <div className="testimonials-grid">
              {approvedTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card approved">
                  <div className="testimonial-header">
                    {testimonial.image_url && (
                      <Image
                        src={testimonial.image_url}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="testimonial-img"
                      />
                    )}
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p className="title">{testimonial.title}</p>
                      <p className="date">
                        {new Date(testimonial.created_at).toLocaleDateString('es-ES')}
                      </p>
                    </div>
                  </div>
                  <p className="quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="actions">
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className="delete-btn"
                    >
                      ✕ Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {testimonials.length === 0 && (
          <div className="empty-state">
            <h3>No hay testimonios aún</h3>
            <p>Los testimonios enviados aparecerán aquí para su revisión.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 