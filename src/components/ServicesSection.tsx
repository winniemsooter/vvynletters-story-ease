import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Brain, Lightbulb, Users } from "lucide-react";

const serviceCategories = [
  {
    category: "Story for Self",
    services: [
      {
        icon: BookOpen,
        title: "Nonfiction Ghostwriting for Healing & Legacy",
        description: "Turning lived experiences into memoirs, books, and writing that preserve truth and foster healing."
      },
      {
        icon: Lightbulb,
        title: "Digital Space Management",
        description: "Helping with the digital clutter such as email management and automations, creating sustainable systems that restore calm and clarity."
      }
    ]
  },
  {
    category: "Story for Growth",
    subtitle: "For career, creative, and business advancement through storytelling + systems",
    services: [
      {
        icon: GraduationCap,
        title: "Medical School & Scholarship Application Support",
        description: "We help you write your medical essays and academic applications to win acceptances.",
        highlight: "90% success rate"
      },
      {
        icon: Brain,
        title: "ADHD Creatives & Entrepreneurs Support",
        description: "Branding and executive support designed to align with neurodiverse minds and business growth."
      }
    ]
  },
  {
    category: "Story for Community",
    subtitle: "Shared learning, leadership, and insightful conversations",
    services: [
      {
        icon: Users,
        title: "Consulting & Speaking",
        description: "Workshops, talks, and consulting that connect storytelling with micro–mental health support and creative strategy for groups, teams, and communities."
      }
    ]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What we do</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support at the intersection of storytelling, psychology, and creative strategy
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
                  <span className="text-2xl font-bold text-white">{categoryIndex + 1}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">{category.category}</h3>
                {category.subtitle && (
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{category.subtitle}</p>
                )}
              </div>
              
              {/* Services Grid */}
              <div className={`grid gap-8 ${category.services.length === 1 ? 'max-w-2xl mx-auto' : 'md:grid-cols-2'}`}>
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="group border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm hover:bg-card/90 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                        {service.highlight && (
                          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                            {service.highlight}
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Divider line between categories (except last) */}
              {categoryIndex < serviceCategories.length - 1 && (
                <div className="flex items-center justify-center mt-16">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Single CTA at the bottom */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your story?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're applying to medical school, building a business with ADHD, or carrying a story that needs to be told — we're here to help you find clarity and success.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant px-8 py-3 text-lg"
            asChild
          >
            <a href="mailto:vvynletter@gmail.com">
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};