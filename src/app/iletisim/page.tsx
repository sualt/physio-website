import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/ui/ChatBot'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { KLINIK } from '@/lib/constants'

export const metadata: Metadata = { title: 'İletişim' }

export default function IletisimSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-primary-950 py-16 px-6 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">
            Bize <span className="italic font-semibold text-primary-300">Ulaşın</span>
          </h1>
          <p className="text-primary-300">Sorularınız için buradayız.</p>
        </div>

        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            {/* Bilgiler */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">İletişim Bilgileri</h2>
              {[
                { icon: Phone, baslik: 'Telefon', icerik: KLINIK.telefon, link: `tel:${KLINIK.telefon}` },
                { icon: Mail, baslik: 'E-posta', icerik: KLINIK.email, link: `mailto:${KLINIK.email}` },
                { icon: MapPin, baslik: 'Adres', icerik: KLINIK.adres, link: KLINIK.maps_url },
              ].map(({ icon: Icon, baslik, icerik, link }) => (
                <a key={baslik} href={link} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-sm p-5 hover:border-primary-300 transition-colors group">
                  <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors">
                    <Icon size={18} className="text-primary-600 group-hover:text-white transition-colors"/>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-0.5">{baslik}</div>
                    <div className="text-charcoal font-medium text-sm">{icerik}</div>
                  </div>
                </a>
              ))}

              {/* Çalışma Saatleri */}
              <div className="bg-white border border-gray-100 rounded-sm p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center">
                    <Clock size={18} className="text-primary-600"/>
                  </div>
                  <div className="text-sm font-medium text-charcoal">Çalışma Saatleri</div>
                </div>
                <div className="space-y-2 text-sm text-gray-600 pl-13">
                  <div className="flex justify-between"><span>Pazartesi – Cuma</span><span className="font-medium">09:00 – 19:00</span></div>
                  <div className="flex justify-between"><span>Cumartesi</span><span className="font-medium">09:00 – 14:00</span></div>
                  <div className="flex justify-between"><span>Pazar</span><span className="font-medium text-red-500">Kapalı</span></div>
                </div>
              </div>
            </div>

            {/* Harita placeholder */}
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col">
              <div className="bg-primary-100 flex-1 min-h-64 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <MapPin size={40} className="mx-auto mb-3"/>
                  <p className="font-medium">Google Maps buraya entegre edilecek</p>
                  <p className="text-sm text-primary-400 mt-1">İskenderun, Hatay</p>
                  <a href={KLINIK.maps_url} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-block bg-primary-600 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-primary-700 transition-colors">
                    Haritada Göster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}