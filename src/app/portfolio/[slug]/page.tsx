import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '../../../lib/projects-data';
import { notFound } from 'next/navigation';
import '../../../scss/CaseStudy.scss';

// Icono para la lista de resultados
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PortfolioProjectPage = ({ params }: { params: { slug: string } }) => {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound(); // Si no se encuentra el proyecto, muestra la página 404
  }

  return (
    <div className="case-study-container">
      <header className="case-study-header">
        <div className="header-content">
          <span className="case-study-client">{project.client} / {project.clientIndustry}</span>
          <h1 className="case-study-title">Estudio de Caso: {project.name}</h1>
          <p className="case-study-short-desc">{project.shortDesc}</p>
        </div>
        <div className="header-image-wrapper">
          <Image 
            src={project.img} 
            alt={`Imagen del proyecto ${project.name}`} 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </header>

      <main className="case-study-main">
        <div className="case-study-grid">
          <article className="case-study-content">
            <h2>El Desafío</h2>
            <p>{project.challenge}</p>
            
            <h2>La Solución de Cyber Código</h2>
            <p>{project.solution}</p>
          </article>

          <aside className="case-study-sidebar">
            <div className="sidebar-block">
              <h3>Servicios Prestados</h3>
              <ul className="services-list">
                {project.services.map(service => <li key={service}>{service}</li>)}
              </ul>
            </div>
            <div className="sidebar-block">
              <h3>Resultados Clave</h3>
              <ul className="results-list">
                {project.results.map(result => (
                  <li key={result}>
                    <CheckIcon />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="cta-button full-width">
              Visitar Sitio en Vivo
            </a>
          </aside>
        </div>
      </main>

       <footer className="case-study-footer">
          <Link href="/#portfolio" className="cta-button secondary">
            &larr; Volver al Portfolio
          </Link>
        </footer>
    </div>
  );
};

export default PortfolioProjectPage; 