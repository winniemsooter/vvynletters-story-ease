import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-2">VVYNLETTERS</h3>
            <p className="font-century text-background/80">
              storytelling meets purpose
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-century">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:vvynletter@gmail.com" className="hover:text-background/80 transition-colors">
                vvynletter@gmail.com
              </a>
            </div>
          </div>
          
          <div className="pt-6 border-t border-background/20">
            <p className="text-background/60 text-sm font-century">
              © {new Date().getFullYear()} VVYNLETTERS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};