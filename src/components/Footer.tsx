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
          {/* Column 1: Logo and Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-brand-link">
              <Image src="/LOGO.jpg" alt="Cyber Código Logo" width={40} height={40} className="footer-logo" />
              <span className="footer-title">Cyber Código</span>
            </Link>
            <p className="footer-desc">
              Impulsamos a negocios de Zongolica a triunfar en el mundo digital con soluciones web estratégicas, creativas y de alto rendimiento.
            </p>
          </div>

          {/* Column 2: Quick Form */}
          <div className="footer-form">
            <h3 className="footer-heading">¿Tienes un proyecto en mente?</h3>
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                  <label>No llenes esto si eres humano: <input name="bot-field" /></label>
              </div>
              <input type="email" name="email" className="footer-input" placeholder="Tu correo electrónico" required />
              <textarea name="message" className="footer-textarea" placeholder="Cuéntanos sobre tu idea..." required></textarea>
              <button type="submit" className="footer-button">Enviar Mensaje</button>
            </form>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="footer-contact-social">
            <div className="footer-contact">
              <h3 className="footer-heading">Contacto</h3>
              <ul className="footer-list">
                <li><a href="mailto:codemasterdev@outlook.com" className="footer-link">codemasterdev@outlook.com</a></li>
                <li><Link href={whatsappLink} target="_blank" className="footer-link">WhatsApp: +52 272-296-8204</Link></li>
                <li><Link href={portfolioLink} target="_blank" className="footer-link">Portafolio</Link></li>
              </ul>
            </div>
            <div className="footer-social">
              <h3 className="footer-heading">Síguenos</h3>
              <div className="footer-social-icons">
                <Link href={facebookLink} target="_blank" className="footer-link"><FacebookIcon /></Link>
                <Link href={instagramLink} target="_blank" className="footer-link"><InstagramIcon /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <ul className="footer-legal-list">
            <li><Link href="/nosotros" className="footer-legal-link">Sobre Nosotros</Link></li>
            <li><Link href="/aviso-privacidad" className="footer-legal-link">Aviso de Privacidad</Link></li>
            <li><Link href="/terminos-condiciones" className="footer-legal-link">Términos y Condiciones</Link></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Cyber Código. Todos los derechos reservados. Diseñado y desarrollado con ❤️ en Zongolica, Veracruz.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
