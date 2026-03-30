import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/ui/ChatBot'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Blog' }

const YAZILAR = [
  { slug: 'bel-agrisi-nedenleri', kategori: 'Genel Sağlık', tarih: '12 Mart 2026', sure: '4 dk',
    baslik: 'Bel Ağrısının 7 Temel Nedeni ve Fizyoterapi ile Çözümü',
    ozet: 'Bel ağrısı günümüzün en yaygın şikayetlerinden biri. Kök nedenini anlamak kalıcı çözümün ilk adımıdır.' },
  { slug: 'skolyoz-egzersiz', kategori: 'Omurga Sağlığı', tarih: '5 Mart 2026', sure: '6 dk',
    baslik: 'Skolyozda Klinik Pilates: Bilimsel Kanıtlar ve Uygulama',
    ozet: 'Skolyoz tedavisinde Schroth yöntemi ve klinik pilates kombinasyonu neden bu kadar etkili?' },
  { slug: 'manuel-terapi-nedir', kategori: 'Tedavi Yöntemleri', tarih: '28 Şubat 2026', sure: '5 dk',
    baslik: 'Manuel Terapi Nedir? Kime Uygulanır?',
    ozet: 'Uzman eller ile uygulanan manuel terapi, ilaçsız ağrı yönetiminde kanıtlanmış en etkili yöntemlerden biri.' },
  { slug: 'sporcu-rehabilitasyon', kategori: 'Spor Sağlığı', tarih: '20 Şubat 2026', sure: '7 dk',
    baslik: 'Ameliyat Sonrası Sahaya Dönüş: Spor Rehabilitasyonunda 5 Kritik Aşama',
    ozet: 'Ameliyat sonrası doğru rehabilitasyon hem süreyi kısaltır hem de yeniden yaralanma riskini azaltır.' },
  { slug: 'postur-duzeltme', kategori: 'Günlük Sağlık', tarih: '14 Şubat 2026', sure: '4 dk',
    baslik: 'Evde Postur Düzeltme: Fizyoterapistlerden 8 Öneri',
    ozet: 'Uzun saat masa başında çalışanlar için postürü düzelten, uygulaması kolay 8 egzersiz önerisi.' },
  { slug: 'reformer-pilates-faydalari', kategori: 'Pilates', tarih: '7 Şubat 2026', sure: '5 dk',
    baslik: 'Reformer Pilates ile Klasik Pilatesi Karşılaştırıyoruz',
    ozet: 'Reformer cihazının sağladığı direnç ve destek, rehabilitasyon süreçlerinde neden tercih edilir?' },
]

const KATEGORILER = ['Tümü', 'Genel Sağlık', 'Omurga Sağlığı', 'Tedavi Yöntemleri', 'Spor Sağlığı', 'Pilates', 'Günlük Sağlık']

export default function BlogSayfasi() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf8f5]">
        <div className="bg-primary-950 py-16 px-6 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">
            Sağlık <span className="italic font-semibold text-primary-300">Blog</span>
          </h1>
          <p className="text-primary-300">Uzmanlarımızdan güncel sağlık bilgileri ve rehberler.</p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Kategoriler */}
          <div className="flex flex-wrap gap-2 mb-10">
            {KATEGORILER.map(k => (
              <button key={k}
                className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                  k === 'Tümü'
                    ? 'bg-primary-600 border-primary-600 text-white'
                    : 'border-gray-200 text-gray-600 hover:border-primary-400 hover:text-primary-600 bg-white'
                }`}>
                {k}
              </button>
            ))}
          </div>

          {/* Yazılar */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YAZILAR.map(y => (
              <Link key={y.slug} href={`/blog/${y.slug}`}
                className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                  <div className="text-primary-300 text-5xl font-display italic">{y.kategori[0]}</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full">{y.kategori}</span>
                    <span className="text-xs text-gray-400">{y.sure} okuma</span>
                  </div>
                  <h2 className="font-display text-xl font-semibold text-charcoal mb-2 group-hover:text-primary-700 transition-colors leading-snug flex-1">
                    {y.baslik}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">{y.ozet}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{y.tarih}</span>
                    <span className="flex items-center gap-1 text-xs text-primary-600 font-medium group-hover:gap-2 transition-all">
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