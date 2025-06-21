import Head from 'next/head';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Nosotros | Cyber Código',
  description: 'Desde Zongolica para el mundo. Creamos páginas web accesibles y profesionales para negocios reales que quieren crecer en internet.',
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
            <h1 className="title">Conectando negocios reales con el mundo digital</h1>
          </header>

          <article className="about-content">
            <p>
              En <strong>Cyber Código</strong> no vendemos humo. Nacimos en <strong>Zongolica, Veracruz</strong>, con una misión clara: <strong>acercar la tecnología a quienes realmente la necesitan.</strong> Sabemos que aquí, en nuestra tierra, hay talento, esfuerzo y grandes ideas. Pero muchas veces eso no es suficiente si no tienes presencia en internet.
            </p>
            <p>
              ¿Cuántas veces has escuchado: “Si tuviera una página web, vendería más” o “No sé cómo darme a conocer”? Ahí es donde entramos nosotros.
            </p>
            <p>
              No somos una gran empresa, somos como tú: personas que trabajan todos los días, que conocen lo que es empezar desde abajo, que quieren ver a los negocios locales <strong>crecer, destacar y ser reconocidos.</strong> Lo nuestro no es solo hacer páginas, es abrir puertas.
            </p>
            <p>
              Creemos que cualquier negocio merece tener <strong>una página web chida, clara, que funcione y que lo represente de verdad.</strong> No importa si vendes tacos, tienes una ferretería, un estudio, o apenas estás empezando tu marca → aquí estamos para ayudarte a llevar tu idea al siguiente nivel.
            </p>
            <p>
              <strong>Cyber Código es tecnología hecha en Zongolica, para que lo local se vuelva global.</strong>
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
              <p className="role">Fundador de Cyber Código | Desarrollador Web & Digital Maker</p>
              <div className="bio-text">
                <p>
                  Desde niño siempre fui curioso. No me bastaba con usar las cosas, quería entender <strong>cómo funcionaban por dentro</strong>. Así terminé metido en el mundo del código, donde descubrí algo increíble: <strong>con programación puedes construir lo que te imagines.</strong> Para mí, programar es el lenguaje que conecta ideas con resultados.
                </p>
                <p>
                  Hoy, con <strong>Cyber Código</strong>, estoy cumpliendo un sueño personal: <strong>ayudar a que los negocios locales tengan acceso a las herramientas digitales que usan las grandes marcas</strong>, pero sin vueltas raras ni cobros escondidos.
                </p>
                <p>
                  Aquí se habla claro: tú me cuentas tu idea → yo la convierto en una página web lista para funcionar → tú vendes más → ganamos todos. Me gusta el café, el diseño limpio y ver a la banda local progresar.
                </p>
              </div>
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
