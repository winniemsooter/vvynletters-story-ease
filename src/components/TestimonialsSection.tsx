import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Quick update - I decided to commit to UC Davis since I was accepted on SCHOLARSHIP! Thank you so much for weathering the storm with me - may you continue to be blessed in all that you do.",
    client: "Oluoma"
  },
  {
    text: "Please excuse the delayed response, I slept in late this morning. I have read over the manuscript and I am very pleased. I will definitely be using your services again, and will recommend others for your excellent prompt customer service.",
    client: "Kurt"
  },
  {
    text: "Winifred is a very hard-working individual. I enjoyed working with her and she has a positive attitude and is great to deal with.",
    client: "Mike"
  },
  {
    text: "Quick update, scaled through the first round of the MBA application at Saïd Business School, Oxford, I have an interview scheduled on the 1st of July. Thanks for your help!",
    client: "Theodore"
  },
  {
    text: "Guess who got into Cornell? Me!!! Thank you so much for your help with over 34 essays; it paid off, we did it! I got three other acceptances, but I'll be going to Cornell. Thanks!!",
    client: "Jennifer"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">What our clients say</h2>
          <p className="text-xl font-avenir text-muted-foreground">
            Real results from real clients who trusted us with their stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-smooth bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <CardDescription className="font-avenir text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </CardDescription>
                    <div className="text-sm font-avenir font-medium text-primary">
                      — {testimonial.client}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-elegant font-avenir"
            asChild
          >
            <a href="mailto:vvynletter@gmail.com">
              Work with us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};