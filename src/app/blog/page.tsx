import React from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Post } from '@/lib/supabase';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function getPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching published posts:', error);
    return [];
  }
  return data || [];
}

const BlogIndexPage = async () => {
  const posts = await getPublishedPosts();

  return (
    <div className="case-study-container" style={{ paddingTop: '120px' }}>
      <header className="case-study-header">
        <h1>Nuestro Blog</h1>
        <p>Consejos, guías y noticias del mundo del desarrollo web.</p>
      </header>

      <div className="blog-grid">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="blog-card">
              <div className="blog-card-image-link">
                <Image
                  src={post.image_url || '/placeholder.jpg'}
                  alt={`Imagen para ${post.title}`}
                  fill
                  className="blog-card-img"
                />
              </div>
              <div className="blog-card-info">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-author">{post.author}</p>
                 <div className="blog-card-button-wrap">
                  <span className="portfolio-btn case-study">Leer más</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            <p>No hay artículos publicados en este momento. ¡Vuelve pronto!</p>
            <Link href="/" className="cta-button" style={{ marginTop: '1rem' }}>
              Volver al Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogIndexPage; 