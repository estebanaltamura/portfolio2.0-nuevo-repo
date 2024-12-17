import { NextResponse } from 'next/server';

export function middleware(request) {
  const country = request.geo?.country || 'unknown';

  // Lista de países a bloquear
  const blockedCountries = ['AR']; // Argentina

  if (blockedCountries.includes(country)) {
    // Redirigir a Google en la misma pestaña
    return NextResponse.redirect('https://www.google.com');
  }

  return NextResponse.next();
}