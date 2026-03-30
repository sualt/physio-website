import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/ui/ChatBot'
import CTASection from '@/components/sections/CTASection'
import Link from 'next/link'
import { HIZMETLER } from '@/lib/constants'

export const metadata: Metadata = { title: 'Hizmetlerimiz' }

export default function HizmetlerSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary-950 py-16 px-6 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">
            <span className="italic font-semibold text-primary-300">Fizyoterapi</span> Hizmetlerimiz
          </h1>
          <p className="text-primary-300 max-w-lg mx-auto">
            Kişiye özel, kanıta dayalı tedavi programlarıyla kalıcı iyileşme sağlıyoruz.
          </p>
        </div>

        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-6xl mx-auto px-6 space-y-8">
            {HIZMETLER.map((h, i) => (
              <div key={h.id} id={h.id}
                className={`grid md:grid-cols-2 gap-8 items-center bg-white border border-gray-100 rounded-sm p-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-5xl mb-4">{h.icon}</div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {h.etiketler.map(e => (
                      <span key={e} className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full">{e}</span>
                    ))}
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-charcoal mb-3">{h.baslik}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{h.uzun}</p>
                  <Link href="/randevu"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-primary-700 transition-all">
                    Bu Hizmet İçin Randevu Al
                  </Link>
                </div>
                <div className={`h-48 md:h-64 rounded-sm bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="text-8xl opacity-30">{h.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}