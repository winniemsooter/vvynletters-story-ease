import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Lightbulb, Building, BookOpen } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Students & Scholars",
    description: "Applicants pursuing medical school, scholarships, and grants who need strong personal statements, essays, and proposals, we help you find clarity and courage through your applications."
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs & Creatives",
    description: "Especially ADHD founders who want less chaos and more flow."
  },
  {
    icon: BookOpen,
    title: "Authors & Visionaries",
    description: "Nonfiction projects that create impact and serve as a release of lived experience."
  }
];

export const PerfectForSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">Perfect For</h2>
          <p className="text-xl font-avenir text-muted-foreground max-w-2xl mx-auto">
            We work with high-capacity individuals who are ready to transform pressure into purpose
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth bg-accent/20 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <audience.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-playfair">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-avenir text-muted-foreground leading-relaxed">
                  {audience.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};