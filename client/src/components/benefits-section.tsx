import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Save 20+ Hours Per Week",
      description: "Stop spending time on admin tasks and phone calls. Focus on the work that generates revenue."
    },
    {
      title: "Increase Lead Conversion by 500%",
      description: "Instant responses and professional handling ensure you never lose another potential customer."
    },
    {
      title: "Reduce Employee Overheads",
      description: "AI handles customer service without the cost of hiring additional staff."
    },
    {
      title: "Work-Life Balance",
      description: "AI works around the clock so you don't have to. Enjoy evenings and weekends again."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-lightgrey to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-6">
                Why AI for Contractors is a <span className="text-primary">Game-Changer</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI takes care of the tasks that usually slow you down, so you can focus on what you do best.
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="Professional tradesman working efficiently" 
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
