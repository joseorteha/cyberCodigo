import React from 'react';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Post } from '@/lib/supabase';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const dynamic = 'force-dynamic';

async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116: "exact one row not found"
    console.error('Error fetching post:', error);
    return null;
  }
  
  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="blog-post-container">
      <header className="blog-post-header">
        <h1>{post.title}</h1>
        <p className="blog-post-meta">
          Por <strong>{post.author}</strong> | Publicado el {new Date(post.created_at).toLocaleDateString('es-ES')}
        </p>
      </header>

      {post.image_url && (
        <div className="blog-post-hero-image">
          <Image 
            src={post.image_url} 
            alt={`Imagen de portada para ${post.title}`}
            fill
            style={{objectFit: 'cover'}}
            priority
          />
        </div>
      )}

      <article className="blog-post-content">
        <div 
          className="blog-post-body" 
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} 
        />
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link href="/blog" className="cta-button">
            ‹ Volver a todos los artículos
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage; 