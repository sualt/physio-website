import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import CTASection from &apos;@/components/sections/CTASection&apos;
import Link from &apos;next/link&apos;
import { HIZMETLER } from &apos;@/lib/constants&apos;

export const metadata: Metadata = { title: &apos;Hizmetlerimiz&apos; }

export default function HizmetlerSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className=&quot;bg-primary-950 py-16 px-6 text-center&quot;>
          <h1 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-3&quot;>
            <span className=&quot;italic font-semibold text-primary-300&quot;>Fizyoterapi</span> Hizmetlerimiz
          </h1>
          <p className=&quot;text-primary-300 max-w-lg mx-auto&quot;>
            Kişiye özel, kanıta dayalı tedavi programlarıyla kalıcı iyileşme sağlıyoruz.
          </p>
        </div>

        <section className=&quot;py-20 bg-[#faf8f5]&quot;>
          <div className=&quot;max-w-6xl mx-auto px-6 space-y-8&quot;>
            {HIZMETLER.map((h, i) => (
              <div key={h.id} id={h.id}
                className={`grid md:grid-cols-2 gap-8 items-center bg-white border border-gray-100 rounded-sm p-8 ${i % 2 === 1 ? &apos;md:flex-row-reverse&apos; : &apos;&apos;}`}>
                <div className={i % 2 === 1 ? &apos;md:order-2&apos; : &apos;&apos;}>
                  <div className=&quot;text-5xl mb-4&quot;>{h.icon}</div>
                  <div className=&quot;flex flex-wrap gap-1.5 mb-4&quot;>
                    {h.etiketler.map(e => (
                      <span key={e} className=&quot;text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full&quot;>{e}</span>
                    ))}
                  </div>
                  <h2 className=&quot;font-display text-3xl font-semibold text-charcoal mb-3&quot;>{h.baslik}</h2>
                  <p className=&quot;text-gray-600 leading-relaxed mb-6&quot;>{h.uzun}</p>
                  <Link href=&quot;/randevu&quot;
                    className=&quot;inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-primary-700 transition-all&quot;>
                    Bu Hizmet İçin Randevu Al
                  </Link>
                </div>
                <div className={`h-48 md:h-64 rounded-sm bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center ${i % 2 === 1 ? &apos;md:order-1&apos; : &apos;&apos;}`}>
                  <span className=&quot;text-8xl opacity-30&quot;>{h.icon}</span>
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