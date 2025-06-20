export default function TerminosCondiciones() {
  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Términos y Condiciones</h1>
      <p>Al contratar los servicios de <b>Cyber Código</b>, aceptas los siguientes términos y condiciones:</p>
      <ul style={{ marginLeft: 20, marginBottom: 20 }}>
        <li>El pago de los servicios se realiza por adelantado o según acuerdo escrito.</li>
        <li>El tiempo de entrega puede variar según la complejidad del proyecto y la respuesta del cliente.</li>
        <li>El cliente es responsable de proporcionar la información y materiales necesarios para el desarrollo de la página web.</li>
        <li>El hosting y dominio incluidos son válidos por 1 año. La renovación anual tiene costo adicional.</li>
        <li>Cyber Código no se hace responsable por caídas del servicio ajenas a su control (proveedor de hosting, fuerza mayor, etc.).</li>
        <li>El cliente puede solicitar cambios y soporte durante el periodo contratado.</li>
      </ul>
      <p>Para cualquier duda o aclaración, contáctanos en <a href="mailto:codemasterdev@outlook.com">codemasterdev@outlook.com</a>.</p>
      <p style={{ marginTop: 40 }}>Última actualización: {new Date().getFullYear()}</p>
    </main>
  );
} 