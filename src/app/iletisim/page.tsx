import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import { Phone, Mail, MapPin, Clock } from &apos;lucide-react&apos;
import { KLINIK } from &apos;@/lib/constants&apos;

export const metadata: Metadata = { title: &apos;İletişim&apos; }

export default function IletisimSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className=&quot;bg-primary-950 py-16 px-6 text-center&quot;>
          <h1 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-3&quot;>
            Bize <span className=&quot;italic font-semibold text-primary-300&quot;>Ulaşın</span>
          </h1>
          <p className=&quot;text-primary-300&quot;>Sorularınız için buradayız.</p>
        </div>

        <section className=&quot;py-20 bg-[#faf8f5]&quot;>
          <div className=&quot;max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12&quot;>
            {/* Bilgiler */}
            <div className=&quot;space-y-6&quot;>
              <h2 className=&quot;font-display text-2xl font-semibold text-charcoal mb-6&quot;>İletişim Bilgileri</h2>
              {[
                { icon: Phone, baslik: &apos;Telefon&apos;, icerik: KLINIK.telefon, link: `tel:${KLINIK.telefon}` },
                { icon: Mail, baslik: &apos;E-posta&apos;, icerik: KLINIK.email, link: `mailto:${KLINIK.email}` },
                { icon: MapPin, baslik: &apos;Adres&apos;, icerik: KLINIK.adres, link: KLINIK.maps_url },
              ].map(({ icon: Icon, baslik, icerik, link }) => (
                <a key={baslik} href={link} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;
                  className=&quot;flex items-start gap-4 bg-white border border-gray-100 rounded-sm p-5 hover:border-primary-300 transition-colors group&quot;>
                  <div className=&quot;w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary-600 transition-colors&quot;>
                    <Icon size={18} className=&quot;text-primary-600 group-hover:text-white transition-colors&quot;/>
                  </div>
                  <div>
                    <div className=&quot;text-xs text-gray-400 mb-0.5&quot;>{baslik}</div>
                    <div className=&quot;text-charcoal font-medium text-sm&quot;>{icerik}</div>
                  </div>
                </a>
              ))}

              {/* Çalışma Saatleri */}
              <div className=&quot;bg-white border border-gray-100 rounded-sm p-5&quot;>
                <div className=&quot;flex items-center gap-3 mb-4&quot;>
                  <div className=&quot;w-10 h-10 bg-primary-50 rounded-sm flex items-center justify-center&quot;>
                    <Clock size={18} className=&quot;text-primary-600&quot;/>
                  </div>
                  <div className=&quot;text-sm font-medium text-charcoal&quot;>Çalışma Saatleri</div>
                </div>
                <div className=&quot;space-y-2 text-sm text-gray-600 pl-13&quot;>
                  <div className=&quot;flex justify-between&quot;><span>Pazartesi – Cuma</span><span className=&quot;font-medium&quot;>09:00 – 19:00</span></div>
                  <div className=&quot;flex justify-between&quot;><span>Cumartesi</span><span className=&quot;font-medium&quot;>09:00 – 14:00</span></div>
                  <div className=&quot;flex justify-between&quot;><span>Pazar</span><span className=&quot;font-medium text-red-500&quot;>Kapalı</span></div>
                </div>
              </div>
            </div>

            {/* Harita placeholder */}
            <div className=&quot;bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col&quot;>
              <div className=&quot;bg-primary-100 flex-1 min-h-64 flex items-center justify-center&quot;>
                <div className=&quot;text-center text-primary-600&quot;>
                  <MapPin size={40} className=&quot;mx-auto mb-3&quot;/>
                  <p className=&quot;font-medium&quot;>Google Maps buraya entegre edilecek</p>
                  <p className=&quot;text-sm text-primary-400 mt-1&quot;>İskenderun, Hatay</p>
                  <a href={KLINIK.maps_url} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;
                    className=&quot;mt-4 inline-block bg-primary-600 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-primary-700 transition-colors&quot;>
                    Haritada Göster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}