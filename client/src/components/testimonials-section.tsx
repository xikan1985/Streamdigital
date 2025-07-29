import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jake Morrison",
      business: "Morrison Electrical",
      content: "Never miss a call again! The AI handles all my bookings perfectly. I've increased my jobs by 40% since starting with Stream Digital.",
      initials: "JM"
    },
    {
      name: "Sarah Thompson",
      business: "Thompson Plumbing",
      content: "The time I save with automated scheduling is incredible. I can focus on actual plumbing work instead of admin tasks.",
      initials: "ST"
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez Roofing",
      content: "Game changer for my roofing business. The AI follows up with leads automatically and my conversion rate has doubled.",
      initials: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Tradies Love Our <span className="text-primary">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how AI is transforming trade businesses across Australia
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
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-lightgrey px-8 py-4 rounded-xl">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-charcoal">Join 500+ Happy Tradies</p>
              <p className="text-sm text-gray-600">Trusted by professionals across Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
