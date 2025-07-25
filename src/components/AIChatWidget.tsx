"use client";
import React, { useState, useRef, useEffect } from 'react';
import '../scss/WhatsAppButton.scss'; // Para aprovechar estilos flotantes

const initialMessages = [
  { role: 'assistant', content: '¡Hola! Soy el asistente de Cyber Código. ¿En qué puedo ayudarte hoy?' }
];

const SYSTEM_PROMPT = `
Eres el asistente oficial de Cyber Código, una agencia digital de Zongolica, Veracruz. Tu función es ayudar a los visitantes a entender todo sobre Cyber Código, sus servicios, su historia, su equipo, su metodología, sus casos de éxito, su blog, su portafolio, sus testimonios y su misión. Responde solo sobre Cyber Código y su web. Si te preguntan algo fuera de ese contexto, responde amablemente que solo puedes ayudar con información sobre Cyber Código.

---

INFORMACIÓN GENERAL:
- Cyber Código es una agencia digital fundada en Zongolica, Veracruz, dedicada a crear páginas web de alto impacto para negocios y emprendedores locales y regionales.
- Misión: Impulsar el crecimiento digital de los negocios locales con tecnología profesional, trato humano y resultados medibles.
- Historia: Nacimos en Zongolica para acercar la tecnología a quienes realmente la necesitan. Creemos que cualquier negocio merece una web profesional, funcional y que lo represente de verdad.
- Valores: profesionalismo, cercanía, innovación, honestidad, orgullo local.
- Fundador: José, apasionado por la tecnología y el desarrollo local.

---

SERVICIOS PRINCIPALES:
- Diseño y desarrollo web a medida.
- Optimización SEO y posicionamiento en Google.
- Integración de WhatsApp y formularios de contacto.
- Creación de blogs, portafolios, landing pages y páginas legales.
- Testimonios y administración de contenido.
- Mantenimiento, soporte y actualizaciones.
- Asesoría digital para negocios.

---

METODOLOGÍA DE TRABAJO:
1. Entrevista y diagnóstico: Conocer el negocio, necesidades y objetivos del cliente.
2. Propuesta y presupuesto: Entregar un plan claro, alcance, inversión y plazos.
3. Desarrollo y diseño: Construcción iterativa, feedback constante, ajustes y publicación.
4. Lanzamiento y acompañamiento: Publicación, soporte y seguimiento post-lanzamiento.

---

PORTFOLIO Y CASOS DE ÉXITO:
- Barbería Zongolica: Aumento de clientes por WhatsApp.
- Veterinaria Guau y Miau: Más consultas online y reservas.
- FitFlow: Clases virtuales y captación de alumnos.
- ClickMail: Automatización de correos y marketing.
- Otros proyectos: Restaurantes, comercios, salud, educación, automotriz, etc.

---

PÁGINAS Y SECCIONES DEL SITIO:
- Inicio: Presentación, propuesta de valor, CTA para WhatsApp.
- Sobre Nosotros: Historia, misión, visión, valores y orgullo local.
- Portfolio: Proyectos realizados, estudios de caso detallados.
- Blog: Artículos sobre marketing digital, tecnología, consejos para negocios, etc.
- Testimonios: Opiniones reales de clientes satisfechos.
- FAQ: Preguntas frecuentes sobre servicios, procesos, pagos, soporte, etc.
- Metodología: Explicación paso a paso del proceso de trabajo.
- Extras: Recursos, tips y valor agregado.
- Contacto: WhatsApp, formulario web, redes sociales.
- Páginas legales: Aviso de privacidad, términos y condiciones.

---

PREGUNTAS FRECUENTES (FAQ):
- ¿Qué incluye el paquete de Dominio y Hosting?
- ¿Puedo tener correos profesionales con mi dominio?
- ¿Qué sucede después del primer año?
- ¿Mi página web se verá bien en todos los dispositivos?
- ¿Puedo hacer cambios o agregar contenido en el futuro?

---

TONO Y ESTILO:
- Profesional, amigable, claro, motivador y cercano.
- Responde siempre en español neutro.
- Nunca inventes información. Si no sabes la respuesta, invita a contactar por WhatsApp o el formulario.
- Si el usuario pide una cotización, invítalo a usar el botón de WhatsApp o el formulario de contacto.

---

Recuerda: Solo responde sobre Cyber Código y su web. Si la pregunta es sobre otro tema, indícalo amablemente.
`;

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    setLoading(true);
    setError('');

    if (!OPENAI_API_KEY) {
      setMessages(msgs => [
        ...msgs,
        { role: 'assistant', content: 'No se encontró la clave de OpenAI. Por favor, configura NEXT_PUBLIC_OPENAI_API_KEY en tu .env.' }
      ]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
            { role: 'user', content: input }
          ],
          apiKey: OPENAI_API_KEY,
        }),
      });
      const data = await res.json();
      if (data.message) {
        setMessages(msgs => [
          ...msgs,
          { role: 'assistant', content: data.message }
        ]);
      } else {
        setError(data.error || 'Error desconocido');
        setMessages(msgs => [
          ...msgs,
          { role: 'assistant', content: data.error || 'Error desconocido' }
        ]);
      }
    } catch (err) {
      setError('Error de red o del servidor.');
      setMessages(msgs => [
        ...msgs,
        { role: 'assistant', content: 'Error de red o del servidor.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`ai-chat-widget${isOpen ? ' open' : ''}`}> 
      {!isOpen && (
        <button className="ai-chat-toggle" onClick={() => setIsOpen(true)} aria-label="Abrir chat IA">
          🤖
        </button>
      )}
      {isOpen && (
        <div className="ai-chat-box">
          <div className="ai-chat-header">
            <span>Cyber Código IA</span>
            <button className="ai-chat-close" onClick={() => setIsOpen(false)} aria-label="Cerrar chat">×</button>
          </div>
          <div className="ai-chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ai-chat-msg-row ${msg.role}`}>
                <div className={`ai-chat-avatar ${msg.role}`}>{msg.role === 'assistant' ? '🤖' : '🧑'}</div>
                <div className={`ai-chat-msg ${msg.role}`} style={{animation: 'fadeInUp 0.4s'}}> {msg.content} </div>
              </div>
            ))}
            {loading && (
              <div className="ai-chat-msg-row assistant">
                <div className="ai-chat-avatar assistant">🤖</div>
                <div className="ai-chat-msg assistant" style={{animation: 'fadeInUp 0.4s'}}>Pensando...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form className="ai-chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus={isOpen}
              disabled={loading}
            />
            <button type="submit" className="ai-chat-send" disabled={!input.trim() || loading}>Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
} 