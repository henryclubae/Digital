import SEO from '@/components/SEO';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import StatsSection from '@/components/sections/StatsSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';
import { generateOrganizationSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digital Marketing Agency Dubai | Henry Club - Web Development & SEO UAE"
        description="Leading digital marketing agency in Dubai & UAE. Expert web development, SEO services, Amazon store setup & social media marketing. Get 200% ROI increase. Free consultation!"
        keywords="digital marketing Dubai, web development UAE, SEO services Dubai, Amazon store setup UAE, social media marketing, digital agency Dubai"
        canonicalUrl="/"
        schema={generateOrganizationSchema()}
      />
      
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
