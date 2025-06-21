"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    // Bloquear scroll del body cuando el menú está abierto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'; // Limpiar al desmontar
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <motion.header className={`header${scrolled ? ' scrolled' : ''}`}>
        <nav className="header-nav">
          <Link href="/" className="header-brand" onClick={() => isMenuOpen && toggleMenu()}>
            <Image 
              src="/LOGO.jpg" 
              alt="Cyber Código Logo" 
              width={40} 
              height={40} 
              className="brand-img" 
            />
            <span className={`brand-title${scrolled ? ' scrolled' : ''}`}>
              Cyber Código
            </span>
          </Link>
          <ul className="header-links desktop-links">
            {navLinks.map(link => (
              <li key={link.href}><Link href={link.href} className="nav-link">{link.label}</Link></li>
            ))}
          </ul>
          <div className="header-actions">
            <ThemeToggle />
            <button className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-nav-container"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%', transition: { duration: 0.3, ease: "easeIn" } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link href={link.href} className="mobile-nav-link" onClick={toggleMenu}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
             <motion.div 
                className="mobile-nav-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
             >
                <p>&copy; {new Date().getFullYear()} Cyber Código. Todos los derechos reservados.</p>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;