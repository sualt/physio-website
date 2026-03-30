&apos;use client&apos;

import { useState, useEffect } from &apos;react&apos;
import Link from &apos;next/link&apos;
import { Menu, X, Phone, ChevronDown } from &apos;lucide-react&apos;

const NAV = [
  { label: &apos;Anasayfa&apos;, href: &apos;/&apos; },
  { label: &apos;Hakkımızda&apos;, href: &apos;/hakkimizda&apos; },
  {
    label: &apos;Hizmetler&apos;, href: &apos;/hizmetler&apos;,
    alt: [
      { label: &apos;Manuel Terapi&apos;, href: &apos;/hizmetler#manuel-terapi&apos; },
      { label: &apos;Klinik Pilates&apos;, href: &apos;/hizmetler#klinik-pilates&apos; },
      { label: &apos;Ortopedik Rehab&apos;, href: &apos;/hizmetler#ortopedik&apos; },
      { label: &apos;Spor Yaralanmaları&apos;, href: &apos;/hizmetler#spor&apos; },
      { label: &apos;Omurga & Skolyoz&apos;, href: &apos;/hizmetler#omurga&apos; },
      { label: &apos;Tüm Hizmetler&apos;, href: &apos;/hizmetler&apos; },
    ],
  },
  { label: &apos;Uzmanlar&apos;, href: &apos;/uzmanlar&apos; },
  { label: &apos;Blog&apos;, href: &apos;/blog&apos; },
  { label: &apos;İletişim&apos;, href: &apos;/iletisim&apos; },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobil, setMobil] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener(&apos;scroll&apos;, fn)
    return () => window.removeEventListener(&apos;scroll&apos;, fn)
  }, [])

  return (
    <>
      {/* Üst bilgi şeridi */}
      <div className=&quot;hidden md:flex bg-primary-900 text-primary-200 text-xs py-2 px-8 justify-between items-center&quot;>
        <span>📍 İskenderun, Hatay</span>
        <div className=&quot;flex gap-6&quot;>
          <a href=&quot;tel:+905001234567&quot; className=&quot;flex items-center gap-1 hover:text-white transition-colors&quot;>
            <Phone size={11} /> +90 500 123 45 67
          </a>
          <span className=&quot;text-primary-400&quot;>Pzt–Cmt: 09:00–19:00</span>
        </div>
      </div>

      {/* Ana navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? &apos;bg-white shadow-md&apos; : &apos;bg-[#faf8f5] border-b border-primary-100&apos;
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-6 flex items-center justify-between h-20&quot;>

          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center gap-3&quot;>
            <div className=&quot;w-10 h-10 bg-primary-600 rounded-sm flex items-center justify-center&quot;>
              <svg viewBox=&quot;0 0 32 32&quot; fill=&quot;none&quot; className=&quot;w-6 h-6&quot;>
                <circle cx=&quot;16&quot; cy=&quot;16&quot; r=&quot;12&quot; fill=&quot;white&quot; fillOpacity=&quot;0.15&quot;/>
                <path d=&quot;M16 8v16M8 16h16&quot; stroke=&quot;white&quot; strokeWidth=&quot;2.5&quot; strokeLinecap=&quot;round&quot;/>
                <circle cx=&quot;16&quot; cy=&quot;16&quot; r=&quot;3&quot; fill=&quot;white&quot;/>
              </svg>
            </div>
            <div>
              <div className=&quot;font-display font-semibold text-xl text-primary-900 leading-none&quot;>FizyoKlinik</div>
              <div className=&quot;text-[10px] text-primary-500 tracking-widest uppercase&quot;>Fizyoterapi & Rehabilitasyon</div>
            </div>
          </Link>

          {/* Desktop linkler */}
          <div className=&quot;hidden lg:flex items-center gap-1&quot;>
            {NAV.map(link => (
              <div key={link.href} className=&quot;relative group&quot;
                onMouseEnter={() => link.alt && setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link href={link.href}
                  className=&quot;flex items-center gap-1 px-4 py-2 text-sm font-medium text-charcoal hover:text-primary-600 transition-colors&quot;>
                  {link.label}
                  {link.alt && <ChevronDown size={13} className=&quot;opacity-50&quot;/>}
                </Link>
                {link.alt && dropdown === link.label && (
                  <div className=&quot;absolute top-full left-0 mt-1 w-52 bg-white shadow-xl border border-gray-100 rounded-sm py-2 animate-fade-in&quot;>
                    {link.alt.map(a => (
                      <Link key={a.href} href={a.href}
                        className=&quot;block px-4 py-2.5 text-sm text-charcoal hover:bg-primary-50 hover:text-primary-700 transition-colors&quot;>
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className=&quot;hidden lg:block&quot;>
            <Link href=&quot;/randevu&quot;
              className=&quot;bg-primary-600 text-white px-6 py-2.5 text-sm font-medium rounded-sm hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25&quot;>
              Online Randevu
            </Link>
          </div>

          {/* Mobil toggle */}
          <button onClick={() => setMobil(!mobil)} className=&quot;lg:hidden p-2 text-charcoal&quot;>
            {mobil ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobil menü */}
        {mobil && (
          <div className=&quot;lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3&quot;>
            {NAV.map(link => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobil(false)}
                  className=&quot;block py-2 text-sm font-medium text-charcoal hover:text-primary-600&quot;>
                  {link.label}
                </Link>
                {link.alt && (
                  <div className=&quot;pl-4 mt-1 flex flex-col gap-1&quot;>
                    {link.alt.map(a => (
                      <Link key={a.href} href={a.href} onClick={() => setMobil(false)}
                        className=&quot;block py-1 text-sm text-primary-600&quot;>
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href=&quot;/randevu&quot; onClick={() => setMobil(false)}
              className=&quot;mt-2 bg-primary-600 text-white py-3 text-sm font-medium rounded-sm text-center block&quot;>
              Online Randevu Al
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}