import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.headers.get('x-vercel-ip-country') || 'unknown';

  // Lista de países bloqueados
  const blockedCountries = ['AR']; // Argentina

  if (blockedCountries.includes(country)) {
    return NextResponse.redirect('https://www.google.com'); // Redirigir o mostrar un mensaje personalizado
  }

  return NextResponse.next();
}