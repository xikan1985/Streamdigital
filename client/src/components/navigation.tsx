import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "./logo";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
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
          <Link href="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/features" className="text-charcoal hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/plans" className="text-charcoal hover:text-primary transition-colors">
              Plans
            </Link>
            <Link href="/resources" className="text-charcoal hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>
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
              <Link href="/features" className="text-charcoal hover:text-primary transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link href="/plans" className="text-charcoal hover:text-primary transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Plans
              </Link>
              <Link href="/resources" className="text-charcoal hover:text-primary transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Resources
              </Link>
              <Link href="/contact" className="text-charcoal hover:text-primary transition-colors text-left" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="gradient-bg text-white hover:opacity-90 transition-opacity w-full mt-4">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
