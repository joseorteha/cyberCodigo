import React from 'react';
import Link from 'next/link';
import '../../scss/Legal.scss'; // Corregido: La ruta correcta es dos niveles arriba
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <main className="legal-section not-found-container">
      <div className="legal-container" style={{ textAlign: 'center' }}>
        <div className="legal-content">
          <Image 
            src="/LOGO.jpg"
            alt="Cyber Código Logo"
            width={100}
            height={100}
            style={{ borderRadius: '50%', marginBottom: '2rem' }}
          />
          <h1 className="legal-title" style={{ fontSize: '5rem', marginBottom: '1rem' }}>404</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>¡Ups! Parece que te perdiste en el ciberespacio.</p>
          <Link href="/" className="cta-button">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage; 