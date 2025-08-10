import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import SEOContent from "@/components/seo-content";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Features() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Stream Digital | Australia's Leading AI Automation Agency | Trade & Hospitality Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SEOContent />
      <ContactSection />
      <Footer />
    </div>
  );
}