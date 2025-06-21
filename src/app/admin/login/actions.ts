'use server';

import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface SessionData {
  isAdmin: boolean;
}

// Configuración de la sesión
const sessionOptions = {
  password: process.env.ADMIN_PASSWORD!, // ¡Usa una contraseña mucho más segura en producción!
  cookieName: 'cyber-codigo-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
}

export async function login(formData: FormData) {
  const password = formData.get('password');
  
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: 'Contraseña incorrecta.' };
  }

  const session = await getSession();
  session.isAdmin = true;
  await session.save();
  
  redirect('/admin');
}

export async function logout() {
  const session = await getSession();
  session.destroy();
  redirect('/admin/login');
} 