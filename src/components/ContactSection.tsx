import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Mail, FileText } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-4">Contact Us</h2>
          <p className="text-xl font-avenir text-muted-foreground max-w-2xl mx-auto">
            Whether you're applying to med school, building a business with
            ADHD, or carrying a story that needs to be told — at VVYNLETTERS, every service is
            built to bring ease for better outcomes. If you're ready to work with someone who understands both pressure
            and psychology, reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm text-center flex flex-col h-full">
            <CardHeader className="flex-grow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-playfair">Book a Consultation</CardTitle>
              <CardDescription className="font-avenir">
                Schedule a free 15-minute discovery call to discuss your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 transition-smooth font-avenir"
                asChild
              >
                <a
                  href="https://cal.com/vvynletters"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm text-center flex flex-col h-full">
            <CardHeader className="flex-grow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-playfair">Email Direct</CardTitle>
              <CardDescription className="font-avenir">
                Prefer email? Send us a message with your project details
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-avenir"
                asChild
              >
                <a href="mailto:vvynletter@gmail.com">Send Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm text-center flex flex-col h-full">
            <CardHeader className="flex-grow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="font-playfair">Start Here Form</CardTitle>
              <CardDescription className="font-avenir">
                Fill out our intake form to get matched with the right service
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full transition-smooth font-avenir"
                asChild
              >
                <a href="#" rel="noopener noreferrer">
                  Start Here →
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};
