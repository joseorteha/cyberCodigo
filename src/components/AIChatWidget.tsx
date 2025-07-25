"use client";
import React, { useState, useRef, useEffect } from 'react';
import '../scss/WhatsAppButton.scss'; // Para aprovechar estilos flotantes

const initialMessages = [
  { role: 'assistant', content: '¡Hola! Soy el asistente de Cyber Código. ¿En qué puedo ayudarte hoy?' }
];

const SYSTEM_PROMPT = `
Eres el asistente oficial de Cyber Código, una agencia digital de Zongolica, Veracruz. Solo puedes responder preguntas relacionadas con Cyber Código, sus servicios, su historia, su equipo, sus casos de éxito y su misión. Si te preguntan algo fuera de ese contexto, responde amablemente que solo puedes ayudar con información sobre Cyber Código.

Información clave:
- Cyber Código crea páginas web de alto impacto para negocios y emprendedores en Zongolica y la región.
- Servicios: diseño web, desarrollo a medida, optimización SEO, integración de WhatsApp, blogs, portafolios, landing pages, formularios de contacto, testimonios, administración de contenido.
- Misión: Impulsar el crecimiento digital de los negocios locales con tecnología profesional, trato humano y resultados medibles.
- Valores: profesionalismo, cercanía, innovación, honestidad, orgullo local.
- Casos de éxito: Barbería Zongolica (aumento de clientes por WhatsApp), Veterinaria Guau y Miau (más consultas online), FitFlow (clases virtuales), ClickMail (automatización de correos).
- Fundador: José, apasionado por la tecnología y el desarrollo local.
- Contacto: WhatsApp, formulario web, redes sociales.
- Tono: profesional, amigable, claro, motivador.

Nunca inventes información. Si no sabes la respuesta, invita a contactar por WhatsApp o el formulario. Responde siempre en español neutro.`;

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
            <span>Asistente IA</span>
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
      <style jsx>{`
        .ai-chat-widget {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 9999;
        }
        .ai-chat-box {
          width: 340px;
          max-width: 95vw;
          background: #181A20;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: fadeInUp .3s;
        }
        .ai-chat-header {
          background: #007BFF;
          color: #fff;
          padding: 1rem;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .ai-chat-close {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .ai-chat-messages {
          flex: 1;
          padding: 1rem;
          background: #22242a;
          overflow-y: auto;
          max-height: 320px;
        }
        .ai-chat-msg {
          margin-bottom: 0.7rem;
          padding: 0.7rem 1rem;
          border-radius: 12px;
          max-width: 85%;
          word-break: break-word;
        }
        .ai-chat-msg.bot {
          background: #007BFF;
          color: #fff;
          align-self: flex-start;
        }
        .ai-chat-msg.user {
          background: #00FFAB;
          color: #181A20;
          align-self: flex-end;
        }
        .ai-chat-msg.error {
          background: #ff4d4f;
          color: #fff;
        }
        .ai-chat-input-row {
          display: flex;
          border-top: 1px solid #22242a;
          background: #181A20;
        }
        .ai-chat-input {
          flex: 1;
          border: none;
          padding: 1rem;
          background: transparent;
          color: #fff;
          font-size: 1rem;
        }
        .ai-chat-send {
          background: #00FFAB;
          color: #181A20;
          border: none;
          padding: 0 1.2rem;
          font-weight: bold;
          cursor: pointer;
          border-radius: 0 0 18px 0;
          transition: background 0.2s;
        }
        .ai-chat-send:disabled {
          background: #444;
          color: #aaa;
          cursor: not-allowed;
        }
        @keyframes fadeInUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @media (max-width: 500px) {
          .ai-chat-box { width: 98vw; right: 0; left: 0; bottom: 0; border-radius: 0; }
        }
      `}</style>
    </div>
  );
} 