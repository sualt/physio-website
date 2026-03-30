import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { KLINIK, HIZMETLER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Marka */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 bg-primary-600 rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5">
                <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-lg leading-none">FizyoKlinik</div>
              <div className="text-[10px] text-primary-400 tracking-widest uppercase">Fizyoterapi & Rehabilitasyon</div>
            </div>
          </div>
          <p className="text-primary-300 text-sm leading-relaxed mb-5">
            Kişiye özel tedavi yaklaşımı ve uzman ekibimizle sağlığınıza kavuşmanızı sağlıyoruz.
          </p>
          <div className="flex gap-2">
  <a href="#" className="w-8 h-8 border border-primary-700 rounded-sm flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white transition-all">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>
  <a href="#" className="w-8 h-8 border border-primary-700 rounded-sm flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:text-white transition-all">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  </a>
</div>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5">Hizmetlerimiz</h4>
          <ul className="space-y-2">
            {HIZMETLER.slice(0, 8).map(h => (
              <li key={h.id}>
                <Link href={`/hizmetler#${h.id}`}
                  className="text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary-500"/>
                  {h.baslik}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5">Hızlı Erişim</h4>
          <ul className="space-y-2">
            {[
              { label: 'Hakkımızda', href: '/hakkimizda' },
              { label: 'Uzmanlarımız', href: '/uzmanlar' },
              { label: 'Blog', href: '/blog' },
              { label: 'Online Randevu', href: '/randevu' },
              { label: 'İletişim', href: '/iletisim' },
              { label: 'KVKK', href: '/kvkk' },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href}
                  className="text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary-500"/>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5">İletişim</h4>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-primary-400 mt-0.5 shrink-0"/>
              <span className="text-sm text-primary-300">{KLINIK.adres}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-primary-400 shrink-0"/>
              <a href={`tel:${KLINIK.telefon}`} className="text-sm text-primary-300 hover:text-white transition-colors">
                {KLINIK.telefon}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-primary-400 shrink-0"/>
              <a href={`mailto:${KLINIK.email}`} className="text-sm text-primary-300 hover:text-white transition-colors">
                {KLINIK.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={14} className="text-primary-400 mt-0.5 shrink-0"/>
              <div className="text-sm text-primary-300 space-y-0.5">
                <div>{KLINIK.calisma_saatleri.hafta_ici}</div>
                <div>{KLINIK.calisma_saatleri.cumartesi}</div>
                <div>{KLINIK.calisma_saatleri.pazar}</div>
              </div>
            </li>
          </ul>
          <Link href="/randevu"
            className="mt-5 block text-center bg-primary-600 text-white py-2.5 text-sm font-medium rounded-sm hover:bg-primary-500 transition-colors">
            Randevu Al
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-500">
          <span>© {new Date().getFullYear()} FizyoKlinik. Tüm hakları saklıdır.</span>
          <span>Hizmetler uzman fizyoterapistler tarafından sağlanmaktadır.</span>
        </div>
      </div>
    </footer>
  )
}