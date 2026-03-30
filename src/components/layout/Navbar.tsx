'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const NAV = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  {
    label: 'Hizmetler', href: '/hizmetler',
    alt: [
      { label: 'Manuel Terapi', href: '/hizmetler#manuel-terapi' },
      { label: 'Klinik Pilates', href: '/hizmetler#klinik-pilates' },
      { label: 'Ortopedik Rehab', href: '/hizmetler#ortopedik' },
      { label: 'Spor Yaralanmaları', href: '/hizmetler#spor' },
      { label: 'Omurga & Skolyoz', href: '/hizmetler#omurga' },
      { label: 'Tüm Hizmetler', href: '/hizmetler' },
    ],
  },
  { label: 'Uzmanlar', href: '/uzmanlar' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobil, setMobil] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* Üst bilgi şeridi */}
      <div className="hidden md:flex bg-primary-900 text-primary-200 text-xs py-2 px-8 justify-between items-center">
        <span>📍 İskenderun, Hatay</span>
        <div className="flex gap-6">
          <a href="tel:+905001234567" className="flex items-center gap-1 hover:text-white transition-colors">
            <Phone size={11} /> +90 500 123 45 67
          </a>
          <span className="text-primary-400">Pzt–Cmt: 09:00–19:00</span>
        </div>
      </div>

      {/* Ana navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-[#faf8f5] border-b border-primary-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6">
                <circle cx="16" cy="16" r="12" fill="white" fillOpacity="0.15"/>
                <path d="M16 8v16M8 16h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-xl text-primary-900 leading-none">FizyoKlinik</div>
              <div className="text-[10px] text-primary-500 tracking-widest uppercase">Fizyoterapi & Rehabilitasyon</div>
            </div>
          </Link>

          {/* Desktop linkler */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV.map(link => (
              <div key={link.href} className="relative group"
                onMouseEnter={() => link.alt && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-charcoal hover:text-primary-600 transition-colors">
                  {link.label}
                  {link.alt && <ChevronDown size={13} className="opacity-50"/>}
                </Link>
                {link.alt && dropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white shadow-xl border border-gray-100 rounded-sm py-2 animate-fade-in">
                    {link.alt.map(a => (
                      <Link key={a.href} href={a.href}
                        className="block px-4 py-2.5 text-sm text-charcoal hover:bg-primary-50 hover:text-primary-700 transition-colors">
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link href="/randevu"
              className="bg-primary-600 text-white px-6 py-2.5 text-sm font-medium rounded-sm hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25">
              Online Randevu
            </Link>
          </div>

          {/* Mobil toggle */}
          <button onClick={() => setMobil(!mobil)} className="lg:hidden p-2 text-charcoal">
            {mobil ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobil menü */}
        {mobil && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
            {NAV.map(link => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobil(false)}
                  className="block py-2 text-sm font-medium text-charcoal hover:text-primary-600">
                  {link.label}
                </Link>
                {link.alt && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {link.alt.map(a => (
                      <Link key={a.href} href={a.href} onClick={() => setMobil(false)}
                        className="block py-1 text-sm text-primary-600">
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/randevu" onClick={() => setMobil(false)}
              className="mt-2 bg-primary-600 text-white py-3 text-sm font-medium rounded-sm text-center block">
              Online Randevu Al
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}