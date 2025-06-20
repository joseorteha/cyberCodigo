export default function AvisoPrivacidad() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Aviso de Privacidad</h1>
      <p>En <b>Cyber Código</b> nos comprometemos a proteger la privacidad de tus datos personales. La información que nos proporciones será utilizada únicamente para fines de contacto, cotización y prestación de servicios web.</p>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem' }}>¿Qué datos recopilamos?</h2>
      <ul style={{ marginLeft: 20, marginBottom: 20 }}>
        <li>Nombre y datos de contacto (correo, teléfono, WhatsApp)</li>
        <li>Información sobre tu negocio para la creación de tu página web</li>
      </ul>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem' }}>¿Cómo usamos tus datos?</h2>
      <ul style={{ marginLeft: 20, marginBottom: 20 }}>
        <li>Para enviarte cotizaciones y propuestas</li>
        <li>Para brindarte soporte y atención personalizada</li>
        <li>Para la facturación y prestación de servicios contratados</li>
      </ul>
      <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '2rem' }}>Tus derechos</h2>
      <p>Puedes solicitar en cualquier momento la corrección o eliminación de tus datos enviando un correo a <a href="mailto:codemasterdev@outlook.com">codemasterdev@outlook.com</a>.</p>
      <p style={{ marginTop: 40 }}>Última actualización: {new Date().getFullYear()}</p>
    </main>
  );
} 