import type { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ritmo Latino - Academia de Baile',
  description: 'Aprende Salsa, Bachata, Reguetón y Perreo con los mejores.',
  openGraph: {
    title: 'Ritmo Latino - Academia de Baile',
    description: 'Aprende Salsa, Bachata, Reguetón y Perreo con los mejores.',
    locale: 'es_ES',
    siteName: 'Ritmo Latino',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
