import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Plans() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Plans & Pricing | Stream Digital | AI Automation Australia";
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
      name: "Base Plan",
      price: "$297",
      period: "per month + GST",
      value: "$450",
      valueBreakdown: "White-labeled CRM: $150 p.m., Bespoke AI Agent: $150 p.m., Missed Call Text-Back: $150 p.m.",
      description: "An entry-level plan for small Australian businesses to improve lead conversion using essential automation tools.",
      features: [
        "White-labeled GoHighLevel CRM for managing contacts and running SMS/email campaigns",
        "One bespoke leads conversion AI agent, trained to engage leads",
        "Missed call text-back using your existing Android or chosen iPhone number",
        "AI setup and ongoing maintenance"
      ],
      cancellation: "One month's notice",
      popular: false
    },
    {
      name: "Growth Plan",
      price: "$499",
      period: "per month",
      value: "$1050",
      valueBreakdown: "est. based on Base features + advanced CRM: $250 p.m., three AI agents: $450 p.m., two service AIs: $300 p.m., review automation: $50 p.m.",
      description: "Designed for businesses aiming to streamline customer engagement and enhance online presence with advanced automation.",
      features: [
        "Missed call text-back with AI",
        "Advanced white-labeled CRM supporting SMS, email, social media, and WhatsApp campaigns",
        "Three AI agents, configured and trained for your brand",
        "Two service AIs for handling high-volume inquiries (e.g., FAQs for accommodation, restaurants, hotels)",
        "Test and approve setups before launch",
        "Automated review requests to boost online ratings"
      ],
      cancellation: "One month's notice",
      popular: true
    },
    {
      name: "Bespoke Plan",
      price: "Price based on Scope of work",
      period: "",
      value: null,
      valueBreakdown: null,
      description: "A comprehensive plan for businesses seeking customised automation and managed campaigns to drive qualified leads.",
      features: [
        "All Growth Plan features (advanced CRM, three AI agents, two service AIs, review automation)",
        "Custom-built landing page designed for conversions",
        "Managed social media campaigns tailored for trades, hospitality, or retail",
        "Pay-per-qualified-lead pricing, with transparent lead costs"
      ],
      cancellation: "One month's notice",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-gray-500 mb-6 text-center">
                  <span className="font-medium">Cancellation:</span> {plan.cancellation}
                </div>

                <Link href="/booking">
                  <Button className="w-full py-3 text-lg gradient-bg text-white hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
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
      <section id="contact-form-section" className="py-20 bg-gradient-to-br from-lightgrey to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Ready to Automate Your Growth?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Speak with us directly to get started!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              Try Our Missed Call Text Back with AI Agent
            </h3>
            <p className="text-gray-600 mb-6">
              Test our automation system - call and hang up, then receive an instant AI text response!
            </p>
            <a href="tel:+610408788848">
              <Button className="gradient-bg text-white px-8 py-4 text-xl hover:opacity-90 transition-all transform hover:scale-105">
                📞 Call to Initiate Agent
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Available 24/7 • Instant AI response demo
            </p>
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
}