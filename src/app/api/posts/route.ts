import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// No exponer estas claves en el lado del cliente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// GET: Obtener todos los posts
export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// POST: Crear un nuevo post
export async function POST(request: Request) {
  try {
    const postData = await request.json();
    
    // Validar datos de entrada (simple)
    if (!postData.title || !postData.slug) {
      return NextResponse.json({ message: 'El título y el slug son requeridos' }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from('posts')
      .insert([
        { 
          title: postData.title,
          slug: postData.slug,
          content: postData.content,
          excerpt: postData.excerpt,
          author: postData.author,
          is_published: !!postData.is_published,
          image_url: postData.image_url,
        }
      ])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ message: 'Artículo creado con éxito', post: data });
  } catch (error: any) {
     // Manejar error de slug duplicado
    if (error.code === '23505') {
      return NextResponse.json({ message: 'Error: El "slug" ya existe. Debe ser único.' }, { status: 409 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
} 