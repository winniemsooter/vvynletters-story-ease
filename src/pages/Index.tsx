import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PerfectForSection } from "@/components/PerfectForSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEO } from "@/lib/seo";
import { getFullUrl, getImageUrl } from "@/lib/url-utils";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags for Home Page */}
      <SEO
        title="VVYNLETTERS - Storytelling Meets Purpose | Medical School Applications & Creative Consulting"
        description="Expert storytelling consultant helping with medical school applications, ADHD support, and creative strategy. 90% success rate. Book a consultation today."
        image={getImageUrl()}
        imageAlt="VVYNLETTERS — Storytelling Meets Purpose"
        url={getFullUrl()}
        type="website"
      />
      
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="perfect-for">
          <PerfectForSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
