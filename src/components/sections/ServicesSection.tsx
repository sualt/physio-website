&apos;use client&apos;

import { useEffect, useRef } from &apos;react&apos;
import Link from &apos;next/link&apos;
import { ArrowRight } from &apos;lucide-react&apos;
import { HIZMETLER } from &apos;@/lib/constants&apos;

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(&apos;visible&apos;) })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll(&apos;.reveal&apos;).forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className=&quot;py-24 bg-[#faf8f5] pattern-bg&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 lg:px-8&quot;>

        <div className=&quot;text-center mb-16&quot;>
          <div className=&quot;reveal inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5&quot;>
            <span className=&quot;w-1.5 h-1.5 rounded-full bg-primary-500&quot;/>
            <span className=&quot;text-sm text-primary-700 font-medium&quot;>Tedavi Alanlarımız</span>
          </div>
          <h2 className=&quot;reveal font-display text-4xl lg:text-5xl font-light text-charcoal mb-4&quot;
            style={{ transitionDelay: &apos;0.1s&apos; }}>
            Kişiye Özel{&apos; &apos;}
            <span className=&quot;italic font-semibold gradient-text&quot;>Fizyoterapi</span>{&apos; &apos;}
            Hizmetleri
          </h2>
          <p className=&quot;reveal text-gray-500 max-w-xl mx-auto leading-relaxed&quot;
            style={{ transitionDelay: &apos;0.2s&apos; }}>
            Yalnızca ağrıyı azaltmak değil; hareket kalitesini artırmak ve kalıcı iyileşme sağlamak için çalışıyoruz.
          </p>
        </div>

        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4&quot;>
          {HIZMETLER.map((h, i) => (
            <Link key={h.id} href={`/hizmetler#${h.id}`}
              className=&quot;reveal group bg-white border border-gray-100 rounded-sm p-6 card-hover flex flex-col&quot;
              style={{ transitionDelay: `${0.05 * (i % 8)}s` }}>
              <div className=&quot;text-3xl mb-4&quot;>{h.icon}</div>
              <h3 className=&quot;font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-primary-700 transition-colors&quot;>
                {h.baslik}
              </h3>
              <p className=&quot;text-sm text-gray-500 leading-relaxed flex-1 mb-4&quot;>{h.kisa}</p>
              <div className=&quot;flex flex-wrap gap-1.5 mb-4&quot;>
                {h.etiketler.map(tag => (
                  <span key={tag} className=&quot;text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full&quot;>{tag}</span>
                ))}
              </div>
              <div className=&quot;flex items-center gap-1 text-xs text-primary-600 font-medium group-hover:gap-2 transition-all&quot;>
                Detaylı bilgi <ArrowRight size={12}/>
              </div>
            </Link>
          ))}
        </div>

        <div className=&quot;reveal text-center mt-12&quot; style={{ transitionDelay: &apos;0.2s&apos; }}>
          <Link href=&quot;/randevu&quot;
            className=&quot;inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-sm font-medium hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5&quot;>
            Ücretsiz Değerlendirme için Randevu Al
            <ArrowRight size={18}/>
          </Link>
        </div>
      </div>
    </section>
  )
}