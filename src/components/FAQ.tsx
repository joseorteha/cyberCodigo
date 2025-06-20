"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../scss/FAQ.scss';

const faqs = [
  {
    question: '¿Qué incluye exactamente el paquete de Dominio y Hosting?',
    answer: 'Nos encargamos de todo por ti. Incluye el registro de tu dominio (ej: tunegocio.com) y el alojamiento web de alto rendimiento durante el primer año. Esto garantiza que tu página esté siempre online, rápida y segura, sin que tengas que preocuparte por detalles técnicos.'
  },
  {
    question: '¿Puedo tener correos profesionales con mi dominio?',
    answer: '¡Claro que sí! Podemos configurar correos profesionales (ej: contacto@tunegocio.com) para que proyectes una imagen de total confianza y profesionalismo. Es un servicio adicional que se integra perfectamente.'
  },
  {
    question: '¿Qué sucede después de que termina el primer año?',
    answer: 'No te preocupes por fechas de vencimiento. Nosotros te contactaremos con anticipación para ofrecerte la renovación de tu dominio y hosting a un precio preferencial. Nuestro objetivo es que tu presencia online nunca se detenga.'
  },
  {
    question: '¿Mi página web se verá bien en todos los dispositivos?',
    answer: 'Absolutamente. Es nuestra prioridad. Todos nuestros diseños son 100% responsivos (adaptables), lo que significa que tu sitio se verá y funcionará de manera impecable en computadoras, tabletas y, especialmente, en celulares.'
  },
  {
    question: '¿Y si necesito hacer cambios o agregar contenido en el futuro?',
    answer: 'Tu negocio evoluciona, y tu web también debe hacerlo. Ofrecemos planes de mantenimiento y actualización flexibles para añadir nuevas secciones, cambiar información o implementar nuevas funcionalidades cuando lo necesites.'
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <motion.section 
      className="faq-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="faq-container">
        <h2 className="faq-title">Resolvemos tus Dudas</h2>
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div className={`faq-item${open === idx ? ' open' : ''}`} key={idx}>
              <button className="faq-question" onClick={() => toggle(idx)} aria-expanded={open === idx} aria-controls={`faq-panel-${idx}`}>
                {faq.question}
                <span className="faq-icon">{open === idx ? '-' : '+'}</span>
              </button>
              <div
                className="faq-answer"
                id={`faq-panel-${idx}`}
                style={{ maxHeight: open === idx ? '200px' : '0px' }}
                aria-hidden={open !== idx}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ; 