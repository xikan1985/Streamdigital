import { Phone, Calendar, MessageCircle, CheckCircle, BarChart3, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Phone,
      title: "Miss Call Text Back",
      description: "Never miss a customer call again. Get an instant text reply to every missed call, so you can follow up quickly and win more jobs. Perfect for busy electricians and plumbers on the go."
    },
    {
      icon: Calendar,
      title: "AI Agent to Book Appointments",
      description: "Say goodbye to phone tag—our AI handles bookings 24/7 for electricians and plumbers. You get more jobs lined up and extra time to focus on your work."
    },
    {
      icon: MessageCircle,
      title: "CRM for Small Businesses",
      description: "Keep your customer details organised with our simple CRM. Track jobs, calls, and quotes in one easy spot. Stay on top of your business and impress clients with better service."
    },
    {
      icon: CheckCircle,
      title: "Reputation Management",
      description: "Boost your business reputation with our easy service. We handle your online reviews and ratings, making sure you look great to new customers in the region."
    },
    {
      icon: BarChart3,
      title: "Paid Ads Management",
      description: "Get more customers with our expert management. We run Google Ads, Meta, and TikTok campaigns to bring more jobs to electricians and plumbers."
    },
    {
      icon: Zap,
      title: "Complete Business Growth",
      description: "All services work together to save you time, win more customers, and grow your business—tailored specifically for trades in our local region."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Services That Work For <span className="text-primary">Local Trades</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, effective solutions designed specifically for electricians and plumbers in the Geelong and Bellarine region.
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
