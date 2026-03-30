import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
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
            {[FaInstagram, FaFacebook].map((Icon, i) => (
              <a key={i} href="#"
                className="w-8 h-8 border border-primary-700 rounded-sm flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all">
                <Icon size={16}/>
              </a>
            ))}
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

      <div className="border-t border-primary-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-500">
          <span>© {new Date().getFullYear()} FizyoKlinik. Tüm hakları saklıdır.</span>
          <span>Hizmetler uzman fizyoterapistler tarafından sağlanmaktadır.</span>
        </div>
      </div>
    </footer>
  )
}