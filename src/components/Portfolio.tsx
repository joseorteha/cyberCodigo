"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../scss/Portfolio.scss';

const projects = [
  {
    name: 'ClickMail',
    url: 'https://click-mail.netlify.app/',
    img: '/clickmail.png',
    desc: 'Desarrollamos una plataforma intuitiva para la automatización de campañas de email marketing, ayudando a negocios a conectar con su audiencia.'
  },
  {
    name: 'Barbería Premium',
    url: 'https://barberzon.netlify.app/',
    img: '/barberia.png',
    desc: 'Diseñamos un sitio web elegante y moderno para una barbería, con un sistema de reservas que optimizó su flujo de clientes.'
  },
  {
    name: 'FitFlow',
    url: 'https://fitflow-u5cv.onrender.com/',
    img: '/fitflow.png',
    desc: 'Creamos una aplicación web para un gimnasio, permitiendo a los miembros acceder a rutinas personalizadas y seguir su progreso.'
  },
  {
    name: 'Guau & Miau',
    url: 'https://guau-miau.netlify.app/',
    img: '/guauymiau.png',
    desc: 'Construimos una landing page amigable para una veterinaria, destacando sus servicios y facilitando el contacto con nuevos clientes.'
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
              <Image src={project.img} alt={project.name} width={800} height={600} className="portfolio-img" />
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