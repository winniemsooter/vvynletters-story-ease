import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Brain, Lightbulb, Users } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Medical School & Scholarship Application Support",
    description: "We help you with writing essays and applications that win scholarships and acceptances. Easing the stress, silence the self-doubt, and reduce the isolation that often comes with the process.",
    highlight: "90% success rate"
  },
  {
    icon: BookOpen,
    title: "Nonfiction Ghostwriting for Healing & Legacy",
    description: "Books, memoirs, and nonfiction projects that carry your voice, your truth, and the deeper meaning behind your work. We translate your lived experiences into writing that resonates and endures."
  },
  {
    icon: Brain,
    title: "ADHD Creatives & Entrepreneurs Support",
    description: "Systems, branding, website design, and executive support designed to calm chaos, restore focus, and reduce decision fatigue for founders, creators, and companies."
  },
  {
    icon: Lightbulb,
    title: "Mental Space Management",
    description: "We create breathing room for your ideas, energy, and focus, so you can move through your day with clarity instead of clutter. From virtual spaces detox to sustainable systems."
  },
  {
    icon: Users,
    title: "Creative Consulting & Speaking",
    description: "Talks, workshops, and consulting at the intersection of storytelling, micro-mental health support, and creative strategy. In corporate spaces or intimate gatherings."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support at the intersection of storytelling, psychology, and creative strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                {service.highlight && (
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {service.highlight}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};