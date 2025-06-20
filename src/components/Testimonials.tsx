"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../scss/Testimonials.scss';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imgSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, imgSrc }) => (
  <div className="testimonial-card">
    <Image src={imgSrc} alt={author} width={64} height={64} className="testimonial-img" />
    <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
    <div>
      <p className="testimonial-author">{author}</p>
      <p className="testimonial-title">{title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    { quote: 'Increíble servicio, mi página quedó genial y mis ventas aumentaron. ¡Totalmente recomendados!', author: 'Ana', title: 'Dueña, Tiendita Local', imgSrc: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { quote: 'Rápidos, profesionales y a un precio justo. Entendieron perfectamente lo que necesitaba mi negocio.', author: 'Carlos', title: 'Gerente, Taller Mecánico', imgSrc: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { quote: 'El soporte post-lanzamiento ha sido excelente. Siempre están ahí para ayudar con cualquier duda.', author: 'Luisa', title: 'Emprendedora', imgSrc: 'https://randomuser.me/api/portraits/women/65.jpg' },
  ];

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
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
