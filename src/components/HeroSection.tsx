import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import bookBackground from "@/assets/book-background.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bookBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold leading-tight">
              <span className="text-primary">VVYNLETTERS</span>
              <br />
              <span className="text-foreground font-avenir">
                Storytelling Meets Purpose!
              </span>
            </h1>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-primary">
                At VVYNLETTERS
              </h2>
              <p className="text-xl font-avenir text-muted-foreground leading-relaxed">
                We provide executive and administrative virtual support for ADHD founders, creatives, and entrepreneurs.
              </p>
              <p className="text-xl font-avenir text-muted-foreground leading-relaxed">
                We provide expert storytelling services for high-impact: assist you with your applications, write your medical school essays, grant proposals, and nonfiction manuscripts.
              </p>
              <p className="text-lg font-avenir text-muted-foreground leading-relaxed">
                We combine storytelling and micro-mental health support to bring ease to your process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant font-avenir text-lg px-8 py-4"
                asChild
              >
                <a
                  href="https://cal.com/vvynletters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-avenir text-lg px-8 py-4"
                asChild
              >
                <a href="mailto:vvynletter@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
