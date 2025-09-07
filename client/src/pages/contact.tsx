import { useEffect } from "react";
import { Mail, MapPin } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Contact() {
  // Load Go High Level form script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-yellow-300">Stream Digital</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We save you time and solve real world problems with automation solutions that help your business win more jobs. Contact Stream Digital today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Let's Grow Your Local Business
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We save you time and solve real world problems with simple, effective solutions that help you never miss a call, win more jobs, and grow your business.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-1">Email Support</h3>
                    <p className="text-gray-600">hello@streamdigital.com.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg mb-1">Location</h3>
                    <p className="text-gray-600">Geelong Australia</p>
                    <p className="text-sm text-gray-500">Serving local service businesses Australia-wide</p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="bg-lightgrey p-6 rounded-2xl">
                <h3 className="font-semibold text-charcoal mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-charcoal">How quickly can I get started?</p>
                    <p className="text-gray-600">Most local setups completed within 24-48 hours.</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Do I need technical knowledge?</p>
                    <p className="text-gray-600">No! We will handle the setup but will need your support to provide access to existing tools.</p>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Can I cancel anytime?</p>
                    <p className="text-gray-600">Yes, no long-term contracts required.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-lightgrey rounded-2xl p-8">
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

      <Footer />
    </div>
  );
}