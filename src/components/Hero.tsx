"use client";

"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import '../scss/Hero.scss';

const titles = [
  "Tu Negocio Despega",
  "Tu Marca Crece",
  "Tus Ventas Aumentan",
  "Tu Proyecto Triunfa",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // 4 segundos por frase

    return () => clearInterval(interval);
  }, []);

  const whatsappLink = "https://wa.me/522722968204?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const currentTitle = titles[index];
  let letterCount = 0;

  return (
    <section className="hero-section">
      {/* Fondo animado: gradiente y partículas */}
      <div className="hero-animated-bg" />
      <div className="hero-particles" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="hero-title"
          variants={itemVariants}
        >
          <div className="hero-title-dynamic" key={index}>
            {currentTitle.split(' ').map((word, wordIndex) => (
              <span className="word" key={wordIndex}>
                {word.split('').map((char, charIndex) => {
                  letterCount++;
                  return (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: letterCount * 0.08, duration: 0.4 }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordIndex < currentTitle.split(' ').length - 1 && (
                  (() => {
                    letterCount++;
                    return (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: letterCount * 0.08, duration: 0.4 }}
                      >
                        {'\u00A0'}
                      </motion.span>
                    );
                  })()
                )}
              </span>
            ))}
            {/* Emoji animado */}
            <motion.span
              className="hero-title-rocket"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              style={{ display: 'inline-block', marginLeft: 8 }}
            >
              🚀
            </motion.span>
          </div>
        </motion.h1>
        <motion.p
          className="hero-desc"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          En Cyber Código creamos páginas web de alto impacto para negocios y emprendedores en Zongolica. Atrae más clientes, luce profesional y potencia tu crecimiento.
        </motion.p>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <Link
            href={whatsappLink}
            target="_blank"
            className="hero-cta"
            title="Cotiza tu página ahora por WhatsApp"
          >
            Impulsa tu Negocio Ahora
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
