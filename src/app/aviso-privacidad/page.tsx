import '../../scss/Legal.scss';

export default function AvisoPrivacidad() {
  return (
    <section className="legal-section">
      <div className="legal-container">
        <h1 className="legal-title">Aviso de Privacidad</h1>
        <div className="legal-content">
          <p>En **Cyber Código** ('nosotros', 'nuestro'), con domicilio en Zongolica, Veracruz, estamos comprometidos con la protección de su privacidad y el tratamiento legítimo de sus datos personales. Este Aviso de Privacidad detalla cómo recopilamos, utilizamos y protegemos la información que nos proporciona a través de nuestro sitio web y servicios de desarrollo.</p>

          <h2 className="legal-subtitle">1. Datos Personales que Recopilamos</h2>
          <p>Podemos recopilar la siguiente información:</p>
          <ul>
            <li>**Datos de Identificación y Contacto:** Nombre completo, dirección de correo electrónico, número de teléfono y/o WhatsApp.</li>
            <li>**Datos del Proyecto:** Información sobre su negocio, objetivos, requisitos y cualquier material (textos, imágenes, etc.) que nos proporcione para la realización de su proyecto web.</li>
            <li>**Datos de Navegación:** Información no identificable personalmente como tipo de navegador, dispositivo y páginas visitadas en nuestro sitio, con el fin de mejorar nuestra plataforma.</li>
          </ul>

          <h2 className="legal-subtitle">2. Finalidad del Tratamiento de Datos</h2>
          <p>Sus datos personales serán utilizados para los siguientes fines:</p>
          <ul>
            <li>Proveer los servicios de diseño y desarrollo web solicitados.</li>
            <li>Elaborar y enviar cotizaciones, propuestas y contratos.</li>
            <li>Mantener una comunicación efectiva durante el ciclo de vida del proyecto.</li>
            <li>Realizar procesos de facturación y cobro.</li>
            <li>Brindar soporte técnico y atención post-lanzamiento.</li>
            <li>Notificarle sobre actualizaciones de nuestros servicios o cambios en nuestras políticas.</li>
          </ul>

          <h2 className="legal-subtitle">3. Seguridad de sus Datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Su información no será vendida, alquilada ni compartida con terceros para fines de marketing sin su consentimiento explícito.</p>

          <h2 className="legal-subtitle">4. Derechos ARCO</h2>
          <p>Usted tiene derecho a **Acceder, Rectificar, Cancelar** sus datos personales, así como a **Oponerse** al tratamiento de los mismos (derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud detallada a nuestro correo de contacto.</p>
          <p>Puede solicitar la corrección o eliminación de sus datos en cualquier momento enviando un correo a <a href="mailto:codemasterdev@outlook.com">codemasterdev@outlook.com</a>.</p>

          <h2 className="legal-subtitle">5. Cambios al Aviso de Privacidad</h2>
          <p>Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Cualquier cambio será notificado a través de nuestro sitio web.</p>
        </div>
        <p className="last-updated">Última actualización: 24 de Julio de 2024</p>
      </div>
    </section>
  );
} 