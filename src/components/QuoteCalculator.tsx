"use client";
    
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../scss/QuoteCalculator.scss';

const packages = [
  { name: 'Básico', price: 999, desc: 'Página sencilla, WhatsApp, hosting y dominio.' },
  { name: 'Profesional', price: 1499, desc: 'Página con varias secciones, catálogo, hosting y dominio.' },
  { name: 'Premium', price: 1999, desc: 'Mini tienda online, pagos, hosting y dominio.' },
];

const extras = [
  { name: 'Diseño de logo sencillo', price: 350 },
  { name: 'Actualizaciones y soporte (1 año)', price: 500 },
  { name: 'Renovación anual de hosting y dominio', price: 800 },
];

const QuoteCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);

  const handleExtraChange = (idx: number) => {
    setSelectedExtras((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const total = packages[selectedPackage].price + selectedExtras.reduce((sum, idx) => sum + extras[idx].price, 0);

  return (
    <motion.section 
      className="quote-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="quote-container">
        <h2 className="quote-title">Calcula tu Cotización</h2>
        <p className="quote-desc">Selecciona el paquete y los extras que necesitas. El precio se actualiza automáticamente.</p>
        <div className="quote-form">
          <div className="form-group">
            <h3>1. Elige tu Paquete Base</h3>
            <div className="quote-packages">
              {packages.map((pkg, idx) => (
                <div 
                  key={pkg.name} 
                  className={`quote-card${selectedPackage === idx ? ' selected' : ''}`}
                  onClick={() => setSelectedPackage(idx)}
                >
                  <input
                    type="radio"
                    name="package"
                    checked={selectedPackage === idx}
                    readOnly
                  />
                  <div className="package-name">{pkg.name}</div>
                  <div className="package-price">${pkg.price} MXN</div>
                  <div className="package-desc">{pkg.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <h3>2. Añade los Extras (Opcional)</h3>
            <div className="quote-extras">
              {extras.map((extra, idx) => (
                <div 
                  key={extra.name} 
                  className={`quote-card${selectedExtras.includes(idx) ? ' selected' : ''}`}
                  onClick={() => handleExtraChange(idx)}
                >
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(idx)}
                    readOnly
                  />
                  <div className="extra-name">{extra.name}</div>
                  <div className="package-price">+${extra.price} MXN</div>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-total">
            <span>Total estimado:</span>
            <span className="quote-total-price">${total} MXN</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default QuoteCalculator; 