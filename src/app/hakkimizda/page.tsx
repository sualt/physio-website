import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import CTASection from &apos;@/components/sections/CTASection&apos;

export const metadata: Metadata = { title: &apos;Hakkımızda&apos; }

export default function HakkimizdaSayfasi() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className=&quot;bg-primary-950 py-20 px-6&quot;>
          <div className=&quot;max-w-4xl mx-auto&quot;>
            <div className=&quot;inline-flex items-center gap-2 bg-primary-800/60 border border-primary-700 rounded-full px-4 py-1.5 mb-6&quot;>
              <span className=&quot;w-1.5 h-1.5 rounded-full bg-primary-400&quot;/>
              <span className=&quot;text-sm text-primary-300&quot;>Biz Kimiz</span>
            </div>
            <h1 className=&quot;font-display text-4xl lg:text-6xl font-light text-white mb-6&quot;>
              Sağlığınıza{&apos; &apos;}
              <span className=&quot;italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-green-300&quot;>
                adanmış
              </span>{&apos; &apos;}
              bir ekip
            </h1>
            <p className=&quot;text-primary-200 text-lg leading-relaxed max-w-2xl&quot;>
              FizyoKlinik olarak 8 yılı aşkın süredir İskenderun ve çevresindeki hastalara kişiye özel, kanıta dayalı fizyoterapi hizmetleri sunuyoruz.
            </p>
          </div>
        </div>

        {/* Misyon / Vizyon */}
        <section className=&quot;py-20 bg-[#faf8f5]&quot;>
          <div className=&quot;max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8&quot;>
            {[
              { baslik: &apos;Misyonumuz&apos;, icerik: &apos;Her hastaya bireysel değerlendirme yaparak kişiye özel tedavi planı oluşturmak. Yalnızca ağrıyı değil, kök nedeni tedavi etmek.&apos; },
              { baslik: &apos;Vizyonumuz&apos;, icerik: &apos;Türkiye\&apos;nin en güvenilir fizyoterapi klinikleri arasında yer alarak bölgemizdeki sağlık standartlarını yükseltmek.&apos; },
              { baslik: &apos;Değerlerimiz&apos;, icerik: &apos;Şeffaflık, hasta odaklılık, sürekli gelişim ve kanıta dayalı uygulama. Her hasta bir birey olarak değerlidir.&apos; },
            ].map(k => (
              <div key={k.baslik} className=&quot;bg-white border border-gray-100 rounded-sm p-8&quot;>
                <div className=&quot;w-10 h-0.5 bg-primary-500 mb-5&quot;/>
                <h2 className=&quot;font-display text-2xl font-semibold text-charcoal mb-3&quot;>{k.baslik}</h2>
                <p className=&quot;text-gray-500 leading-relaxed text-sm&quot;>{k.icerik}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hikaye */}
        <section className=&quot;py-20 bg-white&quot;>
          <div className=&quot;max-w-4xl mx-auto px-6&quot;>
            <h2 className=&quot;font-display text-3xl lg:text-4xl font-light text-charcoal mb-8&quot;>
              Kliniğimizin <span className=&quot;italic font-semibold gradient-text&quot;>hikayesi</span>
            </h2>
            <div className=&quot;prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed&quot;>
              <p>
                FizyoKlinik, 2016 yılında İskenderun&apos;da hasta odaklı bir yaklaşımla kapılarını açtı. Kuruluşumuzdan bu yana temel ilkemiz hiç değişmedi: Her hasta bir birey, her tedavi planı özgündür.
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
      <ChatBot />
    </>
  )
}