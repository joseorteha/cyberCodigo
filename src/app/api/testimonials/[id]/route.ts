import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Crear el cliente de Supabase con la clave de servicio para tener permisos de administrador
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

/**
 * Maneja la actualización (aprobación) de un testimonio.
 */
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const { error } = await supabaseAdmin
      .from('testimonials')
      .update({ approved: true })
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ message: 'Testimonio aprobado exitosamente' });
  } catch (error: any) {
    return NextResponse.json({ message: `Error al aprobar: ${error.message}` }, { status: 500 });
  }
}

/**
 * Maneja la eliminación de un testimonio y su imagen asociada.
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Primero, obtenemos la URL de la imagen del testimonio que vamos a borrar.
    const { data: testimonialData, error: selectError } = await supabaseAdmin
      .from('testimonials')
      .select('image_url')
      .eq('id', id)
      .single();

    if (selectError) throw new Error('No se encontró el testimonio para eliminar la imagen.');

    // Si hay una imagen, la eliminamos del almacenamiento.
    if (testimonialData?.image_url) {
      const imageUrl = testimonialData.image_url;
      const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
      await supabaseAdmin.storage.from('testimonials').remove([fileName]);
    }

    // Luego, eliminamos el testimonio de la base de datos.
    const { error: deleteError } = await supabaseAdmin
      .from('testimonials')
      .delete()
      .eq('id', id);

    if (deleteError) throw deleteError;

    return NextResponse.json({ message: 'Testimonio eliminado exitosamente' });
  } catch (error: any) {
    return NextResponse.json({ message: `Error al eliminar: ${error.message}` }, { status: 500 });
  }
} 