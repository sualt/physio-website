import Link from &apos;next/link&apos;
import { ArrowRight, Phone, Calendar } from &apos;lucide-react&apos;

export default function CTASection() {
  return (
    <section className=&quot;py-20 bg-gradient-to-br from-primary-800 to-primary-950 relative overflow-hidden&quot;>
      <div className=&quot;absolute inset-0 opacity-5&quot;>
        <svg width=&quot;100%&quot; height=&quot;100%&quot;>
          <defs>
            <pattern id=&quot;dots&quot; width=&quot;30&quot; height=&quot;30&quot; patternUnits=&quot;userSpaceOnUse&quot;>
              <circle cx=&quot;2&quot; cy=&quot;2&quot; r=&quot;1.5&quot; fill=&quot;white&quot;/>
            </pattern>
          </defs>
          <rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;url(#dots)&quot;/>
        </svg>
      </div>

      <div className=&quot;relative max-w-4xl mx-auto px-6 text-center&quot;>
        <div className=&quot;inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6&quot;>
          <span className=&quot;w-2 h-2 rounded-full bg-green-400 animate-pulse&quot;/>
          <span className=&quot;text-sm text-primary-100&quot;>Bugün randevu alabilirsiniz</span>
        </div>

        <h2 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-4&quot;>
          Ağrısız bir hayata{&apos; &apos;}
          <span className=&quot;italic font-semibold&quot;>ilk adımı atın</span>
        </h2>
        <p className=&quot;text-primary-200 text-lg mb-10 max-w-xl mx-auto&quot;>
          Ücretsiz ilk değerlendirme için hemen randevu alın.
        </p>

        <div className=&quot;flex flex-wrap justify-center gap-4 mb-10&quot;>
          {[{ icon: Calendar, text: &apos;Online Randevu&apos; }, { icon: Phone, text: &apos;+90 500 123 45 67&apos; }].map(({ icon: Icon, text }) => (
            <div key={text} className=&quot;flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2&quot;>
              <Icon size={14} className=&quot;text-primary-300&quot;/>
              <span className=&quot;text-sm text-primary-100&quot;>{text}</span>
            </div>
          ))}
        </div>

        <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
          <Link href=&quot;/randevu&quot;
            className=&quot;group inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-10 py-4 rounded-sm font-medium hover:bg-primary-50 transition-all hover:shadow-xl hover:-translate-y-0.5&quot;>
            Online Randevu Al <ArrowRight size={18} className=&quot;group-hover:translate-x-1 transition-transform&quot;/>
          </Link>
          <a href=&quot;tel:+905001234567&quot;
            className=&quot;inline-flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-4 rounded-sm font-medium hover:bg-white/10 transition-all&quot;>
            <Phone size={18}/> Hemen Ara
          </a>
        </div>
      </div>
    </section>
  )
}