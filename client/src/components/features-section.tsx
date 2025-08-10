import { Phone, Calendar, MessageCircle, CheckCircle, BarChart3, Zap } from "lucide-react";

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
      description: "Plus you get an advanced CRM platform that automates personalized email and SMS campaigns. Effortlessly manage leads and bookings while staying compliant with our opt-out consent feature, saving you time and boosting revenue."
    },
    {
      icon: CheckCircle,
      title: "Reputation Management",
      description: "AI follow-ups help you collect and publish reviews automatically."
    },
    {
      icon: BarChart3,
      title: "Paid Ads Management",
      description: "We run Google Ads, Meta, and TikTok campaigns to bring more jobs to local tradies."
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
            We save you time and solve real world problems with:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
