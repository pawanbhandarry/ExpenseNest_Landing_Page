import FloatingNavbar from '@/components/floating-navbar';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import TestimonialsSection from '@/components/testimonials-section';
import PrivacySection from '@/components/privacy-section';
import HowItWorks from '@/components/how-it-works';
import PricingSection from '@/components/pricing-section';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <FloatingNavbar />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PrivacySection />
      <HowItWorks />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
