import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages, apiKey } = await req.json();
    if (!apiKey || !messages) {
      return NextResponse.json({ error: 'Faltan parámetros.' }, { status: 400 });
    }
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });
    if (!openaiRes.ok) {
      const err = await openaiRes.json();
      return NextResponse.json({ error: err.error?.message || 'Error en OpenAI' }, { status: 500 });
    }
    const data = await openaiRes.json();
    const aiMessage = data.choices?.[0]?.message?.content || '';
    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
} 