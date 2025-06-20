"use client";

import React from 'react';
import { motion } from 'framer-motion';
import '../scss/WhyChooseUs.scss';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" fill="#2563eb"/><circle cx="12" cy="10" r="3" fill="#fff"/></svg>
    ),
    title: 'Conexión Local, Visión Global',
    desc: 'Somos de Zongolica. Entendemos tu mercado y combinamos ese conocimiento con las mejores prácticas digitales para llevar tu negocio al siguiente nivel.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 17h4v-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Diseños que Venden',
    desc: 'No solo creamos webs bonitas, diseñamos plataformas estratégicas pensadas para convertir visitantes en clientes y potenciar tus ventas.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: 'Lanzamiento Rápido',
    desc: 'Tu tiempo es valioso. Implementamos un proceso ágil para tener tu nueva página web funcionando y generando resultados en tiempo récord.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#2563eb"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="#2563eb"/></svg>
    ),
    title: 'Inversión Inteligente',
    desc: 'Ofrecemos paquetes de alto valor a precios justos. Una inversión en tu presencia digital con un claro retorno, diseñada para el éxito de tu negocio.'
  },
];

const WhyChooseUs = () => {
  return (
    <motion.section 
      className="why-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="why-container">
        <h2 className="why-title">
          Tu Socio Estratégico Digital
        </h2>
        <p className="why-desc">
          Más que una agencia, somos el partner que tu negocio necesita para brillar en internet.
        </p>
        <div className="why-features">
          {features.map((f, idx) => (
            <div className="why-feature" key={idx}>
              <div className="why-icon">{f.icon}</div>
              <div>
                <h3 className="why-feature-title">{f.title}</h3>
                <p className="why-feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
