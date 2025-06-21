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
              El "chispazo" ocurrió una tarde, viendo a una artesana local tejer un telar de cintura con una destreza increíble. Su arte era de clase mundial, pero su mercado era local. Nos preguntamos: ¿Y si pudiéramos darle a esa tradición una ventana al mundo? ¿Y si el código fuera el hilo que conectara su telar con clientes en Tokio, París o Nueva York?
            </p>
            <p>
              Crecimos viendo el inmenso talento de los artesanos, los productores y los soñadores de nuestra tierra. Y vimos también una brecha invisible: una desconexión con el universo digital que limitaba su potencial para brillar. Así nació nuestra misión: <strong>ser el puente entre la tradición y la tecnología</strong>. Usamos el código no como un fin, sino como un lenguaje para contar historias, para abrir mercados y para demostrar que las grandes ideas florecen en cualquier rincón del mundo, especialmente aquí, donde el aire es más puro.
            </p>
            <p>
              Nuestro primer proyecto fue para una pequeña cafetería familiar. Su café era excepcional, pero su presencia en línea era nula. Construimos una web sencilla pero elegante, con una galería de fotos que casi permitía oler los granos tostados y un sistema para pedidos locales. En pocas semanas, sus ventas a domicilio se triplicaron. Ese día entendimos el poder real de nuestro trabajo: no se trata de líneas de código, sino de transformar vidas y negocios.
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
              <p className="role">Fundador, Arquitecto Digital y Contador de Historias</p>
              <div className="bio-text">
                <p>
                  Desde niño, mi curiosidad me llevó a desarmar los juguetes y la radio de mi abuela para ver cómo funcionaban por dentro (y no siempre lograba rearmarlos). Esa misma curiosidad insaciable me llevó al mundo del código, un universo donde puedes construir cualquier cosa con lógica, creatividad y cafeína. Para mí, programar es el superpoder del siglo XXI.
                </p>
                <p>
                  Cyber Código es la materialización de un sueño: unir mis dos grandes pasiones, la tecnología de vanguardia y el amor por mi tierra. Mi objetivo es democratizar la tecnología, darle a cada emprendedor de la región y más allá, las mismas herramientas digitales que tiene una corporación multinacional, pero con un trato cercano, honesto y un café de por medio.
                </p>
                <h3 className="philosophy-title">Mi Filosofía de Trabajo</h3>
                <ul>
                  <li><strong>Artesanía Digital:</strong> Cada línea de código es como una pincelada. Busco no solo la funcionalidad, sino también la elegancia y la limpieza en todo lo que construyo.</li>
                  <li><strong>Empatía Radical:</strong> Antes de escribir una sola línea de código, me esfuerzo por entender a fondo tu negocio, tus metas y tus miedos. Tu éxito es mi éxito.</li>
                  <li><strong>Transparencia Total:</strong> Olvídate de los tecnicismos confusos. Te explicaré todo el proceso en un lenguaje claro y sencillo. Siempre sabrás en qué se invierte tu tiempo y tu dinero.</li>
                  <li><strong>Innovación Constante:</strong> El mundo digital nunca se detiene, y yo tampoco. Estoy en un aprendizaje perpetuo para traerte siempre las soluciones más modernas y efectivas.</li>
                </ul>
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
