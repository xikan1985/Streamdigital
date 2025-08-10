import { Check, X, Star, Phone, MessageCircle, Calendar, BarChart3, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Plans() {
  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const plans = [
    {
      name: "Essential",
      price: "$750",
      period: "per month",
      description: "Perfect for solo electricians and plumbers getting started with smart business solutions",
      features: [
        "Miss Call Text Back Service",
        "AI Agent for Appointment Booking",
        "Simple CRM for Small Businesses",
        "Basic Reputation Management",
        "Lead Capture & Follow-up",
        "SMS & Email Notifications",
        "Australia-wide Service Area",
        "Setup & Training Included"
      ],
      limitations: [
        "Up to 200 calls per month",
        "Single phone number",
        "Basic online presence"
      ],
      popular: false,
      icon: Phone
    },
    {
      name: "Professional",
      price: "$1,250",
      period: "per month",
      description: "Complete business growth solution for established electricians and plumbers in the region",
      features: [
        "Everything in Essential",
        "Advanced Reputation Management",
        "Paid Ads Management (Google, Meta, TikTok)",
        "Advanced CRM with Job Tracking",
        "Multi-Channel Lead Management",
        "Review Collection & Showcase",
        "Priority Local Area Targeting",
        "Custom Business Training",
        "Priority Support",
        "Multiple Phone Numbers",
        "Team Management Tools",
        "Performance Analytics"
      ],
      limitations: [
        "Up to 500 calls per month",
        "Additional advertising budget separate"
      ],
      popular: true,
      icon: Zap
    }
  ];

  const features = [
    {
      icon: Phone,
      title: "Miss Call Text Back",
      description: "Never miss a customer call again. Get instant text replies to follow up quickly and win more jobs."
    },
    {
      icon: Calendar,
      title: "AI Appointment Booking",
      description: "Say goodbye to phone tag. Our AI handles bookings 24/7 so you get more jobs lined up automatically."
    },
    {
      icon: MessageCircle,
      title: "Reputation Management",
      description: "We handle your online reviews and ratings, making sure you look great to new customers."
    },
    {
      icon: BarChart3,
      title: "Paid Ads Management",
      description: "We run Google Ads, Meta, and TikTok campaigns to bring more jobs to local tradies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Stream Digital</span> Pricing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Choose the AI and automation solution that fits your business. Free consultation with no obligation, 30-day trial starts after complete setup.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>30-day trial after setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>Cancel anytime - 30 day billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div 
                  key={index} 
                  className={`relative rounded-2xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl transform scale-105' 
                      : 'bg-lightgrey border border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-400 text-charcoal px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'gradient-bg'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-charcoal'}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-charcoal'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        /{plan.period}
                      </span>
                    </div>
                    <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className={`font-semibold ${plan.popular ? 'text-white' : 'text-charcoal'}`}>
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular ? 'text-green-300' : 'text-green-500'
                          }`} />
                          <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations && plan.limitations.length > 0 && (
                      <>
                        <h4 className={`font-semibold mt-6 ${plan.popular ? 'text-white' : 'text-charcoal'}`}>
                          Usage limits:
                        </h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start space-x-3">
                              <div className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                plan.popular ? 'text-yellow-300' : 'text-orange-500'
                              }`}>
                                •
                              </div>
                              <span className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                                {limitation}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <Button 
                    onClick={scrollToContact}
                    className={`w-full py-4 text-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-white text-primary hover:bg-gray-100' 
                        : 'gradient-bg text-white hover:opacity-90'
                    }`}
                  >
                    Start Free Trial
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Why Choose <span className="text-primary">Stream Digital?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We save you time and solve real world problems with:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-lightgrey p-6 rounded-2xl">
              <h3 className="font-semibold text-charcoal mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="bg-lightgrey p-6 rounded-2xl">
              <h3 className="font-semibold text-charcoal mb-3">What happens if I exceed my call limit?</h3>
              <p className="text-gray-600">We'll notify you when you're approaching your limit. Additional calls are available at competitive rates, or you can upgrade to a higher plan.</p>
            </div>
            
            <div className="bg-lightgrey p-6 rounded-2xl">
              <h3 className="font-semibold text-charcoal mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No setup fees! We include complete setup and training in your monthly subscription. You'll be up and running within 24-48 hours.</p>
            </div>
            
            <div className="bg-lightgrey p-6 rounded-2xl">
              <h3 className="font-semibold text-charcoal mb-3">Do you integrate with my existing tools?</h3>
              <p className="text-gray-600">Yes, we integrate with popular CRM systems, scheduling tools, and accounting software. Custom integrations are available for Professional AI subscribers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of tradies who are already saving time and growing their business with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary transition-all"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}