import Head from 'next/head';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Nosotros | Cyber Código',
  description: 'Nacimos en las montañas de Zongolica, Veracruz. Somos un equipo apasionado por la tecnología y con la misión de construir puentes digitales para negocios locales y globales.',
};

const NosotrosPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <main className="about-section">
        <div className="about-container">
          <header className="about-header">
            <p className="subtitle">Nuestra Historia</p>
            <h1 className="title">Conectando Raíces con el Futuro Digital</h1>
          </header>

          <article className="about-content">
            <p>
              <strong>Cyber Código</strong> no nació en un garaje de Silicon Valley, sino con el aroma a café recién molido que perfuma las altas montañas de <strong>Zongolica, Veracruz</strong>. Somos un proyecto forjado con el carácter de nuestra gente: gente trabajadora que nos enseñó el valor de la palabra, la importancia de un apretón de manos y el orgullo por el trabajo bien hecho.
            </p>
            <p>
              Crecimos viendo el inmenso talento de los artesanos, los productores y los soñadores de nuestra tierra. Y vimos también una brecha invisible: una desconexión con el universo digital que limitaba su potencial para brillar. Así nació nuestra misión: <strong>ser el puente entre la tradición y la tecnología</strong>. Usamos el código no como un fin, sino como un lenguaje para contar historias, para abrir mercados y para demostrar que las grandes ideas florecen en cualquier rincón del mundo, especialmente aquí, donde el aire es más puro.
            </p>
            <p>
              Cada proyecto que emprendemos lleva impregnada esa esencia. Combinamos la <strong>precisión técnica del desarrollo de software</strong> con la <strong>creatividad, la calidez y el corazón</strong> de nuestras raíces. No solo construimos páginas web; tejemos relaciones de confianza y creamos plataformas digitales que son tan sólidas, bellas y resilientes como las montañas que nos vieron nacer.
            </p>
          </article>

          <section className="founder-section">
            <div className="founder-image-wrapper">
              <Image 
                src="https://i.ibb.co/WZWXG0Q/profile-pic.png" 
                alt="Foto de Jose Ortega, fundador de Cyber Código"
                width={200}
                height={200}
              />
            </div>
            <div className="founder-bio">
              <h2 className="name">José Ortega</h2>
              <p className="role">Fundador y Desarrollador Principal</p>
              <p className="bio-text">
                Desde niño, mi curiosidad me llevó a desarmar aparatos para ver cómo funcionaban. Esa misma curiosidad me llevó al mundo del código, un lugar donde puedes construir casi cualquier cosa con lógica e imaginación. Cyber Código es mi forma de unir mis dos pasiones: la tecnología y mi tierra. Mi objetivo es darle a cada emprendedor de la región las mismas herramientas digitales que tiene una gran empresa, pero con un trato cercano y honesto.
              </p>
              <div className="founder-socials">
                <a href="https://github.com/joseorteha" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Jose Ortega"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jose-orteg4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Jose Ortega"><FaLinkedin /></a>
                <a href="https://www.facebook.com/joseortega.exe1" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Jose Ortega"><FaFacebook /></a>
                <a href="https://www.instagram.com/mr.orteg4" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Jose Ortega"><FaInstagram /></a>
                <a href="https://www.tiktok.com/@cyber_codigo" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Cyber Código"><FaTiktok /></a>
                <a href="https://jose-ortega-dev.netlify.app/" target="_blank" rel="noopener noreferrer" aria-label="Portafolio de Jose Ortega"><FaGlobe /></a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
};

export default NosotrosPage;
