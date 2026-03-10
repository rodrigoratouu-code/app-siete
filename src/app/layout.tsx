import type { Metadata } from 'next'
import { siteConfig } from '@/config/siteConfig'
import './globals.css'

export const metadata: Metadata = {
  title: 'PARTY Pinto Rosa - Academia de Baile',
  description: 'Baila donde tú quieras en Barcelona. Tu escuela de baile móvil.',
  manifest: '/manifest.json',
  themeColor: '#FF007F',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PARTY Pinto Rosa',
  },
  openGraph: {
    title: 'PARTY Pinto Rosa - Academia de Baile',
    description: 'Baila donde tú quieras en Barcelona. Tu escuela de baile móvil.',
    locale: 'es_ES',
    siteName: 'PARTY Pinto Rosa',
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
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF007F" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/PartyRP-192.png" />
        <link rel="apple-touch-icon" href="/icons/PartyRP-192.png" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
