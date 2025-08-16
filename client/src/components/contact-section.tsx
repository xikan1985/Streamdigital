import { useEffect } from "react";
import { Phone, Mail, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  // Load Go High Level form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Partner with <span className="text-yellow-300">Australia's AI Agency?</span>
              </h2>

            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Book Your Consultation</p>
                  <p className="text-blue-100">Schedule a free consultation to discuss your business needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Free Consultation - 30 Day Trial After Setup</h3>
            
            {/* Booking Button */}
            <div className="text-center mb-8 p-8 bg-lightgrey rounded-xl">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-charcoal mb-4">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-6">
                Book your free 30-minute consultation to discover how Stream Digital can automate your business growth.
              </p>
              <Link href="/booking">
                <Button className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105">
                  Schedule Your Consultation
                </Button>
              </Link>
            </div>

            {/* Click to Call for those not ready to book */}
            <div className="w-full border-t border-gray-200 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-4">
                  Try Our Missed Call Text Back with AI Agent
                </h4>
                <p className="text-gray-600 mb-6">
                  Test our automation system - call and hang up, then receive an instant AI text response!
                </p>
                <a href="tel:+61483984309">
                  <Button className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105">
                    📞 Call to Initiate Agent
                  </Button>
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Available during business hours • Free consultation call
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}