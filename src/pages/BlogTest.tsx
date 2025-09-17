import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const BlogTest = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Blog Test Page
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mt-6">
                This is a simple test page to verify routing is working correctly.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogTest;