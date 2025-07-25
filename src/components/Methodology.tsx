"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../scss/Methodology.scss';

const Methodology = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 1,
      title: 'ENTREVISTA Y DIAGNÓSTICO',
      objective: 'Conocer tu negocio, lo que haces, lo que necesitas y a dónde quieres llegar.',
      questions: [
        '¿Cómo se llama tu negocio?',
        '¿Qué productos o servicios ofreces?',
        '¿Tienes logo? ¿Tienes fotos?',
        '¿Quieres que tus clientes puedan escribirte por WhatsApp?',
        '¿Quieres que te encuentren en Google Maps?',
        '¿Qué redes sociales usas?',
        '¿Qué te gustaría que dijera tu página web?'
      ],
      duration: '30-45 minutos',
      method: 'WhatsApp o en persona'
    },
    {
      id: 2,
      title: 'PROPUESTA Y PRESUPUESTO',
      objective: 'Que sepas con claridad qué vas a recibir.',
      deliverables: [
        'Qué incluye tu página web',
        'Cuánto cuesta',
        'Cuánto tiempo tardaremos',
        'Cómo se hace el pago'
      ],
      duration: '24-48 horas',
      method: 'Documento o mensaje detallado'
    },
    {
      id: 3,
      title: 'DESARROLLO Y DISEÑO',
      objective: 'Construir tu página web, bonita, funcional y lista para mostrar a tus clientes.',
      steps: [
        'Te mostramos cómo va quedando (en privado)',
        'Hacemos los ajustes necesarios',
        'Dejamos todo listo para publicarla'
      ],
      duration: '5-14 días',
      method: 'Desarrollo iterativo'
    },
    {
      id: 4,
      title: 'ENTREGA FINAL',
      objective: 'Que tu página web esté activa y puedas compartirla con quien tú quieras.',
      includes: [
        'Hosting (espacio en internet) por 1 año',
        'Dominio (por ejemplo: www.tunegocio.com) por 1 año',
        'Tu página funcionando correctamente'
      ],
      duration: '1 día',
      method: 'Activación y configuración'
    },
    {
      id: 5,
      title: 'SOPORTE Y MANTENIMIENTO',
      objective: 'Acompañarte si necesitas ayuda después.',
      support: [
        '30 días de soporte gratuito para cualquier duda o problema',
        'Planes de mantenimiento por si quieres que sigamos apoyándote'
      ],
      duration: '30 días mínimo',
      method: 'Soporte continuo'
    }
  ];

  const packages = [
    {
      name: 'BÁSICO',
      price: 999,
      features: [
        '1 página informativa',
        'Botón a WhatsApp',
        'Hosting + dominio 1 año',
        'Diseño responsivo (celulares y computadoras)'
      ]
    },
    {
      name: 'PROFESIONAL',
      price: 1499,
      features: [
        'Hasta 3 secciones (inicio, servicios, contacto)',
        'Galería de fotos',
        'Redes sociales integradas',
        'Mapa de ubicación'
      ]
    },
    {
      name: 'PREMIUM',
      price: 1999,
      features: [
        'Todo lo anterior + formulario de contacto personalizado',
        'Catálogo de productos o servicios',
        'Integración opcional de cobros'
      ]
    }
  ];

  const values = [
    {
      title: 'Claridad',
      description: 'Te explicamos todo en palabras simples.',
      icon: '💡'
    },
    {
      title: 'Cercanía',
      description: 'Somos de Zongolica, como tú. Aquí no hay engaños.',
      icon: '🤝'
    },
    {
      title: 'Calidad',
      description: 'No vendemos por vender. Creamos páginas que te representen.',
      icon: '⭐'
    },
    {
      title: 'Compromiso',
      description: 'Si te va bien a ti, nos va bien a todos.',
      icon: '🎯'
    }
  ];

  return (
    <section className="methodology-section">
      <div className="methodology-container">
        <div className="methodology-header">
          <h2 className="methodology-title">Nuestra Metodología de Trabajo</h2>
          <p className="methodology-subtitle">Transformamos Ideas en Realidades Digitales para Negocios Locales</p>
          <div className="methodology-location">
            <span className="location-icon">📍</span>
            <span>Zongolica, Veracruz</span>
          </div>
          <p className="methodology-tagline">"Llevando el talento de Zongolica al mundo digital"</p>
        </div>

        <div className="methodology-intro">
          <h3>¿Quiénes Somos? Tu Vecino, Tu Aliado Digital.</h3>
          <p>
            En el corazón de las altas montañas de Zongolica, Veracruz, nace <strong>Cyber Código</strong>. No somos una agencia más; somos tus vecinos, y tenemos una misión: <strong>impulsar el talento de nuestra gente</strong> al mundo digital. Conocemos de cerca tu trabajo, tu esfuerzo y la calidad de lo que ofreces. Sabemos que el único ingrediente que falta es la visibilidad que internet puede darte.
          </p>
          <p>
            Mientras las grandes ciudades acaparan el mercado digital, en nuestra sierra hay un potencial enorme esperando ser descubierto. Una página web profesional no es un lujo, es la herramienta que <strong>transforma curiosos en clientes</strong> y ventas locales en un alcance regional y nacional.
          </p>
          <p>
            Estamos aquí para construir ese puente. Unimos tu tradición y tu trabajo con la tecnología necesaria para que tu voz se escuche más allá de las montañas. <strong>Tu éxito es el éxito de Zongolica</strong>.
          </p>
        </div>

        <div className="methodology-phases">
          <h3>Nuestra Forma de Trabajo: Clara y sin Rodeos</h3>
          <p className="phases-intro">
            Olvídate de términos técnicos y procesos complicados. Nuestra metodología está diseñada para ser <strong>transparente, directa y colaborativa</strong>. Hablamos tu idioma y nos enfocamos en resultados claros que puedas ver y medir. Así trabajamos:
          </p>

          <div className="phases-tabs">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                className={`phase-tab ${activePhase === index ? 'active' : ''}`}
                onClick={() => setActivePhase(index)}
              >
                <span className="phase-number">FASE {phase.id}</span>
                <span className="phase-title">{phase.title}</span>
              </button>
            ))}
          </div>

          <div className="phase-content">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="phase-details"
            >
              <div className="phase-header">
                <h4>{phases[activePhase].title}</h4>
                <div className="phase-meta">
                  <span className="phase-duration">⏱️ {phases[activePhase].duration}</span>
                  <span className="phase-method">📋 {phases[activePhase].method}</span>
                </div>
              </div>

              <div className="phase-objective">
                <h5>Objetivo:</h5>
                <p>{phases[activePhase].objective}</p>
              </div>

              {phases[activePhase].questions && (
                <div className="phase-questions">
                  <h5>¿Qué te preguntaremos?</h5>
                  <ul>
                    {phases[activePhase].questions?.map((question, index) => (
                      <li key={index}>{question}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phases[activePhase].deliverables && (
                <div className="phase-deliverables">
                  <h5>Te enviaremos:</h5>
                  <ul>
                    {phases[activePhase].deliverables?.map((deliverable, index) => (
                      <li key={index}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phases[activePhase].steps && (
                <div className="phase-steps">
                  <h5>Trabajamos por partes:</h5>
                  <ol>
                    {phases[activePhase].steps?.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {phases[activePhase].includes && (
                <div className="phase-includes">
                  <h5>Incluye:</h5>
                  <ul>
                    {phases[activePhase].includes?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {phases[activePhase].support && (
                <div className="phase-support">
                  <h5>Soporte:</h5>
                  <ul>
                    {phases[activePhase].support?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <div className="methodology-packages">
          <h3>PAQUETES DISPONIBLES</h3>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="package-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="package-header">
                  <h4>{pkg.name}</h4>
                  <div className="package-price">${pkg.price} MXN</div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="methodology-values">
          <h3>VALORES DE CYBER CÓDIGO</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="methodology-contact">
          <h3>¿Listo para Empezar?</h3>
            <p className="contact-subtitle">El siguiente paso para tu negocio está a un clic de distancia.</p>
            <a 
              href="https://wa.me/522296486437?text=Hola%20Cyber%20C%C3%B3digo,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20pueden%20ayudar%20a%20mi%20negocio." 
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              ¡Hablemos por WhatsApp!
            </a>
          <p className="methodology-signature">
            <strong>Cyber Código</strong> - "De Zongolica para el mundo".
          </p>
        </div>
      </div>
    </section>
  );
};

export default Methodology; 