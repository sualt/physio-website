import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/ui/ChatBot'
import CTASection from '@/components/sections/CTASection'
import { UZMANLAR } from '@/lib/constants'

export const metadata: Metadata = { title: 'Uzmanlarımız' }

export default function UzmanlarSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary-950 py-16 px-6 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">
            Uzman <span className="italic font-semibold text-primary-300">Fizyoterapistlerimiz</span>
          </h1>
          <p className="text-primary-300 max-w-lg mx-auto">Alanında uzmanlaşmış, sürekli gelişen, hasta odaklı ekibimiz.</p>
        </div>

        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UZMANLAR.map(u => (
              <div key={u.id} className="bg-white border border-gray-100 rounded-sm p-8 text-center card-hover">
                <div className={`w-20 h-20 ${u.renk} rounded-full flex items-center justify-center mx-auto mb-5 text-white text-xl font-semibold font-display`}>
                  {u.avatar}
                </div>
                <h2 className="font-display text-xl font-semibold text-charcoal mb-1">{u.isim}</h2>
                <p className="text-primary-600 text-sm font-medium mb-2">{u.unvan}</p>
                <div className="w-8 h-0.5 bg-primary-300 mx-auto mb-4"/>
                <p className="text-gray-500 text-sm mb-3">{u.uzmanlik}</p>
                <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full">{u.deneyim} deneyim</span>
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