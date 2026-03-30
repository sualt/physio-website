import Link from 'next/link'
import { ArrowRight, Phone, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-800 to-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
          <span className="text-sm text-primary-100">Bugün randevu alabilirsiniz</span>
        </div>

        <h2 className="font-display text-4xl lg:text-5xl font-light text-white mb-4">
          Ağrısız bir hayata{' '}
          <span className="italic font-semibold">ilk adımı atın</span>
        </h2>
        <p className="text-primary-200 text-lg mb-10 max-w-xl mx-auto">
          Ücretsiz ilk değerlendirme için hemen randevu alın.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[{ icon: Calendar, text: 'Online Randevu' }, { icon: Phone, text: '+90 500 123 45 67' }].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2">
              <Icon size={14} className="text-primary-300"/>
              <span className="text-sm text-primary-100">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/randevu"
            className="group inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-10 py-4 rounded-sm font-medium hover:bg-primary-50 transition-all hover:shadow-xl hover:-translate-y-0.5">
            Online Randevu Al <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </Link>
          <a href="tel:+905001234567"
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-4 rounded-sm font-medium hover:bg-white/10 transition-all">
            <Phone size={18}/> Hemen Ara
          </a>
        </div>
      </div>
    </section>
  )
}