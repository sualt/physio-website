import type { Metadata } from &apos;next&apos;
import &apos;./globals.css&apos;

export const metadata: Metadata = {
  title: {
    default: &apos;FizyoKlinik | Kişiye Özel Fizyoterapi & Rehabilitasyon&apos;,
    template: &apos;%s | FizyoKlinik&apos;,
  },
  description: &apos;Manuel terapi, klinik pilates, ortopedik rehabilitasyon ve spor yaralanmalarında uzman fizyoterapi kliniği.&apos;,
  keywords: [&apos;fizyoterapi&apos;,&apos;rehabilitasyon&apos;,&apos;manuel terapi&apos;,&apos;klinik pilates&apos;,&apos;bel ağrısı&apos;,&apos;skolyoz&apos;],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang=&quot;tr&quot;>
      <body className=&quot;antialiased&quot;>
        {children}
      </body>
    </html>
  )
}