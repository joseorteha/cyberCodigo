"use client";

import React, { useState, useEffect } from 'react';
import type { Testimonial, Post } from '../lib/supabase';
import Image from 'next/image';
import PostEditor from './PostEditor';
import '../scss/AdminPanel.scss';

type Tab = 'testimonials' | 'blog';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<Tab>('testimonials');
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (activeTab === 'testimonials') {
      fetchTestimonials();
    } else if (activeTab === 'blog') {
      fetchPosts();
    }
  }, [activeTab]);

  const fetchTestimonials = async () => {
    setLoadingTestimonials(true);
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
      setLoadingTestimonials(false);
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
      console.error('Error approving testimonial:', error);
      setMessage(`Error al aprobar: ${message}`);
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

  const fetchPosts = async () => {
    setLoadingPosts(true);
    setMessage('');
    try {
      const response = await fetch('/api/posts'); 
      if (!response.ok) throw new Error('No se pudo obtener la lista de artículos.');
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      setMessage(`Error al cargar artículos: ${msg}`);
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleSavePost = async (postData: Partial<Post>) => {
    const isNew = !postData.id;
    const url = isNew ? '/api/posts' : `/api/posts/${postData.id}`;
    const method = isNew ? 'POST' : 'PATCH';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      
      setMessage(result.message);
      setEditingPost(null);
      fetchPosts();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      setMessage(`Error al guardar el artículo: ${msg}`);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este artículo? Esta acción es irreversible.')) {
      return;
    }
    try {
      const response = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      setMessage(result.message);
      fetchPosts();
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
      setMessage(`Error al eliminar el artículo: ${msg}`);
    }
  };

  const pendingTestimonials = testimonials.filter(t => !t.approved);
  const approvedTestimonials = testimonials.filter(t => t.approved);

  return (
    <div className="admin-panel-container">
      {editingPost !== null && (
        <PostEditor 
          post={editingPost}
          onSave={handleSavePost}
          onClose={() => setEditingPost(null)}
        />
      )}

      <div className="admin-panel">
        <h1>Panel de Administración</h1>

        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            Testimonios
          </button>
          <button 
            className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveTab('blog')}
          >
            Blog
          </button>
        </div>

        {message && (
          <div className="message">
            {message}
            <button onClick={() => setMessage('')} className="close-btn">×</button>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div>
            {loadingTestimonials ? (
              <div className="loading">Cargando testimonios...</div>
            ) : (
              <>
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

                {testimonials.length === 0 && !loadingTestimonials && (
                  <div className="empty-state">
                    <h3>No hay testimonios aún</h3>
                    <p>Los testimonios enviados aparecerán aquí para su revisión.</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="blog-admin-section">
            <h2>Gestión de Artículos del Blog</h2>
            <div className="toolbar">
              <button 
                className="cta-button"
                onClick={() => setEditingPost({ is_published: false })}
              >
                + Crear Nuevo Artículo
              </button>
            </div>
            
            {loadingPosts ? (
              <div className="loading">Cargando artículos...</div>
            ) : posts.length > 0 ? (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Estado</th>
                    <th>Fecha de Creación</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>
                        <span className={`status ${post.is_published ? 'published' : 'draft'}`}>
                          {post.is_published ? 'Publicado' : 'Borrador'}
                        </span>
                      </td>
                      <td>{new Date(post.created_at).toLocaleDateString('es-ES')}</td>
                      <td className="actions-cell">
                        <button onClick={() => setEditingPost(post)} className="edit-btn">Editar</button>
                        <button onClick={() => handleDeletePost(post.id)} className="delete-btn">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty-state">
                <p>No hay artículos todavía. ¡Crea el primero!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 