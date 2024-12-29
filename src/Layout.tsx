import React from 'react';
import '../global.css';

export const metadata = {
  title: 'Portfolio Andrés Altamura',
  description:
    'Portafolio de Esteban Andrés Altamura. Desarrollador frontend Next, React, Typescript',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-openSans font-russoFont font-interFont">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;

