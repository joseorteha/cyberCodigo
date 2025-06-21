import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

// PATCH: Actualizar un post existente
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const postData = await request.json();
    const { id } = params;

    const { data, error } = await supabaseAdmin
      .from('posts')
      .update({ 
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        author: postData.author,
        is_published: !!postData.is_published,
        image_url: postData.image_url,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    
    return NextResponse.json({ message: 'Artículo actualizado con éxito', post: data });
  } catch (error: any) {
    if (error.code === '23505') {
      return NextResponse.json({ message: 'Error: El "slug" ya existe. Debe ser único.' }, { status: 409 });
    }
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE: Eliminar un post
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const { error } = await supabaseAdmin
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ message: 'Artículo eliminado con éxito' });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
