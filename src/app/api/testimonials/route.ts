import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function GET() {
  // La inicialización del cliente se mueve DENTRO de la función.
  // Esto asegura que las variables de entorno estén disponibles cuando se ejecute.
  const supabaseAdmin = createClient(
    supabaseUrl,
    supabaseServiceKey // Revertido para coincidir con la configuración local
  );

  try {
    const { data, error } = await supabaseAdmin
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Ocurrió un error desconocido';
    return NextResponse.json({ message: `Error fetching testimonials: ${message}` }, { status: 500 });
  }
} 