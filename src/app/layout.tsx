import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/organisms/Header/Header'
import { Footer } from '@/components/organisms/Footer/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'A turma do bairro',
  description: 'Site da turma do bairro',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.className} m-auto flex max-w-7xl flex-col items-center justify-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
