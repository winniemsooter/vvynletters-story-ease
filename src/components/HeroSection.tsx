import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import heroImage from "@/assets/winifred-profile.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">vvynletters</span>
                <br />
                <span className="text-foreground">storytelling meets purpose</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With the ease we bring, you can make room for more brilliance! Every story is a mind at work—we help you shape those stories into pathways of success and ease.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                At vvynletters, we bring together storytelling and micro–mental health support, whether you're applying to medical school, navigating ADHD entrepreneurship, or carrying the weight of a creative big idea.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant"
                  asChild
                >
                  <a href="https://cal.com/vvynletters" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Consultation
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
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
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={heroImage} 
                alt="Winifred Liam - Storytelling Consultant and PsyD Professional" 
                className="w-full h-[600px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};