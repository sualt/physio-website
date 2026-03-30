&apos;use client&apos;

import { useEffect, useRef } from &apos;react&apos;
import Link from &apos;next/link&apos;
import { ArrowRight, CheckCircle2, Star } from &apos;lucide-react&apos;

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(&apos;visible&apos;) })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll(&apos;.reveal&apos;).forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className=&quot;relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800&quot;>

      {/* Grid desen */}
      <div className=&quot;absolute inset-0 opacity-10&quot;>
        <svg width=&quot;100%&quot; height=&quot;100%&quot;>
          <defs>
            <pattern id=&quot;grid&quot; width=&quot;60&quot; height=&quot;60&quot; patternUnits=&quot;userSpaceOnUse&quot;>
              <path d=&quot;M 60 0 L 0 0 0 60&quot; fill=&quot;none&quot; stroke=&quot;white&quot; strokeWidth=&quot;0.5&quot;/>
            </pattern>
          </defs>
          <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#grid)&quot;/>
        </svg>
      </div>

      {/* Dekoratif daireler */}
      <div className=&quot;absolute top-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float&quot;/>
      <div className=&quot;absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-500/10 rounded-full blur-2xl&quot;/>
      <div className=&quot;absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-yellow-500/60 to-transparent&quot;/>

      <div className=&quot;relative max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full&quot;>

        {/* Sol: İçerik */}
        <div>
          <div className=&quot;reveal inline-flex items-center gap-2 bg-primary-800/60 backdrop-blur-sm border border-primary-600/40 rounded-full px-4 py-1.5 mb-8&quot;>
            <span className=&quot;w-2 h-2 rounded-full bg-green-400 animate-pulse&quot;/>
            <span className=&quot;text-sm text-primary-200&quot;>Bugün randevu alabilirsiniz</span>
          </div>

          <h1 className=&quot;reveal font-display text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6&quot;
            style={{ transitionDelay: &apos;0.15s&apos; }}>
            Hareket{&apos; &apos;}
            <span className=&quot;font-semibold italic text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300&quot;>
              özgürlüğünüzü
            </span>{&apos; &apos;}
            yeniden kazanın
          </h1>

          <p className=&quot;reveal text-primary-200 text-lg leading-relaxed mb-8 max-w-lg&quot;
            style={{ transitionDelay: &apos;0.25s&apos; }}>
            Kişiye özel fizyoterapi programları ile ağrılarınızı geride bırakın. Uzman ekibimiz ve kanıta dayalı tedavi yaklaşımımız ile kalıcı iyileşme sağlıyoruz.
          </p>

          <ul className=&quot;reveal flex flex-col gap-3 mb-10&quot; style={{ transitionDelay: &apos;0.35s&apos; }}>
            {[&apos;Detaylı fonksiyonel değerlendirme&apos;, &apos;Kişiye özel tedavi planı&apos;, &apos;İlk seanstan itibaren sonuç&apos;].map(item => (
              <li key={item} className=&quot;flex items-center gap-3 text-primary-200&quot;>
                <CheckCircle2 size={18} className=&quot;text-green-400 shrink-0&quot;/>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className=&quot;reveal flex flex-wrap gap-4&quot; style={{ transitionDelay: &apos;0.45s&apos; }}>
            <Link href=&quot;/randevu&quot;
              className=&quot;group inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-sm font-medium hover:bg-primary-50 transition-all hover:shadow-xl hover:shadow-white/20&quot;>
              Online Randevu Al
              <ArrowRight size={18} className=&quot;transition-transform group-hover:translate-x-1&quot;/>
            </Link>
            <Link href=&quot;/hizmetler&quot;
              className=&quot;inline-flex items-center gap-2 border border-primary-400 text-primary-200 px-8 py-4 rounded-sm font-medium hover:bg-primary-800/50 transition-all&quot;>
              Hizmetlerimiz
            </Link>
          </div>
        </div>

        {/* Sağ: İstatistik kartları */}
        <div className=&quot;hidden lg:flex flex-col gap-5&quot;>
          <div className=&quot;reveal bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-8&quot;
            style={{ transitionDelay: &apos;0.2s&apos; }}>
            <div className=&quot;grid grid-cols-3 gap-6 text-center&quot;>
              {[{ n: &apos;1200+&apos;, l: &apos;Başarılı Hasta&apos; }, { n: &apos;8+&apos;, l: &apos;Yıl Deneyim&apos; }, { n: &apos;%96&apos;, l: &apos;Memnuniyet&apos; }].map(s => (
                <div key={s.l}>
                  <div className=&quot;font-display text-4xl font-semibold text-white mb-1&quot;>{s.n}</div>
                  <div className=&quot;text-xs text-primary-300&quot;>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className=&quot;reveal bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-6&quot;
            style={{ transitionDelay: &apos;0.3s&apos; }}>
            <div className=&quot;flex items-center gap-1 mb-3&quot;>
              {[...Array(5)].map((_, i) => <Star key={i} size={15} className=&quot;fill-yellow-400 text-yellow-400&quot;/>)}
              <span className=&quot;text-yellow-400 font-medium ml-1&quot;>4.9</span>
              <span className=&quot;text-primary-300 text-sm ml-1&quot;>(127 değerlendirme)</span>
            </div>
            <p className=&quot;text-primary-200 text-sm italic leading-relaxed&quot;>
              &quot;3 yıldır çektiğim bel ağrısından 6 seansta kurtuldum. Tedavi yaklaşımları gerçekten farklı ve sonuç odaklı.&quot;
            </p>
            <div className=&quot;mt-3 flex items-center gap-2&quot;>
              <div className=&quot;w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs text-white font-medium&quot;>AK</div>
              <div>
                <div className=&quot;text-white text-sm font-medium&quot;>Ayşe K.</div>
                <div className=&quot;text-primary-400 text-xs&quot;>Manuel Terapi Hastası</div>
              </div>
            </div>
          </div>

          <div className=&quot;reveal flex flex-wrap gap-2&quot; style={{ transitionDelay: &apos;0.4s&apos; }}>
            {[&apos;Manuel Terapi&apos;,&apos;Klinik Pilates&apos;,&apos;Reformer&apos;,&apos;Skolyoz&apos;,&apos;Spor Rehab&apos;,&apos;TME&apos;].map(tag => (
              <span key={tag} className=&quot;bg-primary-800/60 border border-primary-600/40 text-primary-200 text-xs px-3 py-1.5 rounded-full&quot;>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Alt fade */}
      <div className=&quot;absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#faf8f5] to-transparent&quot;/>
    </section>
  )
}