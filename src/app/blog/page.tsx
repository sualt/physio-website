import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import Link from &apos;next/link&apos;
import { ArrowRight } from &apos;lucide-react&apos;

export const metadata: Metadata = { title: &apos;Blog&apos; }

const YAZILAR = [
  { slug: &apos;bel-agrisi-nedenleri&apos;, kategori: &apos;Genel Sağlık&apos;, tarih: &apos;12 Mart 2026&apos;, sure: &apos;4 dk&apos;,
    baslik: &apos;Bel Ağrısının 7 Temel Nedeni ve Fizyoterapi ile Çözümü&apos;,
    ozet: &apos;Bel ağrısı günümüzün en yaygın şikayetlerinden biri. Kök nedenini anlamak kalıcı çözümün ilk adımıdır.&apos; },
  { slug: &apos;skolyoz-egzersiz&apos;, kategori: &apos;Omurga Sağlığı&apos;, tarih: &apos;5 Mart 2026&apos;, sure: &apos;6 dk&apos;,
    baslik: &apos;Skolyozda Klinik Pilates: Bilimsel Kanıtlar ve Uygulama&apos;,
    ozet: &apos;Skolyoz tedavisinde Schroth yöntemi ve klinik pilates kombinasyonu neden bu kadar etkili?&apos; },
  { slug: &apos;manuel-terapi-nedir&apos;, kategori: &apos;Tedavi Yöntemleri&apos;, tarih: &apos;28 Şubat 2026&apos;, sure: &apos;5 dk&apos;,
    baslik: &apos;Manuel Terapi Nedir? Kime Uygulanır?&apos;,
    ozet: &apos;Uzman eller ile uygulanan manuel terapi, ilaçsız ağrı yönetiminde kanıtlanmış en etkili yöntemlerden biri.&apos; },
  { slug: &apos;sporcu-rehabilitasyon&apos;, kategori: &apos;Spor Sağlığı&apos;, tarih: &apos;20 Şubat 2026&apos;, sure: &apos;7 dk&apos;,
    baslik: &apos;Ameliyat Sonrası Sahaya Dönüş: Spor Rehabilitasyonunda 5 Kritik Aşama&apos;,
    ozet: &apos;Ameliyat sonrası doğru rehabilitasyon hem süreyi kısaltır hem de yeniden yaralanma riskini azaltır.&apos; },
  { slug: &apos;postur-duzeltme&apos;, kategori: &apos;Günlük Sağlık&apos;, tarih: &apos;14 Şubat 2026&apos;, sure: &apos;4 dk&apos;,
    baslik: &apos;Evde Postur Düzeltme: Fizyoterapistlerden 8 Öneri&apos;,
    ozet: &apos;Uzun saat masa başında çalışanlar için postürü düzelten, uygulaması kolay 8 egzersiz önerisi.&apos; },
  { slug: &apos;reformer-pilates-faydalari&apos;, kategori: &apos;Pilates&apos;, tarih: &apos;7 Şubat 2026&apos;, sure: &apos;5 dk&apos;,
    baslik: &apos;Reformer Pilates ile Klasik Pilatesi Karşılaştırıyoruz&apos;,
    ozet: &apos;Reformer cihazının sağladığı direnç ve destek, rehabilitasyon süreçlerinde neden tercih edilir?&apos; },
]

const KATEGORILER = [&apos;Tümü&apos;, &apos;Genel Sağlık&apos;, &apos;Omurga Sağlığı&apos;, &apos;Tedavi Yöntemleri&apos;, &apos;Spor Sağlığı&apos;, &apos;Pilates&apos;, &apos;Günlük Sağlık&apos;]

export default function BlogSayfasi() {
  return (
    <>
      <Navbar />
      <main className=&quot;min-h-screen bg-[#faf8f5]&quot;>
        <div className=&quot;bg-primary-950 py-16 px-6 text-center&quot;>
          <h1 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-3&quot;>
            Sağlık <span className=&quot;italic font-semibold text-primary-300&quot;>Blog</span>
          </h1>
          <p className=&quot;text-primary-300&quot;>Uzmanlarımızdan güncel sağlık bilgileri ve rehberler.</p>
        </div>

        <div className=&quot;max-w-6xl mx-auto px-6 py-16&quot;>
          {/* Kategoriler */}
          <div className=&quot;flex flex-wrap gap-2 mb-10&quot;>
            {KATEGORILER.map(k => (
              <button key={k}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  k === &apos;Tümü&apos;
                    ? &apos;bg-primary-600 border-primary-600 text-white&apos;
                    : &apos;border-gray-200 text-gray-600 hover:border-primary-400 hover:text-primary-600 bg-white&apos;
                }`}>
                {k}
              </button>
            ))}
          </div>

          {/* Yazılar */}
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
            {YAZILAR.map(y => (
              <Link key={y.slug} href={`/blog/${y.slug}`}
                className=&quot;bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group flex flex-col&quot;>
                <div className=&quot;h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center&quot;>
                  <div className=&quot;text-primary-300 text-5xl font-display italic&quot;>{y.kategori[0]}</div>
                </div>
                <div className=&quot;p-6 flex flex-col flex-1&quot;>
                  <div className=&quot;flex items-center gap-3 mb-3&quot;>
                    <span className=&quot;text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full&quot;>{y.kategori}</span>
                    <span className=&quot;text-xs text-gray-400&quot;>{y.sure} okuma</span>
                  </div>
                  <h2 className=&quot;font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-primary-700 transition-colors leading-snug flex-1&quot;>
                    {y.baslik}
                  </h2>
                  <p className=&quot;text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2&quot;>{y.ozet}</p>
                  <div className=&quot;flex items-center justify-between mt-auto pt-4 border-t border-gray-100&quot;>
                    <span className=&quot;text-xs text-gray-400&quot;>{y.tarih}</span>
                    <span className=&quot;flex items-center gap-1 text-xs text-primary-600 font-medium group-hover:gap-2 transition-all&quot;>
                      Oku <ArrowRight size={12}/>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}