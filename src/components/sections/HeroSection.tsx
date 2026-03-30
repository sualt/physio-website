'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">

      {/* Grid desen */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Dekoratif daireler */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float"/>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl"/>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-500/60 to-transparent"/>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Sol: İçerik */}
        <div>
          <div className="reveal inline-flex items-center gap-2 bg-primary-800/60 backdrop-blur-sm border border-primary-600/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-sm text-primary-200">Bugün randevu alabilirsiniz</span>
          </div>

          <h1 className="reveal font-display text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6"
            style={{ transitionDelay: '0.15s' }}>
            Hareket{' '}
            <span className="font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300">
              özgürlüğünüzü
            </span>{' '}
            yeniden kazanın
          </h1>

          <p className="reveal text-primary-200 text-lg leading-relaxed mb-8 max-w-lg"
            style={{ transitionDelay: '0.25s' }}>
            Kişiye özel fizyoterapi programları ile ağrılarınızı geride bırakın. Uzman ekibimiz ve kanıta dayalı tedavi yaklaşımımız ile kalıcı iyileşme sağlıyoruz.
          </p>

          <ul className="reveal flex flex-col gap-3 mb-10" style={{ transitionDelay: '0.35s' }}>
            {['Detaylı fonksiyonel değerlendirme', 'Kişiye özel tedavi planı', 'İlk seanstan itibaren sonuç'].map(item => (
              <li key={item} className="flex items-center gap-3 text-primary-200">
                <CheckCircle2 size={18} className="text-green-400 shrink-0"/>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: '0.45s' }}>
            <Link href="/randevu"
              className="group inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-sm font-medium hover:bg-primary-50 transition-all hover:shadow-xl hover:shadow-white/20">
              Online Randevu Al
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1"/>
            </Link>
            <Link href="/hizmetler"
              className="inline-flex items-center gap-2 border border-primary-400 text-primary-200 px-8 py-4 rounded-sm font-medium hover:bg-primary-800/50 transition-all">
              Hizmetlerimiz
            </Link>
          </div>
        </div>

        {/* Sağ: İstatistik kartları */}
        <div className="hidden lg:flex flex-col gap-5">
          <div className="reveal bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-8"
            style={{ transitionDelay: '0.2s' }}>
            <div className="grid grid-cols-3 gap-6 text-center">
              {[{ n: '1200+', l: 'Başarılı Hasta' }, { n: '8+', l: 'Yıl Deneyim' }, { n: '%96', l: 'Memnuniyet' }].map(s => (
                <div key={s.l}>
                  <div className="font-display text-4xl font-semibold text-white mb-1">{s.n}</div>
                  <div className="text-xs text-primary-300">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-6"
            style={{ transitionDelay: '0.3s' }}>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400 text-yellow-400"/>)}
              <span className="text-yellow-400 font-medium ml-1">4.9</span>
              <span className="text-primary-300 text-sm ml-1">(127 değerlendirme)</span>
            </div>
            <p className="text-primary-200 text-sm italic leading-relaxed">
              "3 yıldır çektiğim bel ağrısından 6 seansta kurtuldum. Tedavi yaklaşımları gerçekten farklı ve sonuç odaklı."
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white font-medium">AK</div>
              <div>
                <div className="text-white text-sm font-medium">Ayşe K.</div>
                <div className="text-primary-400 text-xs">Manuel Terapi Hastası</div>
              </div>
            </div>
          </div>

          <div className="reveal flex flex-wrap gap-2" style={{ transitionDelay: '0.4s' }}>
            {['Manuel Terapi','Klinik Pilates','Reformer','Skolyoz','Spor Rehab','TME'].map(tag => (
              <span key={tag} className="bg-primary-800/60 border border-primary-600/40 text-primary-200 text-xs px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alt fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf8f5] to-transparent"/>
    </section>
  )
}