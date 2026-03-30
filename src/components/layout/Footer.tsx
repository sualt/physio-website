import Link from &apos;next/link&apos;
import { Phone, Mail, MapPin, Clock } from &apos;lucide-react&apos;
import { FaInstagram, FaFacebook } from &apos;react-icons/fa&apos;
import { KLINIK, HIZMETLER } from &apos;@/lib/constants&apos;

export default function Footer() {
  return (
    <footer className=&quot;bg-primary-950 text-white&quot;>
      <div className=&quot;max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12&quot;>

        {/* Marka */}
        <div>
          <div className=&quot;flex items-center gap-3 mb-5&quot;>
            <div className=&quot;w-9 h-9 bg-primary-600 rounded-sm flex items-center justify-center&quot;>
              <svg viewBox=&quot;0 0 32 32&quot; fill=&quot;none&quot; className=&quot;w-5 h-5&quot;>
                <path d=&quot;M16 8v16M8 16h16&quot; stroke=&quot;white&quot; strokeWidth=&quot;2.5&quot; strokeLinecap=&quot;round&quot;/>
                <circle cx=&quot;16&quot; cy=&quot;16&quot; r=&quot;3&quot; fill=&quot;white&quot;/>
              </svg>
            </div>
            <div>
              <div className=&quot;font-display font-semibold text-lg leading-none&quot;>FizyoKlinik</div>
              <div className=&quot;text-[10px] text-primary-400 tracking-widest uppercase&quot;>Fizyoterapi & Rehabilitasyon</div>
            </div>
          </div>
          <p className=&quot;text-primary-300 text-sm leading-relaxed mb-5&quot;>
            Kişiye özel tedavi yaklaşımı ve uzman ekibimizle sağlığınıza kavuşmanızı sağlıyoruz.
          </p>
          <div className=&quot;flex gap-2&quot;>
            {[FaInstagram, FaFacebook].map((Icon, i) => (
              <a key={i} href=&quot;#&quot;
                className=&quot;w-8 h-8 border border-primary-700 rounded-sm flex items-center justify-center text-primary-400 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all&quot;>
                <Icon size={16}/>
              </a>
            ))}
          </div>
        </div>

        {/* Hizmetler */}
        <div>
          <h4 className=&quot;font-display font-semibold text-base mb-5&quot;>Hizmetlerimiz</h4>
          <ul className=&quot;space-y-2&quot;>
            {HIZMETLER.slice(0, 8).map(h => (
              <li key={h.id}>
                <Link href={`/hizmetler#${h.id}`}
                  className=&quot;text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-2&quot;>
                  <span className=&quot;w-1 h-1 rounded-full bg-primary-500&quot;/>
                  {h.baslik}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h4 className=&quot;font-display font-semibold text-base mb-5&quot;>Hızlı Erişim</h4>
          <ul className=&quot;space-y-2&quot;>
            {[
              { label: &apos;Hakkımızda&apos;, href: &apos;/hakkimizda&apos; },
              { label: &apos;Uzmanlarımız&apos;, href: &apos;/uzmanlar&apos; },
              { label: &apos;Blog&apos;, href: &apos;/blog&apos; },
              { label: &apos;Online Randevu&apos;, href: &apos;/randevu&apos; },
              { label: &apos;İletişim&apos;, href: &apos;/iletisim&apos; },
              { label: &apos;KVKK&apos;, href: &apos;/kvkk&apos; },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href}
                  className=&quot;text-sm text-primary-300 hover:text-white transition-colors flex items-center gap-2&quot;>
                  <span className=&quot;w-1 h-1 rounded-full bg-primary-500&quot;/>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h4 className=&quot;font-display font-semibold text-base mb-5&quot;>İletişim</h4>
          <ul className=&quot;space-y-3.5&quot;>
            <li className=&quot;flex items-start gap-3&quot;>
              <MapPin size={14} className=&quot;text-primary-400 mt-0.5 shrink-0&quot;/>
              <span className=&quot;text-sm text-primary-300&quot;>{KLINIK.adres}</span>
            </li>
            <li className=&quot;flex items-center gap-3&quot;>
              <Phone size={14} className=&quot;text-primary-400 shrink-0&quot;/>
              <a href={`tel:${KLINIK.telefon}`} className=&quot;text-sm text-primary-300 hover:text-white transition-colors&quot;>
                {KLINIK.telefon}
              </a>
            </li>
            <li className=&quot;flex items-center gap-3&quot;>
              <Mail size={14} className=&quot;text-primary-400 shrink-0&quot;/>
              <a href={`mailto:${KLINIK.email}`} className=&quot;text-sm text-primary-300 hover:text-white transition-colors&quot;>
                {KLINIK.email}
              </a>
            </li>
            <li className=&quot;flex items-start gap-3&quot;>
              <Clock size={14} className=&quot;text-primary-400 mt-0.5 shrink-0&quot;/>
              <div className=&quot;text-sm text-primary-300 space-y-0.5&quot;>
                <div>{KLINIK.calisma_saatleri.hafta_ici}</div>
                <div>{KLINIK.calisma_saatleri.cumartesi}</div>
                <div>{KLINIK.calisma_saatleri.pazar}</div>
              </div>
            </li>
          </ul>
          <Link href=&quot;/randevu&quot;
            className=&quot;mt-5 block text-center bg-primary-600 text-white py-2.5 text-sm font-medium rounded-sm hover:bg-primary-500 transition-colors&quot;>
            Randevu Al
          </Link>
        </div>
      </div>

      <div className=&quot;border-t border-primary-800 mt-12&quot;>
        <div className=&quot;max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-500&quot;>
          <span>© {new Date().getFullYear()} FizyoKlinik. Tüm hakları saklıdır.</span>
          <span>Hizmetler uzman fizyoterapistler tarafından sağlanmaktadır.</span>
        </div>
      </div>
    </footer>
  )
}