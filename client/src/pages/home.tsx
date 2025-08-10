import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  // Set page title for SEO
  useEffect(() => {
    document.title = "Stream Digital Home | AI Automation Agency Australia | Business Growth Solutions";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">Stream Digital</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We save you time and solve real world problems with AI-powered solutions for Australian trade businesses.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
