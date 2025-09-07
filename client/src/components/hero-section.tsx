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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stream Digital</span>
                <span className="text-charcoal">: Bespoke AI & Marketing</span>
              </h1>
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  With over 15 years of marketing know-how, Stream Digital helps small and medium businesses across Australia turn leads into sales. We dive deep into your sales process, crafting tailored strategies that align with your growth ambitions. Our approach blends human insight with cutting-edge tech to deliver cracking results.
                </p>
                <p>
                  We create custom multi-channel marketing funnels and smart automations to maximise your efficiency and revenue. By understanding what drives your customers, we ensure every solution hits the mark. Whether it's streamlining operations or amplifying outreach, we tailor our work to fit your business like a glove.
                </p>
                <p>
                  Love our plan? We'll bring it to life with precision. Not keen? Walk away with no strings attached. Our no-obligation process lets you explore growth opportunities with confidence, backed by a team dedicated to your success in Australia's competitive market.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105"
                size="lg"
              >
                Start Free Trial
              </Button>
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
