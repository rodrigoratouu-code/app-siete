import { PublicPageWrapper } from '@/components/public/PublicPageWrapper'
import { HeroSection } from '@/components/public/HeroSection'
import { ValueCards } from '@/components/public/ValueCards'
import { AboutSection } from '@/components/public/AboutSection'
import { ServicesGrid } from '@/components/public/ServicesGrid'
import { MobilitySection } from '@/components/public/MobilitySection'
import { TabbedContent } from '@/components/public/TabbedContent'
import { TestimonialsCarousel } from '@/components/public/TestimonialsCarousel'
import { CTABanner } from '@/components/public/CTABanner'
import { ContactSection } from '@/components/public/ContactSection'

export default function HomePage() {
  return (
    <PublicPageWrapper>
      <HeroSection />
      <ValueCards />
      <AboutSection />
      <MobilitySection />
      <ServicesGrid />
      <TabbedContent />
      <TestimonialsCarousel />
      <CTABanner />
      <ContactSection />
    </PublicPageWrapper>
  )
}
