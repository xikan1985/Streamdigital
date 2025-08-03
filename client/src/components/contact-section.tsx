import { useEffect } from "react";
import { Phone, Mail, Clock } from "lucide-react";

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
                Ready to Partner with <span className="text-yellow-300">Geelong's AI Agency?</span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Contact Stream Digital today and discover how Geelong's leading automation agency can transform your business. Start your free trial - no setup fees, no long-term commitments.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Get Started Today</p>
                  <p className="text-blue-100">Use the form below to begin your free trial</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-charcoal mb-6">Start Your Free Trial</h3>
            
            {/* Go High Level Embedded Form */}
            <div className="w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/oNtoE6mrxKOyMDdnwN3q"
                style={{
                  width: '100%',
                  height: '600px',
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
                data-form-name="Marketing Form - Claim Offer"
                data-height="593"
                data-layout-iframe-id="inline-oNtoE6mrxKOyMDdnwN3q"
                data-form-id="oNtoE6mrxKOyMDdnwN3q"
                title="Marketing Form - Claim Offer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}