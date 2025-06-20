import '../../scss/Legal.scss';

export default function TerminosCondiciones() {
  return (
    <section className="legal-section">
      <div className="legal-container">
        <h1 className="legal-title">Términos y Condiciones</h1>
        <div className="legal-content">
          <p>Bienvenido a **Cyber Código**. Al contratar cualquiera de nuestros servicios, usted (el Cliente) acepta y se compromete a cumplir los siguientes términos y condiciones que rigen nuestra relación profesional.</p>

          <h2 className="legal-subtitle">1. Servicios Ofrecidos</h2>
          <p>Nos especializamos en el diseño, desarrollo y mantenimiento de sitios web, tiendas en línea (e-commerce) y aplicaciones web personalizadas. El alcance, características y entregables de cada proyecto se detallarán en una cotización o propuesta formal que deberá ser aprobada por el Cliente antes de iniciar el trabajo.</p>

          <h2 className="legal-subtitle">2. Proceso de Trabajo y Responsabilidades</h2>
          <ul>
            <li>**Responsabilidad del Cliente:** El Cliente se compromete a proporcionar de manera oportuna todo el material necesario para el proyecto (textos, logos, imágenes, accesos, etc.) y a participar activamente en las fases de revisión y retroalimentación.</li>
            <li>**Tiempos de Entrega:** Los plazos de entrega son estimados y pueden variar según la complejidad del proyecto y la puntualidad en la retroalimentación y entrega de material por parte del Cliente.</li>
            <li>**Revisiones y Cambios:** El proyecto incluye un número de rondas de revisión especificadas en la cotización. Cambios adicionales o modificaciones que excedan el alcance original podrán generar costos extra.</li>
          </ul>

          <h2 className="legal-subtitle">3. Pagos y Facturación</h2>
          <ul>
            <li>Los planes de pago se definirán en la cotización, requiriendo generalmente un anticipo para iniciar el proyecto (ej. 50%) y el pago restante contra entrega o en hitos definidos.</li>
            <li>Los pagos deben realizarse en los plazos acordados para evitar retrasos en el proyecto. Todos los precios son en MXN y no incluyen IVA, a menos que se especifique lo contrario.</li>
          </ul>

          <h2 className="legal-subtitle">4. Dominio y Hospedaje (Hosting)</h2>
          <p>Algunos de nuestros paquetes incluyen el registro de un dominio y el servicio de hospedaje web por un (1) año. La titularidad del dominio será del Cliente. La renovación anual de estos servicios a partir del segundo año tendrá un costo adicional y es responsabilidad del Cliente.</p>

          <h2 className="legal-subtitle">5. Propiedad Intelectual</h2>
          <p>Una vez liquidado el proyecto en su totalidad, el Cliente será el propietario de los derechos de autor del diseño final y el código del sitio web. Nos reservamos el derecho de incluir el proyecto en nuestro portafolio y materiales de marketing.</p>
          
          <h2 className="legal-subtitle">6. Limitación de Responsabilidad</h2>
          <p>Cyber Código no se hace responsable por fallas en servicios de terceros (proveedores de hosting, pasarelas de pago, etc.), pérdidas de datos por mal uso por parte del Cliente o daños causados por ataques de fuerza mayor. Ofrecemos servicios de mantenimiento y seguridad para minimizar estos riesgos.</p>

          <h2 className="legal-subtitle">7. Cancelación y Reembolsos</h2>
          <p>Si el Cliente decide cancelar el proyecto una vez iniciado, no se realizarán reembolsos por el trabajo ya efectuado. El material desarrollado hasta la fecha de cancelación podrá ser entregado al Cliente si corresponde.</p>
          
          <p>Para cualquier duda o aclaración, contáctanos en <a href="mailto:codemasterdev@outlook.com">codemasterdev@outlook.com</a>.</p>
        </div>
        <p className="last-updated">Última actualización: 24 de Julio de 2024</p>
      </div>
    </section>
  );
} 