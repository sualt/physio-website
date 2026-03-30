import Navbar from &apos;@/components/layout/Navbar&apos;
import Footer from &apos;@/components/layout/Footer&apos;
import HeroSection from &apos;@/components/sections/HeroSection&apos;
import ServicesSection from &apos;@/components/sections/ServicesSection&apos;
import WhyUsSection from &apos;@/components/sections/WhyUsSection&apos;
import TestimonialsSection from &apos;@/components/sections/TestimonialsSections&apos;
import CTASection from &apos;@/components/sections/CTASection&apos;
import ChatBot from &apos;@/components/ui/ChatBot&apos; // Dosya adı ChatBot.tsx ise import da ChatBot

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
      <ChatBot />
    </>
  )
}