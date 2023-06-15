import Header from '@/components/Header';
import { Josefin_Sans } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './styles/globlas.css';

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-josefin_sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className={`${josefin_sans.variable} font-sans`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
