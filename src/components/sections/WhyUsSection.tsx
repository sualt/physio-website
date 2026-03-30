'use client'

import { useEffect, useRef } from 'react'
import { Award, Users, Brain, Clock, Shield, Heart } from 'lucide-react'

const NEDEN = [
  { icon: Brain, baslik: 'Kanıta Dayalı Tedavi', aciklama: 'Her tedavi planımız güncel bilimsel literatüre dayanır.' },
  { icon: Users, baslik: 'Kişiye Özel Yaklaşım', aciklama: 'Her hastaya detaylı değerlendirme sonrası bireysel plan hazırlanır.' },
  { icon: Award, baslik: 'Uzman Fizyoterapistler', aciklama: 'Sürekli eğitim alan ve sertifikalı uzman kadro.' },
  { icon: Clock, baslik: 'Sonuç Odaklı Süreç', aciklama: 'Ölçülebilir hedefler ve düzenli ilerleme değerlendirmesi.' },
  { icon: Shield, baslik: 'Güvenli & Hijyenik', aciklama: 'En yüksek hijyen standartlarında tam donanımlı klinik.' },
  { icon: Heart, baslik: 'Bütüncül Sağlık', aciklama: 'Semptomun ötesinde kök nedeni ele alarak kalıcı iyileşme.' },
]

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-primary-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Sol */}
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-primary-800/60 border border-primary-700 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"/>
              <span className="text-sm text-primary-300">Neden Bizi Seçmelisiniz</span>
            </div>
            <h2 className="reveal font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-6"
              style={{ transitionDelay: '0.1s' }}>
              Fark yaratan{' '}
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300">
                tedavi anlayışı
              </span>
            </h2>
            <p className="reveal text-primary-300 leading-relaxed mb-10"
              style={{ transitionDelay: '0.2s' }}>
              Amacımız yalnızca ağrıyı azaltmak değil; hareket kalitesini artırmak, fonksiyonelliği geri kazandırmak ve kalıcı iyileşme sağlamaktır.
            </p>
            <div className="reveal grid grid-cols-3 gap-6 border-t border-primary-800 pt-10"
              style={{ transitionDelay: '0.3s' }}>
              {[{ n: '1200+', l: 'Hasta' }, { n: '8+', l: 'Yıl Deneyim' }, { n: '%96', l: 'Memnuniyet' }].map(s => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-semibold text-white">{s.n}</div>
                  <div className="text-sm text-primary-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Kartlar */}
          <div className="grid sm:grid-cols-2 gap-4">
            {NEDEN.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.baslik}
                  className="reveal bg-primary-900/60 border border-primary-800 rounded-sm p-5 hover:border-primary-600 hover:bg-primary-800/60 transition-all group"
                  style={{ transitionDelay: `${0.05 * i}s` }}>
                  <div className="w-10 h-10 bg-primary-700 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                    <Icon size={18} className="text-primary-200"/>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">{item.baslik}</h3>
                  <p className="text-sm text-primary-400 leading-relaxed">{item.aciklama}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}