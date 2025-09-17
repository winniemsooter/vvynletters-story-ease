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
          <h2 className="text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're applying to med school, building a business with
            ADHD, or carrying a story that needs to be told — every service is
            built to bring ease for better outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm text-center flex flex-col h-full">
            <CardHeader className="flex-grow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Book a Consultation</CardTitle>
              <CardDescription>
                Schedule a free 15-minute discovery call to discuss your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
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
              <CardTitle>Email Direct</CardTitle>
              <CardDescription>
                Prefer email? Send us a message with your project details
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
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
              <CardTitle>Start Here Form</CardTitle>
              <CardDescription>
                Fill out our intake form to get matched with the right service
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full transition-smooth"
                asChild
              >
                <a href="#" rel="noopener noreferrer">
                  Start Form
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            If you're ready to work with someone who understands both pressure
            and psychology, reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:vvynletter@gmail.com"
                className="hover:text-primary transition-colors"
              >
                vvynletter@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
