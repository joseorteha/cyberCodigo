"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../scss/QuoteCalculator.scss';

interface ROIResult {
  investment: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriod: number;
  threeYearROI: number;
  fiveYearROI: number;
}

interface CompetitorPrice {
  name: string;
  basicPrice: number;
  professionalPrice: number;
  premiumPrice: number;
  features: string[];
}

const QuoteCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState('professional');
  const [businessType, setBusinessType] = useState('restaurante');
  const [monthlyRevenue, setMonthlyRevenue] = useState(50000);
  const [currentMarketingCost, setCurrentMarketingCost] = useState(5000);
  const [view, setView] = useState<'none' | 'roi' | 'compare'>('none');

  const packages = {
    basic: { name: 'Básico', price: 999, features: ['1 página informativa', 'Botón WhatsApp', 'Hosting + dominio 1 año', 'Diseño responsivo'] },
    professional: { name: 'Profesional', price: 1499, features: ['Hasta 3 secciones', 'Galería de fotos', 'Redes sociales integradas', 'Mapa de ubicación'] },
    premium: { name: 'Premium', price: 1999, features: ['Todo lo anterior', 'Formulario de contacto', 'Catálogo de productos', 'Integración de cobros'] }
  };

  const businessTypes = [
    { value: 'restaurante', label: 'Restaurante', avgRevenue: 80000, avgMarketing: 8000 },
    { value: 'servicios', label: 'Servicios', avgRevenue: 60000, avgMarketing: 6000 },
    { value: 'comercio', label: 'Comercio', avgRevenue: 100000, avgMarketing: 10000 },
    { value: 'salud', label: 'Salud', avgRevenue: 120000, avgMarketing: 12000 },
    { value: 'educacion', label: 'Educación', avgRevenue: 40000, avgMarketing: 4000 },
    { value: 'automotriz', label: 'Automotriz', avgRevenue: 150000, avgMarketing: 15000 }
  ];

  const competitors: CompetitorPrice[] = [
    {
      name: 'Cyber Código',
      basicPrice: 999,
      professionalPrice: 1499,
      premiumPrice: 1999,
      features: ['Precio justo', 'Soporte local', 'Diseño personalizado', 'Hosting incluido']
    },
    {
      name: 'Agencia Grande',
      basicPrice: 2500,
      professionalPrice: 4500,
      premiumPrice: 8000,
      features: ['Precio alto', 'Soporte limitado', 'Plantillas genéricas', 'Hosting extra']
    },
    {
      name: 'Freelancer',
      basicPrice: 800,
      professionalPrice: 1200,
      premiumPrice: 1800,
      features: ['Precio bajo', 'Sin garantías', 'Calidad variable', 'Sin soporte']
    }
  ];

  const calculateROI = (): ROIResult => {
    const investment = packages[selectedPackage as keyof typeof packages].price;
    
    // Estimaciones de mejora basadas en estudios de mercado
    const revenueIncrease = 0.15; // 15% aumento en ventas
    const marketingEfficiency = 0.25; // 25% reducción en costos de marketing
    const customerRetention = 0.20; // 20% mejora en retención
    
    const additionalRevenue = monthlyRevenue * revenueIncrease;
    const marketingSavings = currentMarketingCost * marketingEfficiency;
    const retentionSavings = monthlyRevenue * customerRetention * 0.1; // 10% del valor del cliente
    
    const monthlySavings = additionalRevenue + marketingSavings + retentionSavings;
    const annualSavings = monthlySavings * 12;
    
    const paybackPeriod = investment / monthlySavings;
    const threeYearROI = ((annualSavings * 3) - investment) / investment * 100;
    const fiveYearROI = ((annualSavings * 5) - investment) / investment * 100;

    return {
      investment,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      threeYearROI: Math.round(threeYearROI * 10) / 10,
      fiveYearROI: Math.round(fiveYearROI * 10) / 10
    };
  };

  const getDevelopmentTime = (): string => {
    const times = {
      basic: '5-7 días',
      professional: '7-10 días',
      premium: '10-14 días'
    };
    return times[selectedPackage as keyof typeof times];
  };

  const handleCalculate = () => setView('roi');
  const handleCompare = () => setView('compare');

  const handleBusinessTypeChange = (value: string) => {
    setBusinessType(value);
    const business = businessTypes.find(b => b.value === value);
    if (business) {
      setMonthlyRevenue(business.avgRevenue);
      setCurrentMarketingCost(business.avgMarketing);
    }
  };

  const roi = calculateROI();

  return (
    <section className="quote-calculator-section">
      <div className="quote-calculator-container">
        <div className="calculator-header">
          <h2 className="calculator-title">Calculadora de ROI y Precios</h2>
          <p className="calculator-desc">
            Descubre el potencial de tu inversión o compara nuestros paquetes con el mercado.
          </p>
        </div>

        <div className="calculator-content">
          <div className="calculator-form">
            <div className="form-group">
              <label>Tipo de Negocio</label>
              <select 
                value={businessType} 
                onChange={(e) => handleBusinessTypeChange(e.target.value)}
                className="form-select"
              >
                {businessTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Ingresos Mensuales (MXN)</label>
              <input
                type="number"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="form-input"
                min="1000"
                step="1000"
              />
            </div>

            <div className="form-group">
              <label>Costo Mensual de Marketing (MXN)</label>
              <input
                type="number"
                value={currentMarketingCost}
                onChange={(e) => setCurrentMarketingCost(Number(e.target.value))}
                className="form-input"
                min="0"
                step="500"
              />
            </div>

            <div className="form-group">
              <label>Paquete Seleccionado</label>
              <div className="package-selector">
                {Object.entries(packages).map(([key, pkg]) => (
                  <div
                    key={key}
                    className={`package-option ${selectedPackage === key ? 'selected' : ''}`}
                    onClick={() => setSelectedPackage(key)}
                  >
                    <div className="package-header">
                      <h3>{pkg.name}</h3>
                      <span className="package-price">${pkg.price} MXN</span>
                    </div>
                    <ul className="package-features">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-actions">
              <button onClick={handleCalculate} className="calculate-btn">
                Calcular ROI
              </button>
              <button onClick={handleCompare} className="compare-btn">
                Comparar Precios
              </button>
            </div>
          </div>

          <div className="calculator-output">
            {view === 'none' && (
              <div className="output-placeholder">
                <h3>Calcula tu Potencial</h3>
                <p>Usa el formulario para ver el retorno de inversión o comparar nuestros precios con el mercado.</p>
                <span className="placeholder-icon">🚀</span>
              </div>
            )}

            {view === 'roi' && (
              <motion.div 
                className="calculator-results"
                key="roi-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Resultados de tu Inversión</h3>
                
                <div className="results-grid">
                  <div className="result-card investment">
                    <h4>Inversión Inicial</h4>
                    <p className="result-value">${roi.investment} MXN</p>
                  </div>
                  
                  <div className="result-card savings">
                    <h4>Ahorro Mensual Estimado</h4>
                    <p className="result-value">${roi.monthlySavings} MXN</p>
                  </div>
                  
                  <div className="result-card payback">
                    <h4>Recuperación de Inversión</h4>
                    <p className="result-value">{roi.paybackPeriod} meses</p>
                  </div>
                  
                  <div className="result-card annual">
                    <h4>Ganancia Anual Estimada</h4>
                    <p className="result-value">${roi.annualSavings} MXN</p>
                  </div>
                </div>

                <div className="roi-breakdown">
                  <h4>Retorno de Inversión (ROI)</h4>
                  <div className="roi-chart">
                    <div className="roi-bar">
                      <span>ROI a 3 años: <span className="roi-percentage">{roi.threeYearROI}%</span></span>
                      <div className="roi-progress" style={{ width: `${Math.min(roi.threeYearROI / 10, 100)}%` }}></div>
                    </div>
                    <div className="roi-bar">
                      <span>ROI a 5 años: <span className="roi-percentage">{roi.fiveYearROI}%</span></span>
                      <div className="roi-progress" style={{ width: `${Math.min(roi.fiveYearROI / 10, 100)}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="development-info">
                  <h4>Tiempo de Desarrollo</h4>
                  <p className="dev-time">{getDevelopmentTime()}</p>
                  <p className="dev-note">* Tiempo estimado desde la aprobación de la propuesta.</p>
                </div>
              </motion.div>
            )}

            {view === 'compare' && (
              <motion.div 
                className="competitor-comparison"
                key="competitor-comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3>Comparación de Precios</h3>
                
                <div className="comparison-table">
                  <div className="table-header">
                    <div className="header-cell">Proveedor</div>
                    <div className="header-cell">Básico</div>
                    <div className="header-cell">Profesional</div>
                    <div className="header-cell">Premium</div>
                  </div>
                  
                  {competitors.map((competitor, index) => (
                    <div key={index} className={`table-row ${competitor.name === 'Cyber Código' ? 'highlighted' : ''}`}>
                      <div className="table-cell provider">
                        <strong>{competitor.name}</strong>
                        <div className="provider-features">
                          {competitor.features.map((feature, fIndex) => (
                            <span key={fIndex} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                      </div>
                      <div className="table-cell" data-label="Básico">${competitor.basicPrice}</div>
                      <div className="table-cell" data-label="Profesional">${competitor.professionalPrice}</div>
                      <div className="table-cell" data-label="Premium">${competitor.premiumPrice}</div>
                    </div>
                  ))}
                </div>

                <div className="comparison-summary">
                  <h4>¿Por qué elegir Cyber Código?</h4>
                  <ul>
                    <li>✅ <strong>Precios Justos:</strong> Sin costos ocultos, pagas lo justo por un servicio de calidad.</li>
                    <li>✅ <strong>Soporte Local:</strong> Hablas directamente con nosotros, aquí en Zongolica.</li>
                    <li>✅ <strong>Diseño a tu Medida:</strong> Creamos una web que represente la esencia de tu negocio.</li>
                    <li>✅ <strong>Todo Incluido:</strong> Hosting y dominio por un año para que no te preocupes por nada.</li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator; 