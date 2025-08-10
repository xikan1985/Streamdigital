import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jake Morrison",
      business: "Morrison Electrical",
      content: "The Miss Call Text Back service is brilliant! I never lose a customer call anymore. Since starting with Stream Digital, I've won 40% more jobs.",
      initials: "JM"
    },
    {
      name: "Sarah Thompson",
      business: "Thompson Plumbing",
      content: "The AI booking system and CRM keep everything organised. I can focus on actual plumbing work instead of chasing paperwork. My customers love how professional everything is now.",
      initials: "ST"
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Electrical, Torquay",
      content: "Stream Digital's reputation management and ads brought me heaps more customers. The whole system just works together perfectly.",
      initials: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Local Businesses Love <span className="text-primary">Stream Digital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how local service businesses are growing with Stream Digital's AI and automation agency solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-lightgrey p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
