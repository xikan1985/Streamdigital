import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function Booking() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Book Consultation | Stream Digital | Free AI Assessment";
  }, []);

  // Load Go High Level form embed script
  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const benefits = [
    "Free consultation to discuss your business needs",
    "Personalised automation strategy session", 
    "No obligation assessment of current processes",
    "Clear roadmap for implementing AI solutions"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Booking Calendar Section */}
      <section className="pt-24 pb-12 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="w-full" style={{ minHeight: '800px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/ykymX0zOQuZv29WUv5S7"
                width="100%"
                height="800"
                style={{
                  border: 'none',
                  overflow: 'hidden'
                }}
                scrolling="no"
                frameBorder="0"
                id="ykymX0zOQuZv29WUv5S7_1754793283209"
                title="Stream Digital Consultation Booking"
                allowFullScreen
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-charcoal mb-4">What to Expect in Your Consultation</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="space-y-2">
                  <p>• Review your current business processes</p>
                  <p>• Identify automation opportunities</p>
                  <p>• Discuss your specific challenges</p>
                </div>
                <div className="space-y-2">
                  <p>• Explore Stream Digital solutions</p>
                  <p>• Create a custom implementation plan</p>
                  <p>• Answer all your questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}