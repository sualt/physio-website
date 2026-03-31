import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'FizyoKlinik | Kişiye Özel Fizyoterapi & Rehabilitasyon',
    template: '%s | FizyoKlinik',
  },
  description:
    'Manuel terapi, klinik pilates, ortopedik rehabilitasyon ve spor yaralanmalarında uzman fizyoterapi kliniği.',
  keywords: [
    'fizyoterapi',
    'rehabilitasyon',
    'manuel terapi',
    'klinik pilates',
    'bel ağrısı',
    'skolyoz',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}