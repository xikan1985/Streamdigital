import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { useEffect } from "react";

export default function Plans() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Stream Digital Plans & Pricing | AI Automation Solutions Australia | $299-$499/month";
  }, []);

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

  const plans = [
    {
      name: "Done for You",
      price: "$299",
      period: "per month",
      description: "Perfect for businesses wanting to streamline customer engagement and boost online presence with minimal effort.",
      features: [
        "Missed Call Text Back: Never miss a lead with our AI-powered text-back system",
        "Advanced White-Labeled CRM: Manage SMS, email, social media, and WhatsApp campaigns",
        "AI Agent Setup & Training: We configure and train your agents to align with your brand",
        "Service AI: Ideal for high volume enquiries and save your admin or front desk teams with FAQs. Perfect for accommodations, restaurants and hotels",
        "Test & Approve: You review and approve all setups before they go live",
        "Review Automation: Boost your online ratings with automated review requests"
      ],
      popular: true
    },
    {
      name: "Done for You + Lead Generation", 
      price: "$499",
      period: "per month + Lead Cost",
      description: "Everything in the Done for You plan, plus a bespoke converting landing page and managed social campaigns to drive qualified leads and grow your business.",
      features: [
        "All Done for You Features: Get the full suite of automation tools",
        "Service AI: Ideal for high volume enquiries and save your admin or front desk teams with FAQs. Perfect for accommodations, restaurants and hotels",
        "Bespoke Converting Landing Page: A custom-built landing page designed to convert visitors into customers",
        "Managed Social Campaigns: We design and manage targeted social media campaigns",
        "Pay-Per-Qualified-Lead: Only pay for leads that meet your agreed criteria",
        "Transparent Pricing: Lead costs typically $50–$100 per qualified lead",
        "Industry Optimized: Campaigns tailored for trades, hospitality, retail"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Tailored for Australia",
      description: "Our solutions are built for local SMBs, from tradies to cafes, ensuring you compete effectively in your market."
    },
    {
      title: "Hands-Off Setup", 
      description: "We handle the heavy lifting—setup, training, and tweaks—so you focus on running your business."
    },
    {
      title: "Scalable & Flexible",
      description: "Start small and grow with plans that adapt to your needs, backed by our expertise in AI automation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose Your <span className="text-yellow-300">Plan</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tailored AI automation solutions to help Australian small businesses thrive. No lock-in contracts, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  plan.popular ? 'border-primary relative' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-bg text-white px-6 py-2 rounded-full flex items-center space-x-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-3 text-lg ${
                    plan.popular 
                      ? 'gradient-bg text-white hover:opacity-90' 
                      : 'bg-charcoal text-white hover:bg-gray-800'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Stream Digital Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
              Why Choose <span className="text-primary">Stream Digital?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-lightgrey p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-lightgrey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us to get started or book a demo today!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
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

          {/* Consent Text */}
          <p className="text-sm text-gray-600 text-center mt-6 max-w-3xl mx-auto">
            By signing up, you agree: "I confirm that I want to receive messages from Stream Digital using the contact information I've provided. I understand I can opt out at any time by clicking the unsubscribe link in emails or replying STOP to SMS messages."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}