import type { Metadata } from &apos;next&apos;
import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos;
import RandevuForm from &apos;./RandevuForm&apos;

export const metadata: Metadata = { title: &apos;Online Randevu&apos; }

export default function RandevuSayfasi() {
  return (
    <>
      <Navbar />
      <main className=&quot;min-h-screen bg-[#faf8f5]&quot;>
        <div className=&quot;bg-primary-950 py-16 px-6 text-center&quot;>
          <h1 className=&quot;font-display text-4xl lg:text-5xl font-light text-white mb-3&quot;>
            Online <span className=&quot;italic font-semibold text-primary-300&quot;>Randevu</span>
          </h1>
          <p className=&quot;text-primary-300&quot;>Formu doldurun, en kısa sürede sizi arayalım.</p>
        </div>
        <div className=&quot;max-w-2xl mx-auto px-6 py-16&quot;>
          <RandevuForm />
        </div>
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}