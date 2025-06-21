import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from './app/admin/login/actions';

// Este es el guardia de seguridad. Se ejecuta antes de cargar las páginas.
export async function middleware(request: NextRequest) {
  const session = await getSession();

  // Si el usuario no tiene una sesión de administrador...
  if (!session.isAdmin) {
    // ...lo redirigimos a la página de login.
    // La URL de la API se usa para construir la URL absoluta de redirección.
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Si tiene sesión, puede continuar.
  return NextResponse.next();
}

// Configuración del Middleware:
// Aquí especificamos qué rutas debe proteger el guardia.
export const config = {
  matcher: '/admin', // Protegerá /admin pero NO /admin/login
}; 