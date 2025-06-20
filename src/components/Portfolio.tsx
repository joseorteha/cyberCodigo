"use client";
import React from 'react';
import { motion } from 'framer-motion';
import '../scss/Portfolio.scss';

const projects = [
  {
    name: 'Click Mail',
    url: 'https://click-mail.netlify.app/',
    img: 'https://click-mail.netlify.app/og-image.png',
    desc: 'Plataforma de mailing y automatización para negocios.'
  },
  {
    name: 'Barberzon',
    url: 'https://barberzon.netlify.app/',
    img: 'https://barberzon.netlify.app/og-image.jpg',
    desc: 'Sitio web para barbería premium en Orizaba.'
  },
  {
    name: 'FitFlow',
    url: 'https://fitflow-u5cv.onrender.com/',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    desc: 'Plataforma de rutinas fitness y bienestar.'
  },
  {
    name: 'Guau Miau',
    url: 'https://guau-miau.netlify.app/',
    img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    desc: 'Landing para veterinaria y tienda de mascotas.'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Portfolio = () => (
  <section className="portfolio-section">
    <div className="portfolio-container">
      <h2 className="portfolio-title">Resultados que Hablan por Sí Mismos</h2>
      <p className="portfolio-desc">Nos enorgullece crear soluciones digitales que no solo lucen increíbles, sino que también impulsan el crecimiento de nuestros clientes.</p>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <motion.div
            className="portfolio-card"
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.name} className="portfolio-img" />
            </a>
            <div className="portfolio-info">
              <h3 className="portfolio-name">{project.name}</h3>
              <p className="portfolio-text">{project.desc}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-btn">Ver proyecto</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio; 