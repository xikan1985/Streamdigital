import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Features() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}