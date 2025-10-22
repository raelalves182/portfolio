'use client';

import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/Header';
import { useEffect } from 'react';
import Head from './head';
import Aos from 'aos';
// CSS
import './styles/globlas.css';
import 'aos/dist/aos.css';

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="pt-br" className={josefin_sans.className}>
      <Head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
