import React from 'react';
import Link from 'next/link';
import './../scss/Legal.scss';

const GraciasPage = () => {
  return (
    <div className="legal-container" style={{ textAlign: 'center', minHeight: '70vh', paddingTop: '100px' }}>
      <div className="legal-content">
        <h1 style={{ fontSize: '2.5rem', color: '#6366f1' }}>¡Mensaje Enviado!</h1>
        <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
          Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
        </p>
        <Link href="/" className="cta-button" style={{ textDecoration: 'none' }}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default GraciasPage; 