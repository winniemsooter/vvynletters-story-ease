import { SiteNav } from "@/components/wyn/SiteNav";
import { Hero } from "@/components/wyn/Hero";
import { Proof } from "@/components/wyn/Proof";
import { Work } from "@/components/wyn/Work";
import { Books } from "@/components/wyn/Books";
import { Services } from "@/components/wyn/Services";
import { Voice } from "@/components/wyn/Voice";
import { Process } from "@/components/wyn/Process";
import { About } from "@/components/wyn/About";
import { Testimonials } from "@/components/wyn/Testimonials";
import { Faq } from "@/components/wyn/Faq";
import { Contact } from "@/components/wyn/Contact";
import { SiteFooter } from "@/components/wyn/SiteFooter";
import { SEO } from "@/lib/seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Wynletters — Ghostwriting for Books & Thought Leadership"
        description="Ghostwriting for people with something worth saying. Books, thought leadership, and business writing for founders, experts, consultants, and executives."
        url="https://vvynletters-story-ease.lovable.app/"
        type="website"
      />

      <SiteNav />

      <main>
        <Hero />
        <Proof />
        <Work />
        <Books />
        <Services />
        <Voice />
        <Process />
        <About />
        {/* Remove <Testimonials /> until real client quotes are available */}
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
