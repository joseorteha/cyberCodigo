"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Modal from './Modal';
import '../scss/Packages.scss';

interface PackageProps {
  name: string;
  price: string;
  features: string[];
  detailedFeatures: string[];
  benefits: string[];
  deliveryTime: string;
  isFeatured?: boolean;
}

const PackageCard: React.FC<PackageProps & { onSelect: () => void }> = ({ name, price, features, isFeatured, onSelect }) => (
  <div className={`package-card${isFeatured ? ' featured' : ''}`}>
    {isFeatured && (
      <div className="most-popular">MÁS POPULAR</div>
    )}
    <h3 className="package-title">{name}</h3>
    <p className="package-price">{price}</p>
    <ul className="package-features">
      {features.map((feature, index) => (
        <li key={index} className="feature-item">
          <span className="check">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <button className="choose-plan-btn" onClick={onSelect}>Ver Detalles</button>
  </div>
);

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PackageProps | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleOpenModal = (pkg: PackageProps) => {
    setSelectedPlan(pkg);
    setShowContactForm(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
    setShowContactForm(false);
  };

  const handleGetStarted = () => {
    setShowContactForm(true);
  };
  
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const messageContent = formData.get('message') as string;

    let message = `¡Hola Cyber Código! Estoy interesado/a en el *${selectedPlan?.name}*.\n\n`;
    message += `Mi nombre es: ${name}\n`;
    message += `Mi correo es: ${email}\n\n`;
    if (messageContent) {
      message += `Mi mensaje es: ${messageContent}\n\n`;
    }
    message += `Me gustaría recibir más información. ¡Gracias!`;

    const whatsappLink = `https://wa.me/522296486437?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, '_blank');
    handleCloseModal();
  };

  const packages: PackageProps[] = [
    { 
      name: 'Plan Despegue', 
      price: '$999 MXN', 
      features: [
        'Landing Page de Alto Impacto',
        'Diseño Moderno y Adaptable',
        'Integración con WhatsApp',
        'Dominio y Hosting (1er Año)',
        'Optimización SEO Inicial'
      ],
      detailedFeatures: [
        'Landing page de una sola página con diseño impactante',
        'Diseño responsive (se ve perfecto en móvil, tablet y computadora)',
        'Botón de WhatsApp flotante para contacto directo',
        'Dominio personalizado (.com, .mx, etc.) incluido por 1 año',
        'Hosting web profesional incluido por 1 año',
        'Optimización básica para Google y otros buscadores',
        'Formulario de contacto integrado',
        'Galería de imágenes de alta calidad',
        'Enlaces a redes sociales',
        'Certificado SSL (sitio seguro)'
      ],
      benefits: [
        'Presencia profesional en internet desde el primer día',
        'Ahorro significativo vs. agencias tradicionales',
        'Todo listo para recibir clientes online',
        'Soporte técnico durante el primer mes',
        'Capacitación básica para gestionar tu contenido'
      ],
      deliveryTime: '5-7 días hábiles'
    },
    { 
      name: 'Plan Crecimiento', 
      price: '$1,499 MXN', 
      features: [
        'Sitio Web Completo (hasta 5 secciones)',
        'Catálogo de Productos/Servicios',
        'Formulario de Contacto Avanzado',
        'Diseño 100% Personalizado',
        'Todo lo del Plan Despegue'
      ],
      detailedFeatures: [
        'Sitio web completo con hasta 5 páginas/secciones',
        'Catálogo de productos o servicios con imágenes y descripciones',
        'Formulario de contacto avanzado con validación',
        'Diseño completamente personalizado según tu marca',
        'Blog integrado para contenido y SEO',
        'Panel de administración para gestionar contenido',
        'Optimización SEO avanzada',
        'Integración con Google Analytics',
        'Mapa de ubicación interactivo',
        'Testimonios de clientes integrados',
        'Todo lo incluido en el Plan Despegue'
      ],
      benefits: [
        'Sitio web completo que crece con tu negocio',
        'Herramientas para generar leads y ventas',
        'Mayor visibilidad en buscadores',
        'Imagen de marca profesional y consistente',
        'Soporte técnico durante 2 meses',
        'Capacitación completa para autogestión'
      ],
      deliveryTime: '10-12 días hábiles',
      isFeatured: true 
    },
    { 
      name: 'Plan E-commerce', 
      price: '$1,999 MXN', 
      features: [
        'Tienda Online Funcional',
        'Integración de Pagos (Stripe/MP)',
        'Gestión de Productos y Pedidos',
        'Capacitación para autogestión',
        'Todo lo del Plan Crecimiento'
      ],
      detailedFeatures: [
        'Tienda online completamente funcional',
        'Integración con Mercado Pago o Stripe para pagos',
        'Sistema de gestión de productos y inventario',
        'Panel de administración para gestionar pedidos',
        'Sistema de carrito de compras',
        'Proceso de checkout optimizado',
        'Notificaciones automáticas por email',
        'Integración con WhatsApp Business',
        'Reportes de ventas básicos',
        'Sistema de cupones y descuentos',
        'Todo lo incluido en el Plan Crecimiento'
      ],
      benefits: [
        'Ventas online 24/7 sin intermediarios',
        'Reach a clientes de toda la región y más allá',
        'Automatización del proceso de ventas',
        'Escalabilidad ilimitada para tu negocio',
        'Soporte técnico durante 3 meses',
        'Capacitación completa + manual de usuario'
      ],
      deliveryTime: '15-18 días hábiles'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="packages-section" id="servicios"></section>
      <section className="packages-section">
        <div className="packages-container">
          <div className="packages-header">
            <h2 className="packages-title">Una Inversión Inteligente para tu Futuro</h2>
            <p className="packages-desc">Planes claros y sin sorpresas, diseñados para ofrecerte el máximo retorno.</p>
          </div>
          <motion.div 
            className="packages-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PackageCard {...pkg} onSelect={() => handleOpenModal(pkg)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPlan && !showContactForm && (
          <motion.div 
            className="package-details-container"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={itemVariants} className="package-details-header">
              <h3 className="package-details-title">{selectedPlan.name}</h3>
              <p className="package-details-price">{selectedPlan.price}</p>
              <p className="package-details-delivery">Entrega en {selectedPlan.deliveryTime}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="package-details-content">
              <div className="details-section">
                <h4>¿Qué Incluye?</h4>
                <ul className="detailed-features">
                  {selectedPlan.detailedFeatures.map((feature, index) => (
                    <li key={index}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-section">
                <h4>Beneficios para tu Negocio</h4>
                <ul className="benefits-list">
                  {selectedPlan.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="benefit-icon">🚀</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="package-details-actions">
              <button className="get-started-btn" onClick={handleGetStarted}>
                ¡Quiero Empezar!
              </button>
              <button className="back-btn" onClick={handleCloseModal}>
                Volver a los Planes
              </button>
            </motion.div>
          </motion.div>
        )}

        {selectedPlan && showContactForm && (
          <motion.div 
            className="contact-form-container"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.h3 variants={itemVariants} className="form-title">Estás a un paso de tu <strong>{selectedPlan.name}</strong></motion.h3>
            <motion.p variants={itemVariants} className="form-subtitle">Completa tus datos para iniciar la conversación por WhatsApp.</motion.p>
            <motion.form 
              onSubmit={handleFormSubmit} 
              className="contact-form"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id="name" name="name" required placeholder="Tu nombre y apellido" />
              </motion.div>
              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required placeholder="ejemplo@correo.com" />
              </motion.div>
              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="message">Mensaje (opcional)</label>
                <textarea id="message" name="message" rows={3} placeholder="Cuéntanos un poco sobre tu proyecto o tus dudas..."></textarea>
              </motion.div>
              <motion.div variants={itemVariants} className="form-actions">
                <button type="submit" className="submit-btn">
                  <FaWhatsapp />
                  Continuar por WhatsApp
                </button>
                <button type="button" className="back-to-details-btn" onClick={() => setShowContactForm(false)}>
                  Volver a Detalles
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        )}
      </Modal>
    </>
  );
};

export default Packages;
