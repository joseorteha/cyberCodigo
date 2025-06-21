"use client";
import React, { useState, useEffect } from 'react';
import type { Post } from '../lib/supabase';
import '../scss/Modal.scss';

interface PostEditorProps {
  post: Partial<Post> | null;
  onSave: (postData: Partial<Post>) => void;
  onClose: () => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [author, setAuthor] = useState('José Ortega');
  const [isPublished, setIsPublished] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title || '');
      setSlug(post.slug || '');
      setContent(post.content || '');
      setExcerpt(post.excerpt || '');
      setAuthor(post.author || 'José Ortega');
      setIsPublished(post.is_published || false);
      setImageUrl(post.image_url || '');
    } else {
      // Reset form for new post
      setTitle('');
      setSlug('');
      setContent('');
      setExcerpt('');
      setAuthor('José Ortega');
      setIsPublished(false);
      setImageUrl('');
    }
  }, [post]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    // Auto-generate slug from title for new posts
    if (!post?.id) {
      setSlug(newTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: post?.id,
      title,
      slug,
      content,
      excerpt,
      author,
      is_published: isPublished,
      image_url: imageUrl,
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{post?.id ? 'Editar Artículo' : 'Crear Nuevo Artículo'}</h2>
        <form onSubmit={handleSubmit} className="post-editor-form">
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input id="title" type="text" value={title} onChange={handleTitleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug (URL)</label>
            <input id="slug" type="text" value={slug} onChange={(e) => setSlug(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">URL de la Imagen</label>
            <input id="imageUrl" type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://ejemplo.com/imagen.jpg" />
          </div>
          <div className="form-group">
            <label htmlFor="excerpt">Extracto (Resumen)</label>
            <textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="content">Contenido (Markdown permitido)</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={15}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Autor</label>
            <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div className="form-group-checkbox">
            <input id="isPublished" type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} />
            <label htmlFor="isPublished">¿Publicar ahora?</label>
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-secondary">Cancelar</button>
            <button type="submit" className="btn-primary">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor; 