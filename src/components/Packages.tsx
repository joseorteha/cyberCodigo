"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import '../scss/Packages.scss';

interface PackageProps {
  name: string;
  price: string;
  features: string[];
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
    <button className="choose-plan-btn" onClick={onSelect}>Elegir Plan</button>
  </div>
);

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PackageProps | null>(null);

  const handleOpenModal = (pkg: PackageProps) => {
    setSelectedPlan(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
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

    const whatsappLink = `https://wa.me/522722968204?text=${encodeURIComponent(message)}`;
    
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
      ] 
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
      ] 
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
        {selectedPlan && (
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
              <motion.button variants={itemVariants} type="submit" className="submit-btn">
                Continuar por WhatsApp
              </motion.button>
            </motion.form>
          </motion.div>
        )}
      </Modal>
    </>
  );
};

export default Packages;
