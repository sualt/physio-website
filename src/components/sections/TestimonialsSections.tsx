&apos;use client&apos;

import { useEffect, useRef } from &apos;react&apos;
import { Star, Quote } from &apos;lucide-react&apos;

const YORUMLAR = [
  { isim: &apos;Ayşe K.&apos;, harf: &apos;AK&apos;, hizmet: &apos;Manuel Terapi&apos;, yildiz: 5,
    yorum: &apos;3 yıldır çektiğim bel ağrısından 6 seansta kurtuldum. Tedavi yaklaşımları gerçekten farklı ve sonuç odaklı.&apos; },
  { isim: &apos;Mehmet S.&apos;, harf: &apos;MS&apos;, hizmet: &apos;Spor Rehabilitasyonu&apos;, yildiz: 5,
    yorum: &apos;Menisküs ameliyatından sonra 2 ayda sahaya döndüm. Rehabilitasyon süreci mükemmel planlanmıştı.&apos; },
  { isim: &apos;Zeynep A.&apos;, harf: &apos;ZA&apos;, hizmet: &apos;Klinik Pilates&apos;, yildiz: 5,
    yorum: &apos;Skolyoz tedavisinde inanılmaz ilerleme kaydettim. Duruşum düzeldi, sırt ağrılarım büyük ölçüde azaldı.&apos; },
  { isim: &apos;Hasan B.&apos;, harf: &apos;HB&apos;, hizmet: &apos;Boyun Ağrısı Tedavisi&apos;, yildiz: 5,
    yorum: &apos;Boyun düzleşmesinden kaynaklanan migrenimi fizyoterapi ile çözdüm. İlaçsız bu kadar iyi hissedeceğimi düşünmemiştim.&apos; },
  { isim: &apos;Selin M.&apos;, harf: &apos;SM&apos;, hizmet: &apos;Bruksizm & TME&apos;, yildiz: 5,
    yorum: &apos;Çene ağrısı için gittim, boyun ve omuzumun bununla bağlantılı olduğunu öğrendim. Bütüncül yaklaşımları işe yarıyor.&apos; },
  { isim: &apos;Okan T.&apos;, harf: &apos;OT&apos;, hizmet: &apos;Reformer Egzersiz&apos;, yildiz: 5,
    yorum: &apos;Reformer hayatımı değiştirdi. Core kaslarım çok güçlendi, postürüm düzeldi, enerjim arttı.&apos; },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(&apos;visible&apos;) })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll(&apos;.reveal&apos;).forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className=&quot;py-24 bg-white&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 lg:px-8&quot;>

        <div className=&quot;text-center mb-16&quot;>
          <div className=&quot;reveal inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-1.5 mb-5&quot;>
            <span className=&quot;w-1.5 h-1.5 rounded-full bg-yellow-400&quot;/>
            <span className=&quot;text-sm text-primary-700 font-medium&quot;>Hasta Yorumları</span>
          </div>
          <h2 className=&quot;reveal font-display text-4xl lg:text-5xl font-light text-charcoal mb-4&quot;
            style={{ transitionDelay: &apos;0.1s&apos; }}>
            Hastalarımız ne <span className=&quot;italic font-semibold gradient-text&quot;>söylüyor?</span>
          </h2>
          <div className=&quot;reveal flex items-center justify-center gap-1.5 mt-3&quot; style={{ transitionDelay: &apos;0.2s&apos; }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className=&quot;fill-yellow-400 text-yellow-400&quot;/>)}
            <span className=&quot;text-charcoal font-semibold ml-1&quot;>4.9</span>
            <span className=&quot;text-gray-400 text-sm&quot;>— 127 değerlendirme</span>
          </div>
        </div>

        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-5&quot;>
          {YORUMLAR.map((y, i) => (
            <div key={y.isim}
              className=&quot;reveal bg-[#faf8f5] border border-gray-100 rounded-sm p-6 flex flex-col relative&quot;
              style={{ transitionDelay: `${0.07 * i}s` }}>
              <Quote size={22} className=&quot;text-primary-100 absolute top-5 right-5&quot;/>
              <div className=&quot;flex gap-0.5 mb-4&quot;>
                {[...Array(y.yildiz)].map((_, j) => <Star key={j} size={13} className=&quot;fill-yellow-400 text-yellow-400&quot;/>)}
              </div>
              <p className=&quot;text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic&quot;>&quot;{y.yorum}&quot;</p>
              <div className=&quot;flex items-center gap-3 border-t border-gray-100 pt-4&quot;>
                <div className=&quot;w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center text-xs font-medium text-white&quot;>
                  {y.harf}
                </div>
                <div>
                  <div className=&quot;text-sm font-medium text-charcoal&quot;>{y.isim}</div>
                  <div className=&quot;text-xs text-gray-400&quot;>{y.hizmet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}