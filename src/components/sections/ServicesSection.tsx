'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { HIZMETLER } from '@/lib/constants'

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.05 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-[#faf8f5] pattern-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"/>
            <span className="text-sm text-primary-700 font-medium">Tedavi Alanlarımız</span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-light text-charcoal mb-4"
            style={{ transitionDelay: '0.1s' }}>
            Kişiye Özel{' '}
            <span className="italic font-semibold gradient-text">Fizyoterapi</span>{' '}
            Hizmetleri
          </h2>
          <p className="reveal text-gray-500 max-w-xl mx-auto leading-relaxed"
            style={{ transitionDelay: '0.2s' }}>
            Yalnızca ağrıyı azaltmak değil; hareket kalitesini artırmak ve kalıcı iyileşme sağlamak için çalışıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {HIZMETLER.map((h, i) => (
            <Link key={h.id} href={`/hizmetler#${h.id}`}
              className="reveal group bg-white border border-gray-100 rounded-sm p-6 card-hover flex flex-col"
              style={{ transitionDelay: `${0.05 * (i % 8)}s` }}>
              <div className="text-3xl mb-4">{h.icon}</div>
              <h3 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-primary-700 transition-colors">
                {h.baslik}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{h.kisa}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {h.etiketler.map(tag => (
                  <span key={tag} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-primary-600 font-medium group-hover:gap-2 transition-all">
                Detaylı bilgi <ArrowRight size={12}/>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal text-center mt-12" style={{ transitionDelay: '0.2s' }}>
          <Link href="/randevu"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-sm font-medium hover:bg-primary-700 transition-all hover:shadow-xl hover:shadow-primary-600/25 hover:-translate-y-0.5">
            Ücretsiz Değerlendirme için Randevu Al
            <ArrowRight size={18}/>
          </Link>
        </div>
      </div>
    </section>
  )
}