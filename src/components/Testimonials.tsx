"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase, Testimonial } from '../lib/supabase';
import '../scss/Testimonials.scss';

// --- Skeleton Components ---
const TestimonialSkeleton = () => (
  <div className="testimonial-card skeleton">
    <div className="skeleton-header">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-header-text">
        <div className="skeleton-line" style={{ width: '60%' }}></div>
        <div className="skeleton-line" style={{ width: '40%' }}></div>
      </div>
    </div>
    <div className="skeleton-content">
      <div className="skeleton-line"></div>
      <div className="skeleton-line"></div>
      <div className="skeleton-line" style={{ width: '80%' }}></div>
    </div>
  </div>
);

const TestimonialsSkeleton = ({ count = 3 }) => (
    <div className="testimonials-grid">
        {Array.from({ length: count }).map((_, index) => (
            <TestimonialSkeleton key={index} />
        ))}
    </div>
);
// --- End Skeleton Components ---

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imgSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, imgSrc }) => (
  <div className="testimonial-card">
    {imgSrc ? (
      <Image src={imgSrc} alt={author} width={64} height={64} className="testimonial-img" />
    ) : (
      <div className="testimonial-img-placeholder">
        {author.charAt(0).toUpperCase()}
      </div>
    )}
    <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="testimonial-author">{author}</p>
      <p className="testimonial-title">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(6); // Mostrar máximo 6 testimonios

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Si hay error, usar testimonios de respaldo
      setTestimonials([
        { 
          id: 1, 
          name: 'Ana', 
          title: 'Dueña, Tiendita Local', 
          quote: 'Increíble servicio, mi página quedó genial y mis ventas aumentaron. ¡Totalmente recomendados!', 
          image_url: '/guauymiau.png',
          approved: true,
          created_at: new Date().toISOString()
        },
        { 
          id: 2, 
          name: 'Carlos', 
          title: 'Gerente, Taller Mecánico', 
          quote: 'Rápidos, profesionales y a un precio justo. Entendieron perfectamente lo que necesitaba mi negocio.', 
          image_url: '/fitflow.png',
          approved: true,
          created_at: new Date().toISOString()
        },
        { 
          id: 3, 
          name: 'Luisa', 
          title: 'Emprendedora', 
          quote: 'El soporte post-lanzamiento ha sido excelente. Siempre están ahí para ayudar con cualquier duda.', 
          image_url: '/barberia.png',
          approved: true,
          created_at: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  if (loading) {
    return (
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Historias de Éxito de Nuestros Clientes</h2>
            <p className="testimonials-desc">La satisfacción y el crecimiento de nuestros socios son nuestra mejor carta de presentación.</p>
          </div>
          <TestimonialsSkeleton count={3} />
        </div>
      </section>
    );
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Historias de Éxito de Nuestros Clientes</h2>
          <p className="testimonials-desc">La satisfacción y el crecimiento de nuestros socios son nuestra mejor carta de presentación.</p>
        </div>
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.name}
                title={testimonial.title}
                imgSrc={testimonial.image_url}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="testimonial-cta">
          <Link href="/testimonios" className="cta-button">
            Deja tu testimonio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
