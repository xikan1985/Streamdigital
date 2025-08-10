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
    <section className="pt-20 pb-16 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-charcoal">Helping you to build</span>
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> practical AI Solutions</span>
                <span className="text-charcoal"> that drives real revenue outcomes</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
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
                className="border-2 border-primary text-primary px-8 py-4 text-lg hover:bg-primary hover:text-white transition-all"
                size="lg"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-500">
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
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional tradesman using digital technology" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
