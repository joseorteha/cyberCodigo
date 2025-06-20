"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`header${scrolled ? ' scrolled' : ''}`}
    >
      <div style={{ position: 'absolute', top: 18, right: 32, zIndex: 20 }}>
        <ThemeToggle />
      </div>
      <nav className="header-nav">
        <Link href="/" className="header-brand">
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
        <div>
          {/* Navigation links can go here if needed in the future */}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
