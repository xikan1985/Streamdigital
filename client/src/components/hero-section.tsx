import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 pb-20 min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-charcoal">Geelong's Leading</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI & Automation</span>
                <span className="text-charcoal"> Agency</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Helping local service businesses in the Geelong and Bellarine region to win more jobs using simple and effective AI and Automation solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
                size="lg"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary px-8 py-4 text-lg hover:bg-primary hover:text-white transition-all bg-white/90 backdrop-blur-sm"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
