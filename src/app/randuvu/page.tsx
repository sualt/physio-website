import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBot from '@/components/ui/ChatBot'
import RandevuForm from './RandevuForm'

export const metadata: Metadata = { title: 'Online Randevu' }

export default function RandevuSayfasi() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf8f5]">
        <div className="bg-primary-950 py-16 px-6 text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-light text-white mb-3">
            Online <span className="italic font-semibold text-primary-300">Randevu</span>
          </h1>
          <p className="text-primary-300">Formu doldurun, en kısa sürede sizi arayalım.</p>
        </div>
        <div className="max-w-2xl mx-auto px-6 py-16">
          <RandevuForm />
        </div>
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}