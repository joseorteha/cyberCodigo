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
        <form className="quote-form" onSubmit={e => e.preventDefault()}>
          <div className="quote-packages">
            {packages.map((pkg, idx) => (
              <label key={pkg.name} className={`quote-package${selectedPackage === idx ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="package"
                  checked={selectedPackage === idx}
                  onChange={() => setSelectedPackage(idx)}
                />
                <span className="quote-package-name">{pkg.name}</span>
                <span className="quote-package-price">${pkg.price} MXN</span>
                <span className="quote-package-desc">{pkg.desc}</span>
              </label>
            ))}
          </div>
          <div className="quote-extras">
            <span className="quote-extras-title">Extras:</span>
            {extras.map((extra, idx) => (
              <label key={extra.name} className="quote-extra">
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(idx)}
                  onChange={() => handleExtraChange(idx)}
                />
                <span>{extra.name} (+${extra.price} MXN)</span>
              </label>
            ))}
          </div>
          <div className="quote-total">
            <span>Total estimado:</span>
            <span className="quote-total-price">${total} MXN</span>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default QuoteCalculator; 