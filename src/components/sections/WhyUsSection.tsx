&apos;use client&apos;

import { useEffect, useRef } from &apos;react&apos;
import { Award, Users, Brain, Clock, Shield, Heart } from &apos;lucide-react&apos;

const NEDEN = [
  { icon: Brain, baslik: &apos;Kanıta Dayalı Tedavi&apos;, aciklama: &apos;Her tedavi planımız güncel bilimsel literatüre dayanır.&apos; },
  { icon: Users, baslik: &apos;Kişiye Özel Yaklaşım&apos;, aciklama: &apos;Her hastaya detaylı değerlendirme sonrası bireysel plan hazırlanır.&apos; },
  { icon: Award, baslik: &apos;Uzman Fizyoterapistler&apos;, aciklama: &apos;Sürekli eğitim alan ve sertifikalı uzman kadro.&apos; },
  { icon: Clock, baslik: &apos;Sonuç Odaklı Süreç&apos;, aciklama: &apos;Ölçülebilir hedefler ve düzenli ilerleme değerlendirmesi.&apos; },
  { icon: Shield, baslik: &apos;Güvenli & Hijyenik&apos;, aciklama: &apos;En yüksek hijyen standartlarında tam donanımlı klinik.&apos; },
  { icon: Heart, baslik: &apos;Bütüncül Sağlık&apos;, aciklama: &apos;Semptomun ötesinde kök nedeni ele alarak kalıcı iyileşme.&apos; },
]

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(&apos;visible&apos;) })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll(&apos;.reveal&apos;).forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className=&quot;py-24 bg-primary-950&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 lg:px-8&quot;>
        <div className=&quot;grid lg:grid-cols-2 gap-16 items-center&quot;>

          {/* Sol */}
          <div>
            <div className=&quot;reveal inline-flex items-center gap-2 bg-primary-800/60 border border-primary-700 rounded-full px-4 py-1.5 mb-6&quot;>
              <span className=&quot;w-1.5 h-1.5 rounded-full bg-yellow-400&quot;/>
              <span className=&quot;text-sm text-primary-300&quot;>Neden Bizi Seçmelisiniz</span>
            </div>
            <h2 className=&quot;reveal font-display text-4xl lg:text-5xl font-light text-white leading-tight mb-6&quot;
              style={{ transitionDelay: &apos;0.1s&apos; }}>
              Fark yaratan{&apos; &apos;}
              <span className=&quot;italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300&quot;>
                tedavi anlayışı
              </span>
            </h2>
            <p className=&quot;reveal text-primary-300 leading-relaxed mb-10&quot;
              style={{ transitionDelay: &apos;0.2s&apos; }}>
              Amacımız yalnızca ağrıyı azaltmak değil; hareket kalitesini artırmak, fonksiyonelliği geri kazandırmak ve kalıcı iyileşme sağlamaktır.
            </p>
            <div className=&quot;reveal grid grid-cols-3 gap-6 border-t border-primary-800 pt-10&quot;
              style={{ transitionDelay: &apos;0.3s&apos; }}>
              {[{ n: &apos;1200+&apos;, l: &apos;Hasta&apos; }, { n: &apos;8+&apos;, l: &apos;Yıl Deneyim&apos; }, { n: &apos;%96&apos;, l: &apos;Memnuniyet&apos; }].map(s => (
                <div key={s.l}>
                  <div className=&quot;font-display text-3xl font-semibold text-white&quot;>{s.n}</div>
                  <div className=&quot;text-sm text-primary-400 mt-1&quot;>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Kartlar */}
          <div className=&quot;grid sm:grid-cols-2 gap-4&quot;>
            {NEDEN.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.baslik}
                  className=&quot;reveal bg-primary-900/60 border border-primary-800 rounded-sm p-5 hover:border-primary-600 hover:bg-primary-800/60 transition-all group&quot;
                  style={{ transitionDelay: `${0.05 * i}s` }}>
                  <div className=&quot;w-10 h-10 bg-primary-700 rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors&quot;>
                    <Icon size={18} className=&quot;text-primary-200&quot;/>
                  </div>
                  <h3 className=&quot;font-display font-semibold text-white mb-2&quot;>{item.baslik}</h3>
                  <p className=&quot;text-sm text-primary-400 leading-relaxed&quot;>{item.aciklama}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}