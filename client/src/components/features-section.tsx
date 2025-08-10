import { Phone, Calendar, MessageCircle, CheckCircle, BarChart3, Zap } from "lucide-react";
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

        {/* Combined Benefits Section */}
        <div className="bg-gradient-to-br from-lightgrey to-white rounded-3xl p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                  Why Choose <span className="text-primary">Stream Digital</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We save you time and solve real world problems with proven automation solutions that help service businesses grow faster and more efficiently.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Never Miss a Lead</h3>
                    <p className="text-gray-600">Miss Call Text Back and AI booking means every customer gets instant attention, even when you're busy on a job site.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Win More Jobs</h3>
                    <p className="text-gray-600">Professional reputation management and instant responses help you stand out from other electricians and plumbers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Save Time & Money</h3>
                    <p className="text-gray-600">Our CRM and automation handle admin tasks, so you can focus on the work that pays. No need for extra staff.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">Grow Without Stress</h3>
                    <p className="text-gray-600">Everything works together to bring you more customers while keeping your business organised and professional.</p>
                  </div>
                </div>
              </div>
              
              <Button className="gradient-bg text-white px-8 py-4 text-lg hover:opacity-90 transition-all transform hover:scale-105">
                See How It Works
              </Button>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office technology and automation setup" 
                className="rounded-2xl shadow-lg w-full h-auto" 
              />
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Electrician working on residential home wiring" 
                  className="rounded-xl shadow-md w-full h-auto" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                  alt="Digital automation interface and dashboard" 
                  className="rounded-xl shadow-md w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
