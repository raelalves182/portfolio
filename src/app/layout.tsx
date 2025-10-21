import { Josefin_Sans } from 'next/font/google';
import Header from '@/components/Header';
import './styles/globlas.css';
import Head from './head';

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
