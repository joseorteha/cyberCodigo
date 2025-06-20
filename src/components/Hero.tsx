"use client";

"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import '../scss/Hero.scss';

const Hero = () => {
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

  return (
    <section className="hero-section">
      {/* El fondo de puntitos ahora es global */}
      {/* <div className="hero-bg-grid"></div> */}

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
          Tu Negocio Despega en el Mundo Digital 🚀
        </motion.h1>
        <motion.p
          className="hero-desc"
          variants={itemVariants}
        >
          En Cyber Código creamos páginas web de alto impacto para negocios y emprendedores en Zongolica. Atrae más clientes, luce profesional y potencia tu crecimiento.
        </motion.p>
        <motion.div variants={itemVariants}>
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
