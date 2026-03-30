'use client'

import { useEffect, useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const YORUMLAR = [
  { isim: 'Ayşe K.', harf: 'AK', hizmet: 'Manuel Terapi', yildiz: 5,
    yorum: '3 yıldır çektiğim bel ağrısından 6 seansta kurtuldum. Tedavi yaklaşımları gerçekten farklı ve sonuç odaklı.' },
  { isim: 'Mehmet S.', harf: 'MS', hizmet: 'Spor Rehabilitasyonu', yildiz: 5,
    yorum: 'Menisküs ameliyatından sonra 2 ayda sahaya döndüm. Rehabilitasyon süreci mükemmel planlanmıştı.' },
  { isim: 'Zeynep A.', harf: 'ZA', hizmet: 'Klinik Pilates', yildiz: 5,
    yorum: 'Skolyoz tedavisinde inanılmaz ilerleme kaydettim. Duruşum düzeldi, sırt ağrılarım büyük ölçüde azaldı.' },
  { isim: 'Hasan B.', harf: 'HB', hizmet: 'Boyun Ağrısı Tedavisi', yildiz: 5,
    yorum: 'Boyun düzleşmesinden kaynaklanan migrenimi fizyoterapi ile çözdüm. İlaçsız bu kadar iyi hissedeceğimi düşünmemiştim.' },
  { isim: 'Selin M.', harf: 'SM', hizmet: 'Bruksizm & TME', yildiz: 5,
    yorum: 'Çene ağrısı için gittim, boyun ve omuzumun bununla bağlantılı olduğunu öğrendim. Bütüncül yaklaşımları işe yarıyor.' },
  { isim: 'Okan T.', harf: 'OT', hizmet: 'Reformer Egzersiz', yildiz: 5,
    yorum: 'Reformer hayatımı değiştirdi. Core kaslarım çok güçlendi, postürüm düzeldi, enerjim arttı.' },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"/>
            <span className="text-sm text-primary-700 font-medium">Hasta Yorumları</span>
          </div>
          <h2 className="reveal font-display text-4xl lg:text-5xl font-light text-charcoal mb-4"
            style={{ transitionDelay: '0.1s' }}>
            Hastalarımız ne <span className="italic font-semibold gradient-text">söylüyor?</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-1.5 mt-3" style={{ transitionDelay: '0.2s' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400"/>)}
            <span className="text-charcoal font-semibold ml-1">4.9</span>
            <span className="text-gray-400 text-sm">— 127 değerlendirme</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {YORUMLAR.map((y, i) => (
            <div key={y.isim}
              className="reveal bg-[#faf8f5] border border-gray-100 rounded-sm p-6 flex flex-col relative"
              style={{ transitionDelay: `${0.07 * i}s` }}>
              <Quote size={22} className="text-primary-100 absolute top-5 right-5"/>
              <div className="flex gap-0.5 mb-4">
                {[...Array(y.yildiz)].map((_, j) => <Star key={j} size={13} className="fill-yellow-400 text-yellow-400"/>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">"{y.yorum}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-xs font-medium text-white">
                  {y.harf}
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">{y.isim}</div>
                  <div className="text-xs text-gray-400">{y.hizmet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}