"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import '../scss/Process.scss';

const steps = [
  {
    id: 1,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="#2563eb"/></svg>
    ),
    emoji: '�',
    title: 'Análisis & Research',
    shortDesc: 'Investigación profunda de mercado y competencia.',
    desc: 'Realizamos un análisis exhaustivo del mercado, competencia y oportunidades digitales para tu negocio.',
    duration: '2-3 días',
    detailedInfo: {
      fullDescription: 'Aplicamos metodologías de investigación UX y análisis de mercado para obtener insights valiosos que guiarán todo el proyecto.',
      whatWeDo: [
        'Análisis competitivo con herramientas especializadas',
        'Research de palabras clave y SEO',
        'Estudio de comportamiento del usuario',
        'Análisis de tendencias del sector',
        'Benchmark de mejores prácticas'
      ],
      deliverables: [
        'Reporte de análisis competitivo',
        'Audit SEO preliminar',
        'Mapa de oportunidades digitales',
        'Insights de comportamiento de usuarios',
        'Recomendaciones estratégicas'
      ]
    }
  },
  {
    id: 2,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#2563eb"/></svg>
    ),
    emoji: '⚡',
    title: 'Arquitectura & UX',
    shortDesc: 'Diseño de arquitectura de información y experiencia de usuario.',
    desc: 'Estructuramos la información y diseñamos los flujos de usuario para maximizar conversiones.',
    duration: '3-4 días',
    detailedInfo: {
      fullDescription: 'Creamos la base sólida del proyecto con arquitectura de información optimizada y diseño UX centrado en objetivos de negocio.',
      whatWeDo: [
        'Mapeo de customer journey completo',
        'Wireframes de alta fidelidad',
        'Diseño de flujos de conversión',
        'Optimización de arquitectura de información',
        'Prototipado interactivo'
      ],
      deliverables: [
        'Sitemap detallado y optimizado',
        'Wireframes responsive completos',
        'Prototipos interactivos',
        'Documentación de flujos UX',
        'Especificaciones técnicas'
      ]
    }
  },
  {
    id: 3,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="#2563eb"/></svg>
    ),
    emoji: '💻',
    title: 'Desarrollo & QA',
    shortDesc: 'Programación con tecnologías modernas y testing riguroso.',
    desc: 'Codificamos con las mejores prácticas, realizando testing continuo para garantizar calidad excepcional.',
    duration: '1-3 semanas',
    detailedInfo: {
      fullDescription: 'Implementamos soluciones técnicas robustas utilizando frameworks modernos y metodologías ágiles de desarrollo.',
      whatWeDo: [
        'Desarrollo con Next.js y tecnologías modernas',
        'Implementación de mejores prácticas de performance',
        'Testing automatizado y manual',
        'Optimización Core Web Vitals',
        'Integración de analytics avanzados'
      ],
      deliverables: [
        'Código limpio y documentado',
        'Site optimizado para performance',
        'Integración SEO técnico completo',
        'Testing cross-browser completo',
        'Documentación técnica detallada'
      ]
    }
  },
  {
    id: 4,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" fill="#2563eb"/></svg>
    ),
    emoji: '🚀',
    title: 'Deploy & Optimization',
    shortDesc: 'Lanzamiento optimizado y monitoreo continuo.',
    desc: 'Desplegamos en infraestructura robusta y configuramos monitoreo para performance óptimo.',
    duration: '1-2 días',
    detailedInfo: {
      fullDescription: 'Realizamos el lanzamiento técnico con configuraciones avanzadas y establecemos sistemas de monitoreo continuo.',
      whatWeDo: [
        'Deploy en infraestructura escalable',
        'Configuración de CDN global',
        'Implementación de monitoreo 24/7',
        'Setup de analytics y tracking',
        'Configuración de respaldos automáticos'
      ],
      deliverables: [
        'Site live con performance óptimo',
        'Dashboard de monitoreo configurado',
        'Reportes automatizados',
        'Sistema de respaldos activo',
        'Documentación de mantenimiento'
      ]
    }
  },
];

const Process = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (step: any) => {
    setSelectedStep(step);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Metodología de Desarrollo</h2>
        <p className="process-desc">Proceso técnico profesional basado en mejores prácticas de la industria.</p>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <motion.div
              className="process-step"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              onClick={() => handleStepClick(step)}
              style={{ cursor: 'pointer' }}
            >
              <div className="process-number">
                <span className="process-number-text">{step.id}</span>
                <span className="process-emoji">{step.emoji}</span>
              </div>
              <div className="process-icon">{step.icon}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.shortDesc}</p>
              <div className="process-duration">⏱️ {step.duration}</div>
              <div className="click-hint">👆 Click para más detalles</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal con información detallada */}
      {modalOpen && selectedStep && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <div className="process-modal-content">
            <div className="modal-header">
              <div className="modal-process-number">
                <span className="modal-number">{(selectedStep as any).id}</span>
                <span className="modal-emoji">{(selectedStep as any).emoji}</span>
              </div>
              <h2 className="modal-title">{(selectedStep as any).title}</h2>
              <p className="modal-description">{(selectedStep as any).desc}</p>
            </div>

            <div className="modal-body">
              <div className="modal-full-description">
                <h3>Detalles de la metodología</h3>
                <p>{(selectedStep as any).detailedInfo.fullDescription}</p>
              </div>

              <div className="modal-sections">
                <div className="modal-section">
                  <h4>🔧 Metodología aplicada:</h4>
                  <ul>
                    {(selectedStep as any).detailedInfo.whatWeDo.map((item: any, idx: any) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>� Entregables técnicos:</h4>
                  <ul>
                    {(selectedStep as any).detailedInfo.deliverables.map((item: any, idx: any) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-duration">
                <strong>⏱️ Duración estimada: {(selectedStep as any).duration}</strong>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Process; 