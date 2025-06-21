import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../scss/Legal.scss'; // Reutilizamos estilos por simplicidad

const NotFoundPage = () => {
  return (
    <div className="legal-container" style={{ textAlign: 'center', minHeight: '70vh' }}>
      <div className="legal-content">
        <Image 
          src="/LOGO.jpg" 
          alt="Cyber Código"
          width={100}
          height={100}
          style={{ borderRadius: '50%', marginBottom: '2rem' }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Error 404 - Página No Encontrada</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          ¡Ups! Parece que te has perdido en el ciberespacio. La página que buscas no existe o ha sido movida.
        </p>
        <Link href="/" className="cta-button" style={{ textDecoration: 'none' }}>
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage; 