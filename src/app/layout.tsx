import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FizyoKlinik | Kişiye Özel Fizyoterapi & Rehabilitasyon',
    template: '%s | FizyoKlinik',
  },
  description: 'Manuel terapi, klinik pilates, ortopedik rehabilitasyon ve spor yaralanmalarında uzman fizyoterapi kliniği.',
  keywords: ['fizyoterapi','rehabilitasyon','manuel terapi','klinik pilates','bel ağrısı','skolyoz'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}