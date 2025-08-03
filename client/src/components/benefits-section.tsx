import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Never Miss a Lead",
      description: "Miss Call Text Back and AI booking means every customer gets instant attention, even when you're busy on a job site."
    },
    {
      title: "Win More Jobs",
      description: "Professional reputation management and instant responses help you stand out from other electricians and plumbers in Geelong."
    },
    {
      title: "Save Time & Money",
      description: "Our CRM and automation handle admin tasks, so you can focus on the work that pays. No need for extra staff."
    },
    {
      title: "Grow Without Stress",
      description: "Everything works together to bring you more customers while keeping your business organised and professional."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-lightgrey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
                Why Choose <span className="text-primary">Stream Digital Geelong</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As Geelong's trusted AI and automation agency, we understand local businesses. Stream Digital's proven automation solutions help Geelong service businesses grow faster and more efficiently.
              </p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
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
    </section>
  );
}
