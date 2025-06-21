"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '../lib/projects-data'; // Importamos los datos
import '../scss/Portfolio.scss';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Portfolio = () => (
  <section className="portfolio-section" id="portfolio"> {/* ID para el ancla */}
    <div className="portfolio-container">
      <h2 className="portfolio-title">Resultados que Hablan por Sí Mismos</h2>
      <p className="portfolio-desc">Nos enorgullece crear soluciones digitales que no solo lucen increíbles, sino que también impulsan el crecimiento de nuestros clientes.</p>
      <div className="portfolio-grid">
        {projectsData.map((project, idx) => ( // Usamos projectsData
          <motion.div
            className="portfolio-card"
            key={project.slug} // Usamos slug como key
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
          >
            <Link href={`/portfolio/${project.slug}`} className="portfolio-image-link">
              <Image src={project.img} alt={project.name} width={800} height={600} className="portfolio-img" />
            </Link>
            <div className="portfolio-info">
              <h3 className="portfolio-name">{project.name}</h3>
              <p className="portfolio-text">{project.shortDesc}</p> {/* Usamos shortDesc */}
              <div className="portfolio-buttons">
                <Link href={`/portfolio/${project.slug}`} className="portfolio-btn case-study">
                  Ver Estudio de Caso
                </Link>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-btn live-site">
                  Sitio en Vivo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;