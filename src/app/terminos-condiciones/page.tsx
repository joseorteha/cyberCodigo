import Head from 'next/head';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Cyber Código',
  description: 'Conoce los términos y condiciones de nuestros servicios. Reglas claras para una colaboración exitosa y de confianza.',
};

const TerminosCondicionesPage = () => {
  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <main className="legal-section">
        <div className="legal-container">
          <h1 className="legal-title">Términos y Condiciones</h1>
          <p className="last-updated">Última actualización: 22 de Junio de 2024</p>

          <div className="legal-content">
            <p>
              ¡Qué bueno tenerte por aquí! En <strong>Cyber Código</strong>, creemos que las mejores colaboraciones nacen de la confianza y las reglas claras. Piensa en este documento no como una letra pequeña, sino como un apretón de manos: un acuerdo mutuo que pone las bases para construir algo increíble juntos.
            </p>

            <h2 className="legal-subtitle">1. Nuestros Servicios</h2>
            <p>
              Nos dedicamos con pasión al <strong>diseño y desarrollo de sitios web a medida</strong>, registro de dominios, configuración de hosting y servicios de mantenimiento. Cada línea de código y cada pixel están puestos con la intención de que tu proyecto brille en el mundo digital.
            </p>

            <h2 className="legal-subtitle">2. El Proceso de Colaboración</h2>
            <p>
              Nuestro trabajo se guía por un proceso claro:
            </p>
            <ul>
              <li><strong>Cotización y Acuerdo:</strong> Todo empieza con una plática para entender tu visión. Te presentaremos una cotización detallada. Para arrancar el motor, solemos requerir un anticipo (generalmente del 50%).</li>
              <li><strong>Tu Colaboración es Clave:</strong> Para que tu web refleje tu esencia, necesitaremos que nos proporciones a tiempo los textos, imágenes y accesos necesarios. La comunicación fluida es el aceite que mueve este engranaje.</li>
              <li><strong>Entregas y Revisiones:</strong> Te presentaremos avances para que los revises. Tendremos rondas de ajustes definidas en nuestra cotización para asegurar que el resultado final te encante.</li>
              <li><strong>Entrega Final:</strong> Una vez aprobado el trabajo y cubierto el pago final, te entregaremos tu sitio web completamente funcional, junto con los accesos correspondientes. ¡Tu proyecto estará listo para conquistar el internet!</li>
            </ul>

            <h2 className="legal-subtitle">3. Sobre Pagos y Propiedad</h2>
            <p>
              <strong>Los pagos se estructuran</strong> según lo acordado en la cotización. Una vez liquidado el proyecto en su totalidad, <strong>tú eres el único dueño de tu sitio web</strong>. El código, los diseños, todo es tuyo. Nosotros solo nos quedamos con la satisfacción de haber sido parte de tu historia.
            </p>

            <h2 className="legal-subtitle">4. Cancelaciones</h2>
            <p>
              Entendemos que los planes pueden cambiar. Si necesitas cancelar el proyecto, se analizará el trabajo realizado hasta el momento para definir los pasos a seguir. El anticipo inicial generalmente cubre la primera fase de investigación, estrategia y diseño, por lo que no es reembolsable. Buscaremos siempre el acuerdo más justo para ambos.
            </p>
            
            <h2 className="legal-subtitle">5. Confidencialidad</h2>
            <p>
             Toda la información de tu proyecto es tratada con la máxima discreción. Somos una bóveda de confianza.
            </p>

            <p>
              Al contratar nuestros servicios, aceptas estos términos. Si algo no está claro o tienes alguna pregunta, por favor, dila con toda confianza. Estamos aquí para construir juntos.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default TerminosCondicionesPage; 