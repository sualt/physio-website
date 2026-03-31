import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/ui/ChatBot'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = { title: 'Hakkımızda' }

export default function HakkimizdaSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="bg-primary-950 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-800/60 border border-primary-700 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400"/>
              <span className="text-sm text-primary-300">Biz Kimiz</span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-light text-white mb-6">
              Sağlığınıza{' '}
              <span className="italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300">
                adanmış
              </span>{' '}
              bir ekip
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl">
              FizyoKlinik olarak 8 yılı aşkın süredir İskenderun ve çevresindeki hastalara kişiye özel, kanıta dayalı fizyoterapi hizmetleri sunuyoruz.
            </p>
          </div>
        </div>

        {/* Misyon / Vizyon */}
        <section className="py-20 bg-[#faf8f5]">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              { baslik: 'Misyonumuz', icerik: 'Her hastaya bireysel değerlendirme yaparak kişiye özel tedavi planı oluşturmak. Yalnızca ağrıyı değil, kök nedeni tedavi etmek.' },
              { baslik: 'Vizyonumuz', icerik: 'Türkiye\'nin en güvenilir fizyoterapi klinikleri arasında yer alarak bölgemizdeki sağlık standartlarını yükseltmek.' },
              { baslik: 'Değerlerimiz', icerik: 'Şeffaflık, hasta odaklılık, sürekli gelişim ve kanıta dayalı uygulama. Her hasta bir birey olarak değerlidir.' },
            ].map(k => (
              <div key={k.baslik} className="bg-white border border-gray-100 rounded-sm p-8">
                <div className="w-10 h-0.5 bg-primary-500 mb-5"/>
                <h2 className="font-display text-2xl font-semibold text-charcoal mb-3">{k.baslik}</h2>
                <p className="text-gray-500 leading-relaxed text-sm">{k.icerik}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hikaye */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-3xl lg:text-4xl font-light text-charcoal mb-8">
              Kliniğimizin <span className="italic font-semibold gradient-text">hikayesi</span>
            </h2>
            <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
              <p>
                FizyoKlinik, 2016 yılında İskenderun'da hasta odaklı bir yaklaşımla kapılarını açtı. Kuruluşumuzdan bu yana temel ilkemiz hiç değişmedi: Her hasta bir birey, her tedavi planı özgündür.
              </p>
              <p>
                Yıllar içinde uzman kadromuzu büyüttük, ekipmanlarımızı yeniledik ve uluslararası standartlarda eğitimler alarak bilgimizi güncel tuttuk. Bugün Manuel Terapi, Klinik Pilates, Reformer ve daha birçok alanda hizmet sunuyoruz.
              </p>
              <p>
                1200&apos;den fazla hastaya dokunmanın verdiği sorumluluk ve gurçla, daha iyi bir sağlık sistemi için çalışmaya devam ediyoruz.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}