import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import vvynlettersLogo from "@/assets/vvynletters-logo.png";

export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-50 shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src={vvynlettersLogo} 
                alt="VVYNLETTERS Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-playfair font-bold text-primary">
                VVYNLETTERS
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-century text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-century text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="font-century text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <Link 
              to="/blog"
              className="font-century text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-century text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth font-century"
              asChild
            >
              <a href="https://cal.com/vvynletters" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-century text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-century text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-base font-century text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Testimonials
              </button>
              <Link 
                to="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-century text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-century text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:opacity-90 transition-smooth font-century w-full"
                  asChild
                >
                  <a href="https://cal.com/vvynletters" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};