import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="space-y-8 text-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stream Digital</div>
                <div className="text-charcoal">Turn Leads into Sales with Customised AI and Automation</div>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Stream Digital, we help small and medium-sized service-based businesses save hundreds of hours and grow sales with customised AI and automation that nurtures every enquiry into a sale. Our all-in-one system connects via SMS, email, or calls within minutes, slashing overheads and boosting conversions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>30-day trial after setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime - 30 day billing</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
