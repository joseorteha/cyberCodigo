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
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-brand-link">
              <Image src="/LOGO.jpg" alt="Cyber Código Logo" width={40} height={40} className="footer-logo" />
              <span className="footer-title">Cyber Código</span>
            </Link>
            <p className="footer-desc">
              Creamos soluciones digitales a la medida de tus sueños, con la calidez y el compromiso de nuestra gente.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <div className="footer-links-column highlight-links">
            <h3 className="footer-heading">Navegación</h3>
            <ul className="footer-list">
              <li><Link href="/nosotros" className="footer-link">Nosotros</Link></li>
              <li><Link href="/#portfolio" className="footer-link">Portafolio</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/testimonios" className="footer-link">Testimonios</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="footer-links-column highlight-links">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-list">
              <li><Link href="/aviso-privacidad" className="footer-link">Aviso de Privacidad</Link></li>
              <li><Link href="/terminos-condiciones" className="footer-link">Términos y Condiciones</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div className="footer-contact-column">
            <h3 className="footer-heading">Contacto</h3>
            <ul className="footer-list">
              <li><a href="mailto:contacto@cybercodigo.dev" className="footer-link">contacto@cybercodigo.dev</a></li>
              <li><a href={whatsappLink} target="_blank" className="footer-link">WhatsApp</a></li>
              <li><a href={portfolioLink} target="_blank" className="footer-link">Portafolio Personal</a></li>
            </ul>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {year} Cyber Código. Todos los derechos reservados. Hecho con ❤️ desde Zongolica, Veracruz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
