import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-charcoal hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-charcoal hover:text-primary transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-charcoal hover:text-primary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-primary transition-colors">
              Contact
            </button>
          </div>
          
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="gradient-bg text-white hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-charcoal" />
            ) : (
              <Menu className="h-6 w-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('features')} className="text-charcoal hover:text-primary transition-colors text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-charcoal hover:text-primary transition-colors text-left">
                Benefits
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-charcoal hover:text-primary transition-colors text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-charcoal hover:text-primary transition-colors text-left">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="gradient-bg text-white hover:opacity-90 transition-opacity w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
