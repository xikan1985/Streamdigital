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

            {/* Contact Form for those not ready to book */}
            <div className="w-full border-t border-gray-200 pt-8">
              <h4 className="text-lg font-semibold text-charcoal mb-4 text-center">
                Not ready to book? Send us a message instead
              </h4>
              <div className="w-full" style={{ minHeight: '704px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/oNtoE6mrxKOyMDdnwN3q"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  id="inline-oNtoE6mrxKOyMDdnwN3q"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Stream Digital Contact Us form"
                  data-height="704"
                  data-layout-iframe-id="inline-oNtoE6mrxKOyMDdnwN3q"
                  data-form-id="oNtoE6mrxKOyMDdnwN3q"
                  title="Stream Digital Contact Us form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}