import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSections'
import CTASection from '@/components/sections/CTASection'
import Chatbot from '@/components/ui/ChatBot'

export default function AnaSayfa() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}