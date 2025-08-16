"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import '../scss/Methodology.scss';

const Methodology = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const phases = [
    {
      id: 1,
      title: 'Platicamos',
      icon: '💬',
      objective: 'Conocemos tu negocio y lo que necesitas',
      description: 'Una conversación sencilla por WhatsApp donde nos cuentas sobre tu negocio',
      duration: '30 min',
      highlights: [
        'Sin compromisos',
        'Gratis y sin letra chica',
        'Te explicamos todo claramente'
      ],
      detailedInfo: {
        fullDescription: 'En esta primera etapa nos enfocamos en conocerte a ti y a tu negocio. Es una plática relajada donde queremos entender exactamente qué necesitas.',
        whatWeDiscuss: [
          'El tipo de negocio que tienes',
          'Qué quieres lograr con tu página web',
          'Tu presupuesto disponible',
          'Tus fechas importantes',
          'Referencias de páginas que te gustan'
        ],
        whatYouGet: [
          'Asesoría completamente gratuita',
          'Respuestas a todas tus preguntas',
          'Recomendaciones personalizadas',
          'Tiempo estimado de desarrollo'
        ]
      }
    },
    {
      id: 2,
      title: 'Te Cotizamos',
      icon: '💰',
      objective: 'Precio claro y sin sorpresas',
      description: 'Te enviamos una propuesta detallada con precio fijo',
      duration: '24 hrs',
      highlights: [
        'Precio fijo, no cambia',
        'Todo incluido por 1 año',
        'Sin pagos ocultos'
      ],
      detailedInfo: {
        fullDescription: 'Después de conocer tu proyecto, preparamos una cotización detallada con todo lo que incluye tu página web.',
        whatWeDiscuss: [
          'Precio final fijo (no cambia)',
          'Todo lo que incluye el proyecto',
          'Formas de pago disponibles',
          'Tiempo de entrega exacto',
          'Garantías y soporte incluido'
        ],
        whatYouGet: [
          'Cotización por escrito',
          'Desglose de servicios incluidos',
          'Opciones de pago cómodas',
          'Contrato transparente'
        ]
      }
    },
    {
      id: 3,
      title: 'Creamos tu Web',
      icon: '🎨',
      objective: 'Diseñamos y programamos tu página',
      description: 'Te vamos mostrando como queda y hacemos los cambios que quieras',
      duration: '5-15 días',
      highlights: [
        'Ves el progreso diario',
        'Cambios ilimitados',
        'Diseño único para ti'
      ],
      detailedInfo: {
        fullDescription: 'Esta es la parte emocionante donde tu idea se convierte en realidad. Te mantenemos informado de cada avance.',
        whatWeDiscuss: [
          'Colores y estilo de tu marca',
          'Fotos y contenido a incluir',
          'Funcionalidades especiales',
          'Ajustes y cambios que quieras',
          'Revisiones periódicas del avance'
        ],
        whatYouGet: [
          'Actualizaciones diarias del progreso',
          'Vista previa en tiempo real',
          'Cambios ilimitados durante el desarrollo',
          'Diseño 100% personalizado',
          'Optimizado para móviles'
        ]
      }
    },
    {
      id: 4,
      title: 'Tu Web Lista',
      icon: '🚀',
      objective: 'Tu página ya está en internet',
      description: 'Activamos todo y tu página web ya está lista para recibir clientes',
      duration: '1 día',
      highlights: [
        'Hosting incluido',
        'Dominio incluido',
        'Listo para compartir'
      ],
      detailedInfo: {
        fullDescription: 'El momento final donde tu página web sale al mundo. Configuramos todo para que esté perfecta desde el primer día.',
        whatWeDiscuss: [
          'Activación del dominio (.com)',
          'Configuración del hosting',
          'Pruebas finales de funcionamiento',
          'Capacitación para usar tu página',
          'Entrega de accesos y contraseñas'
        ],
        whatYouGet: [
          'Página web 100% funcional',
          'Dominio y hosting por 1 año',
          'Manual de uso básico',
          'Soporte técnico inicial',
          'Respaldos automáticos'
        ]
      }
    }
  ];

  const whyChooseUs = [
    {
      title: 'Somos de Aquí',
      description: 'Conocemos tu negocio porque somos de Zongolica',
      icon: '🏔️'
    },
    {
      title: 'Precio Justo',
      description: 'Sin precios inflados de las grandes ciudades',
      icon: '💡'
    },
    {
      title: 'Te Acompañamos',
      description: 'No te dejamos solo después de entregar',
      icon: '🤝'
    },
    {
      title: 'Resultados Reales',
      description: 'Páginas que sí traen clientes nuevos',
      icon: '📈'
    }
  ];

  const handleStepClick = (step: any) => {
    setSelectedStep(step);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStep(null);
  };

  return (
    <section className="methodology-section" id="como-trabajamos">
      <div className="methodology-container">
        {/* Header simplificado */}
        <div className="methodology-header">
          <h2 className="methodology-title">¿Cómo Trabajamos?</h2>
          <p className="methodology-subtitle">4 pasos simples para tener tu página web</p>
        </div>

        {/* Proceso visual */}
        <div className="process-timeline">
          <div className="timeline-line"></div>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`timeline-step ${activePhase === index ? 'active' : ''}`}
              onClick={() => handleStepClick(phase)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ cursor: 'pointer' }}
            >
              <div className="step-number">
                <span className="step-number-text">{phase.id}</span>
                <span className="step-emoji">{phase.icon}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{phase.title}</h3>
                <p className="step-description">{phase.description}</p>
                <div className="step-duration">⏱️ {phase.duration}</div>
                <ul className="step-highlights">
                  {phase.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
                <div className="click-hint">👆 Click para más detalles</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Por qué elegirnos */}
        <div className="why-choose-us">
          <h3>¿Por Qué Cyber Código?</h3>
          <div className="reasons-grid">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="reason-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="reason-icon">{reason.icon}</div>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="methodology-cta">
          <h3>¿Listo para Empezar?</h3>
          <p>Platiquemos sobre tu proyecto sin compromiso</p>
          <a 
            href="https://wa.me/522296486437?text=Hola%20Cyber%20C%C3%B3digo,%20quiero%20platicar%20sobre%20mi%20p%C3%A1gina%20web" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Empezar Conversación
          </a>
          <p className="cta-note">📍 Desde Zongolica, Veracruz para todo México</p>
        </div>
      </div>

      {/* Modal con información detallada */}
      {modalOpen && selectedStep && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <div className="step-modal-content">
            <div className="modal-header">
              <div className="modal-step-number">
                <span className="modal-number">{(selectedStep as any).id}</span>
                <span className="modal-emoji">{(selectedStep as any).icon}</span>
              </div>
              <h2 className="modal-title">{(selectedStep as any).title}</h2>
              <p className="modal-objective">{(selectedStep as any).objective}</p>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                <h3>¿En qué consiste?</h3>
                <p>{(selectedStep as any).detailedInfo.fullDescription}</p>
              </div>

              <div className="modal-sections">
                <div className="modal-section">
                  <h4>💬 De qué hablamos:</h4>
                  <ul>
                    {(selectedStep as any).detailedInfo.whatWeDiscuss.map((item: any, idx: any) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>🎁 Lo que recibes:</h4>
                  <ul>
                    {(selectedStep as any).detailedInfo.whatYouGet.map((item: any, idx: any) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-duration">
                <strong>⏱️ Tiempo estimado: {(selectedStep as any).duration}</strong>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Methodology; 