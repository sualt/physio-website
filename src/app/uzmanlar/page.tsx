import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import CTASection from &apos;@/components/sections/CTASection&apos;
import { UZMANLAR } from &apos;@/lib/constants&apos;

export const metadata: Metadata = { title: &apos;Uzmanlarımız&apos; }

export default function UzmanlarSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        <div className=&quot;bg-primary-950 py-16 px-6 text-center&quot;>
          <h1 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-3&quot;>
            Uzman <span className=&quot;italic font-semibold text-primary-300&quot;>Fizyoterapistlerimiz</span>
          </h1>
          <p className=&quot;text-primary-300 max-w-lg mx-auto&quot;>Alanında uzmanlaşmış, sürekli gelişen, hasta odaklı ekibimiz.</p>
        </div>

        <section className=&quot;py-20 bg-[#faf8f5]&quot;>
          <div className=&quot;max-w-5xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {UZMANLAR.map(u => (
              <div key={u.id} className=&quot;bg-white border border-gray-100 rounded-sm p-8 text-center card-hover&quot;>
                <div className={`w-20 h-20 ${u.renk} rounded-full flex items-center justify-center mx-auto mb-5 text-white text-xl font-semibold font-display`}>
                  {u.avatar}
                </div>
                <h2 className=&quot;font-display text-xl font-semibold text-charcoal mb-1&quot;>{u.isim}</h2>
                <p className=&quot;text-primary-600 text-sm font-medium mb-2&quot;>{u.unvan}</p>
                <div className=&quot;w-8 h-0.5 bg-primary-300 mx-auto mb-4&quot;/>
                <p className=&quot;text-gray-500 text-sm mb-3&quot;>{u.uzmanlik}</p>
                <span className=&quot;text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full&quot;>{u.deneyim} deneyim</span>
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