import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Crear un cliente de Supabase específico para esta ruta de API, usando las claves de entorno.
// ¡Importante! Usamos la clave de servicio (service_key) para obtener acceso de administrador.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
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