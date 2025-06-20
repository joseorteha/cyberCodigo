"use client";
import React from 'react';
import { motion } from 'framer-motion';
import '../scss/Process.scss';

const steps = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#2563eb"/></svg>
    ),
    title: '1. Discovery & Estrategia',
    desc: 'Iniciamos con una charla para entender a fondo tus metas. Definimos juntos la estrategia y el enfoque ideal para tu proyecto.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" fill="#2563eb"/><path d="M14.5 5.5a3 3 0 1 0-4-4 3 3 0 0 0 4 4z" fill="#2563eb"/><path d="M18 13l-1.5-1.5" fill="#2563eb"/><path d="M13 18l-1.5-1.5" fill="#2563eb"/></svg>
    ),
    title: '2. Diseño y Propuesta',
    desc: 'Creamos un diseño visual y una propuesta detallada. Verás claramente el alcance, la inversión y los plazos antes de comenzar.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l-6-6 6-6" fill="#2563eb"/><path d="M8 6h10" fill="#2563eb"/></svg>
    ),
    title: '3. Desarrollo y Feedback',
    desc: 'Damos vida al diseño con código de alta calidad. Te mantenemos al tanto con avances constantes para recibir tu feedback y asegurar que todo sea perfecto.'
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12c0-5.25-4.25-9.5-9.5-9.5S2.5 6.75 2.5 12s4.25 9.5 9.5 9.5" fill="#2563eb"/><path d="M18 12L12 6" fill="#2563eb"/><path d="M12 12v6h6" fill="#2563eb"/></svg>
    ),
    title: '4. Lanzamiento y Soporte',
    desc: '¡Despegamos! Publicamos tu nueva página web y te damos una capacitación. Seguimos a tu lado para cualquier duda o ajuste futuro.'
  },
];

const Process = () => (
  <section className="process-section">
    <div className="process-container">
      <h2 className="process-title">Nuestro Proceso Colaborativo</h2>
      <p className="process-desc">Transparencia y eficiencia en 4 pasos, de la idea al lanzamiento.</p>
      <div className="process-steps">
        {steps.map((step, idx) => (
          <motion.div
            className="process-step"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="process-icon">{step.icon}</div>
            <h3 className="process-step-title">{step.title}</h3>
            <p className="process-step-desc">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process; 