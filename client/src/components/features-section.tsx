import { Phone, Calendar, MessageCircle, CheckCircle, BarChart3, Zap, Share2, CalendarDays, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  const features = [
    {
      icon: Phone,
      title: "Miss Call Text Back",
      description: "You're on the tools. Your AI answers the phone, books jobs in your calendar, and collects details from leads you would've lost."
    },
    {
      icon: Calendar,
      title: "AI Agent to Book Appointments",
      description: "AI replies instantly via chat, Messenger or email—so you stay ahead of competitors."
    },
    {
      icon: MessageCircle,
      title: "CRM for Small Businesses",
      description: "Plus you get an advanced CRM platform that automates personalised email and SMS campaigns. Effortlessly manage leads and bookings while staying compliant with our opt-out consent feature, saving you time and boosting revenue."
    },
    {
      icon: CheckCircle,
      title: "Reputation Management",
      description: "Automation follow-ups help you collect and publish reviews automatically."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            <span className="text-primary">Stream Digital</span> AI & Automation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We save you time and solve real world problems with the following service with one monthly bundle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-lightgrey p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
            Plus These Powerful Tools Included
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Every bundle comes with these essential integrations to maximise your business efficiency
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-charcoal mb-2">Social Lead Integration</h4>
              <p className="text-gray-600 text-sm">Social media ads automatically populate leads directly into your CRM—no manual data entry required.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-charcoal mb-2">Smart Calendar Sync</h4>
              <p className="text-gray-600 text-sm">Seamlessly connects with your existing calendar so bookings appear exactly where you need them.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-charcoal mb-2">Workflow AI Assistant</h4>
              <p className="text-gray-600 text-sm">Build intelligent automations tailored to your business without technical complexity or guesswork.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
