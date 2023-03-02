import Header from '@/components/Header';
import './styles/globlas.css';
import { Josefin_Sans } from '@next/font/google';

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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${josefin_sans.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
