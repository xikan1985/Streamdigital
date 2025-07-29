import { Phone, Calendar, MessageCircle, CheckCircle, BarChart3, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Phone,
      title: "24/7 AI Call Handling",
      description: "Never miss a lead again. Our AI voice agents take calls, answer questions, and book appointments even when you're on site."
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Automatically schedule jobs, send confirmations, and manage your calendar without lifting a finger."
    },
    {
      icon: MessageCircle,
      title: "Instant Customer Responses",
      description: "AI chatbots provide immediate responses to enquiries, improving your chances of winning jobs by up to 5000%."
    },
    {
      icon: CheckCircle,
      title: "Automated Review Collection",
      description: "Build trust automatically by collecting and showcasing customer reviews without manual follow-up."
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track leads, conversion rates, and business performance with detailed AI-powered insights."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate follow-ups, quotes, and administrative tasks to systemise your entire business operation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            AI That Works For <span className="text-primary">Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From missed calls to automated booking, our AI handles the business tasks that slow you down.
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
