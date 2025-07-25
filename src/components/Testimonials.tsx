"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, Testimonial } from '../lib/supabase';
import '../scss/Testimonials.scss';

// Iconos para las estrellas
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill={filled ? "#FFD700" : "none"} 
    stroke="#FFD700" 
    strokeWidth="2"
  >
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

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
            <TestimonialSkeleton key={`skeleton-${index}`} />
        ))}
    </div>
);
// --- End Skeleton Components ---

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imgSrc?: string | null;
  rating?: number;
  industry?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  title, 
  imgSrc, 
  rating = 5,
  industry = 'servicios'
}) => (
  <div className="testimonial-card">
    <div className="testimonial-header">
      {imgSrc ? (
        <Image src={imgSrc} alt={author} width={64} height={64} className="testimonial-img" />
      ) : (
        <div className="testimonial-img-placeholder">
          {author.charAt(0).toUpperCase()}
        </div>
      )}
      <div className="testimonial-info">
        <p className="testimonial-author">{author}</p>
        <p className="testimonial-title">{title}</p>
        <div className="testimonial-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= (rating || 5)} />
          ))}
        </div>
        <span className="testimonial-industry">{industry || 'servicios'}</span>
      </div>
    </div>
    <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('todos');
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  // Industrias disponibles
  const industries = [
    'todos',
    'restaurantes',
    'servicios',
    'comercio',
    'salud',
    'educación',
    'automotriz'
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Carrusel automático
  useEffect(() => {
    if (autoPlay && testimonials.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, testimonials.length]);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(12);

      if (error) throw error;
      
      // Agregar datos de ejemplo si no hay suficientes testimonios
      const enhancedData = (data || []).map(testimonial => ({
        ...testimonial,
        rating: testimonial.rating || Math.floor(Math.random() * 2) + 4, // 4-5 estrellas
        industry: testimonial.industry || ['restaurantes', 'servicios', 'comercio', 'salud'][Math.floor(Math.random() * 4)]
      }));

      // Si no hay testimonios, usar datos de ejemplo
      if (enhancedData.length === 0) {
        setTestimonials([
          { 
            id: 1, 
            name: 'Ana García', 
            title: 'Dueña, Restaurante El Sabor', 
            quote: 'Increíble servicio, mi página quedó genial y mis ventas aumentaron un 40%. ¡Totalmente recomendados!', 
            image_url: '/guauymiau.png',
            approved: true,
            created_at: new Date().toISOString(),
            rating: 5,
            industry: 'restaurantes'
          },
          { 
            id: 2, 
            name: 'Carlos Méndez', 
            title: 'Gerente, Taller Mecánico Rápido', 
            quote: 'Rápidos, profesionales y a un precio justo. Entendieron perfectamente lo que necesitaba mi negocio.', 
            image_url: '/fitflow.png',
            approved: true,
            created_at: new Date().toISOString(),
            rating: 5,
            industry: 'automotriz'
          },
          { 
            id: 3, 
            name: 'Luisa Rodríguez', 
            title: 'Emprendedora, Boutique Elegante', 
            quote: 'El soporte post-lanzamiento ha sido excelente. Siempre están ahí para ayudar con cualquier duda.', 
            image_url: '/barberia.png',
            approved: true,
            created_at: new Date().toISOString(),
            rating: 4,
            industry: 'comercio'
          },
          { 
            id: 4, 
            name: 'Dr. Miguel Torres', 
            title: 'Médico General', 
            quote: 'Mi consultorio ahora tiene presencia digital. Los pacientes pueden agendar citas fácilmente.', 
            image_url: null,
            approved: true,
            created_at: new Date().toISOString(),
            rating: 5,
            industry: 'salud'
          },
          { 
            id: 5, 
            name: 'Prof. Elena Vargas', 
            title: 'Directora, Academia de Inglés', 
            quote: 'La página web nos ayudó a atraer más estudiantes. El diseño es profesional y funcional.', 
            image_url: null,
            approved: true,
            created_at: new Date().toISOString(),
            rating: 4,
            industry: 'educación'
          },
          { 
            id: 6, 
            name: 'Roberto Silva', 
            title: 'Dueño, Lavandería Express', 
            quote: 'Excelente trabajo. Mi negocio ahora se ve profesional y los clientes confían más en nosotros.', 
            image_url: null,
            approved: true,
            created_at: new Date().toISOString(),
            rating: 5,
            industry: 'servicios'
          }
        ]);
      } else {
        setTestimonials(enhancedData);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar testimonios por industria
  const filteredTestimonials = selectedIndustry === 'todos' 
    ? testimonials 
    : testimonials.filter(t => t.industry === selectedIndustry);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    // Reanudar autoplay después de 10 segundos
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
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

        {/* Filtros por industria */}
        <div className="testimonials-filters">
          {industries.map((industry) => (
            <button
              key={industry}
              className={`filter-btn ${selectedIndustry === industry ? 'active' : ''}`}
              onClick={() => {
                setSelectedIndustry(industry);
                setCurrentSlide(0);
              }}
            >
              {industry === 'todos' ? 'Todos' : 
               industry === 'restaurantes' ? 'Restaurantes' :
               industry === 'servicios' ? 'Servicios' :
               industry === 'comercio' ? 'Comercio' :
               industry === 'salud' ? 'Salud' :
               industry === 'educación' ? 'Educación' :
               industry === 'automotriz' ? 'Automotriz' : industry}
            </button>
          ))}
        </div>

        {/* Carrusel de testimonios */}
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredTestimonials[currentSlide]?.id || currentSlide}
                className="carousel-slide"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {filteredTestimonials[currentSlide] && (
                  (() => {
                    const testimonial = filteredTestimonials[currentSlide];
                    return (
                      <TestimonialCard 
                        quote={testimonial.quote}
                        author={testimonial.name}
                        title={testimonial.title}
                        imgSrc={testimonial.image_url || null}
                        rating={testimonial.rating || 5}
                        industry={testimonial.industry || 'servicios'}
                      />
                    );
                  })()
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        {/* Indicadores del carrusel */}
        <div className="carousel-indicators">
          {filteredTestimonials.map((t, index) => (
            <button
              key={t.id || index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

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
