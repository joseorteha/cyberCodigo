"use client";
import React from 'react';
import { motion } from 'framer-motion';
import '../scss/Extras.scss';

const extras = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 5.5a3 3 0 1 0-4-4 3 3 0 0 0 4 4z" fill="#2563eb"/><path d="M12 12c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z" fill="#2563eb"/></svg>
    ),
    name: 'Identidad de Marca',
    desc: 'Creamos un logo profesional y minimalista que represente la esencia de tu negocio y conecte con tus clientes.',
    price: 350
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" fill="#2563eb"/><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#fff"/></svg>
    ),
    name: 'Soporte y Mantenimiento Anual',
    desc: 'Nos encargamos de las actualizaciones, seguridad y cambios menores durante todo un año para que tú te enfoques en crecer.',
    price: 500
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 12c0-5.25-4.25-9.5-9.5-9.5S2.5 6.75 2.5 12s4.25 9.5 9.5 9.5" fill="#2563eb"/><path d="M18 12L12 6" fill="#2563eb"/><path d="M12 12v6h6" fill="#2563eb"/></svg>
    ),
    name: 'Renovación de Infraestructura',
    desc: 'Gestionamos la renovación anual de tu hosting y dominio para garantizar que tu web siga online, rápida y segura, sin que te preocupes por nada.',
    price: 800
  },
];

const Extras = () => (
  <section className="extras-section">
    <div className="extras-container">
      <h2 className="extras-title">Potencia tu Proyecto</h2>
      <p className="extras-desc">Servicios complementarios para llevar tu presencia digital aún más lejos.</p>
      <div className="extras-grid">
        {extras.map((extra, idx) => (
          <motion.div
            className="extras-card"
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="extras-icon">{extra.icon}</div>
            <h3 className="extras-name">{extra.name}</h3>
            <p className="extras-text">{extra.desc}</p>
            <span className="extras-price">+${extra.price} MXN</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Extras; 