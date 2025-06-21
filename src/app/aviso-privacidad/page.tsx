import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Cyber Código',
  description: 'Consulta nuestro aviso de privacidad. En Cyber Código, la confianza y transparencia en el manejo de tus datos es nuestra prioridad.',
};

const AvisoPrivacidadPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <main className="legal-section">
        <div className="legal-container">
          <h1 className="legal-title">Aviso de Privacidad</h1>
          <p className="last-updated">Última actualización: 22 de Junio de 2024</p>
          
          <div className="legal-content">
            <p>
              En <strong>Cyber Código</strong>, tu confianza es lo más importante para nosotros. Como si estuviéramos compartiendo un café aquí en las montañas de Zongolica, queremos ser claros y directos contigo. Este documento explica qué datos tuyos podríamos necesitar, por qué los usamos y, sobre todo, cómo los cuidamos con la misma dedicación con la que un artesano cuida su obra.
            </p>

            <h2 className="legal-subtitle">1. ¿Quiénes somos?</h2>
            <p>
              <strong>Cyber Código</strong> (en adelante, "nosotros"), con domicilio virtual y corazón en Zongolica, Veracruz, es el responsable del uso y protección de tus datos personales.
            </p>

            <h2 className="legal-subtitle">2. ¿Qué datos personales utilizamos?</h2>
            <p>
              Para poder ofrecerte nuestros servicios, podríamos recopilar los siguientes datos:
            </p>
            <ul>
              <li><strong>Datos de Contacto:</strong> Nombre, correo electrónico, número de teléfono.</li>
              <li><strong>Datos de Proyecto:</strong> Información que nos proporciones sobre tu negocio o proyecto para poder cotizar y desarrollar tu sitio web.</li>
              <li><strong>Datos de Navegación:</strong> Información técnica como tu dirección IP o tipo de navegador, con fines de análisis y mejora de nuestro sitio (de forma anónima).</li>
            </ul>

            <h2 className="legal-subtitle">3. ¿Para qué usamos tus datos?</h2>
            <p>
              Tu información nos ayuda a:
            </p>
            <ul>
              <li>Establecer una comunicación clara y directa contigo.</li>
              <li>Entender tus necesidades para crear una cotización a tu medida.</li>
              <li>Desarrollar, entregar y dar seguimiento al proyecto que nos confiaste.</li>
              <li>Mejorar la experiencia de nuestro sitio web.</li>
              <li>Enviarte información relevante sobre nuestros servicios (solo si tú nos das tu consentimiento explícito).</li>
            </ul>
            <p>
              <strong>Tu tranquilidad es primero:</strong> Nunca venderemos, rentaremos o compartiremos tus datos personales con terceros para fines que no hayas autorizado.
            </p>

            <h2 className="legal-subtitle">4. Tus Derechos ARCO</h2>
            <p>
              La ley te da el derecho de <strong>Acceder, Rectificar, Cancelar</strong> tu información, así como de <strong>Oponerte</strong> a su uso. Para ejercer tus derechos ARCO, solo tienes que enviarnos un correo a <a href="mailto:contacto@cybercodigo.dev">contacto@cybercodigo.dev</a>. Tu petición es una orden para nosotros.
            </p>

            <h2 className="legal-subtitle">5. Cambios a este aviso</h2>
            <p>
              Si llegamos a hacer cambios importantes a este aviso, te lo haremos saber a través de nuestro sitio web o por correo. Nuestra promesa de transparencia sigue intacta.
            </p>

            <p>
              Gracias por tu confianza. Si tienes cualquier duda, por favor, escríbenos. Aquí estamos para ayudarte.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AvisoPrivacidadPage; 