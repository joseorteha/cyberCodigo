"use client";

import React from 'react';
import { motion } from 'framer-motion';
import '../scss/Packages.scss';

interface PackageProps {
  name: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ name, price, features, isFeatured }) => (
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
    <button className="choose-plan-btn">Elegir Plan</button>
  </div>
);

const Packages = () => {
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
              <PackageCard {...pkg} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
