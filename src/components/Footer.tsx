"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import '../scss/Footer.scss';

// SVG Icon Components for better reusability
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const whatsappLink = "https://wa.me/522722968204?text=Hola%2C%20estoy%20interesado%20en%20una%20cotización.";
const portfolioLink = "https://jose-ortega-dev.netlify.app/";
const facebookLink = "https://www.facebook.com/CyberCodigo";
const instagramLink = "https://www.instagram.com/cybercodigo/";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column logo-column">
            <Link href="/" className="footer-logo">
              <Image src="/LOGO.jpg" alt="Cyber Código Logo" width={50} height={50} />
              <span>Cyber Código</span>
            </Link>
            <p className="footer-tagline">Creamos soluciones digitales a la medida de tus sueños.</p>
          </div>
          <div className="footer-column">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/#portfolio">Portafolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#contact">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><Link href="/aviso-privacidad">Aviso de Privacidad</Link></li>
              <li><Link href="/terminos-condiciones">Términos y Condiciones</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Síguenos</h4>
            <div className="social-icons">
               {/* Puedes agregar tus redes aquí */}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cyber Código. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
