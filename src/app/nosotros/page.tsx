import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../scss/Legal.scss'; // Reutilizaremos estilos de las páginas legales

const SobreNosotrosPage = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <div style={{ textAlign: 'center', margin: '1rem 0 2rem' }}>
          <Image 
            src="/LOGO.jpg"
            alt="José Ortega - Fundador de Cyber Código"
            width={150}
            height={150}
            style={{ borderRadius: '50%', border: '4px solid #6366f1', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)' }}
          />
        </div>

        <h1>Forjado en Zongolica, para el Mundo</h1>
        
        <h2>Nuestra Raíz, Nuestra Misión</h2>
        <p>
          Cyber Código es más que una agencia de desarrollo web; es un sueño nacido en el corazón de las montañas de Zongolica, Veracruz. Nace de la convicción de que el talento y la innovación no tienen fronteras y de que la tecnología puede ser el motor que impulse a nuestra comunidad hacia nuevos horizontes.
        </p>
        <p>
          Nuestra misión es profundamente personal: cerrar la brecha digital para los comerciantes, artesanos y emprendedores de nuestra región. Queremos que la increíble calidad de lo que se hace en Zongolica no solo sea reconocida localmente, sino que resuene en todo el mundo a través de una presencia digital impecable.
        </p>

        <h2>Detrás del Código: Una Historia Personal</h2>
        <p>
          Soy José Ortega. Crecí aquí, entre el aroma a café y la tenacidad de nuestra gente. Vi a mis vecinos, amigos y familiares construir negocios con esfuerzo y pasión, pero también vi cómo luchaban por competir en un mundo cada vez más digital.
        </p>
        <p>
          La programación se convirtió en mi herramienta para cambiar esa realidad. Cada línea de código que escribo está impregnada de un propósito: crear plataformas web que no sean un gasto, sino la mejor inversión para un negocio local. No vendo páginas web; construyo puentes digitales entre tu trabajo y tus futuros clientes. Entiendo tus desafíos porque los he vivido de cerca. Hablo tu idioma, no una jerga técnica incomprensible.
        </p>

        <h2>¿Por Qué "Cyber Código"?</h2>
        <p>
          El nombre representa esa dualidad que nos define. **"Cyber"** es la visión global, la tecnología de punta, la ventana al mundo. **"Código"** es la artesanía, el trabajo meticuloso, la lógica y la pasión que ponemos en cada detalle, como un artesano que conoce su materia a la perfección.
        </p>
        <p>
          Somos la prueba de que desde Zongolica se puede crear tecnología de clase mundial.
        </p>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/#contacto" className="cta-button">
            ¿Construimos algo juntos?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotrosPage; 