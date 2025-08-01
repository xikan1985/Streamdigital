import { ArrowRight, Download, Play, BookOpen, Wrench, Zap, Building, Hammer, Paintbrush, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Resources() {
  const tradeCategories = [
    {
      icon: Zap,
      title: "Electricians",
      description: "AI solutions for electrical contractors",
      resources: [
        "Emergency Call Handling Guide",
        "Electrical Safety Compliance Templates",
        "Customer Education Scripts",
        "Pricing Calculator Integration"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Droplets,
      title: "Plumbers",
      description: "Automated systems for plumbing professionals",
      resources: [
        "24/7 Emergency Response Setup",
        "Leak Detection Service Scripts",
        "Maintenance Reminder Automation",
        "Seasonal Marketing Campaigns"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Building,
      title: "Builders",
      description: "Construction project management with AI",
      resources: [
        "Project Timeline Communication",
        "Progress Update Automation",
        "Subcontractor Coordination",
        "Building Code Reference System"
      ],
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Hammer,
      title: "Carpenters",
      description: "Custom solutions for carpentry businesses",
      resources: [
        "Custom Work Consultation Scripts",
        "Material Cost Calculator",
        "Project Portfolio Showcase",
        "Maintenance Service Follow-ups"
      ],
      color: "from-amber-600 to-amber-800"
    },
    {
      icon: Paintbrush,
      title: "Painters",
      description: "AI tools for painting contractors",
      resources: [
        "Color Consultation Booking",
        "Weather-Based Scheduling",
        "Before/After Photo Management",
        "Seasonal Promotion Templates"
      ],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description: "Multi-service maintenance operations",
      resources: [
        "Service Category Classification",
        "Multi-Trade Scheduling System",
        "Preventive Maintenance Programs",
        "Customer Property Profiles"
      ],
      color: "from-green-400 to-green-600"
    }
  ];

  const resourceTypes = [
    {
      icon: BookOpen,
      title: "Setup Guides",
      description: "Step-by-step instructions for implementing AI in your trade business",
      count: "12 guides",
      resources: [
        "Getting Started with AI for Tradies",
        "Phone System Integration Guide",
        "Customer Data Migration Checklist",
        "Training Your AI Agent"
      ]
    },
    {
      icon: Play,
      title: "Video Tutorials",
      description: "Watch and learn how to maximize your AI system's potential",
      count: "25 videos",
      resources: [
        "AI Agent Configuration Walkthrough",
        "Booking System Demo",
        "Analytics Dashboard Overview",
        "Troubleshooting Common Issues"
      ]
    },
    {
      icon: Download,
      title: "Templates & Scripts",
      description: "Ready-to-use conversation scripts and business templates",
      count: "50+ templates",
      resources: [
        "Call Handling Scripts Library",
        "Email Response Templates",
        "Quote Follow-up Sequences",
        "Customer Onboarding Checklists"
      ]
    }
  ];

  const caseStudies = [
    {
      business: "Morrison Electrical",
      trade: "Electrician",
      results: "40% increase in bookings",
      description: "How Jake Morrison transformed his solo electrical business with 24/7 AI call handling.",
      metrics: ["200+ calls handled monthly", "Zero missed opportunities", "3x faster response time"]
    },
    {
      business: "Thompson Plumbing",
      trade: "Plumber",
      results: "60% time savings on admin",
      description: "Sarah Thompson automated her booking system and gained 20+ hours per week.",
      metrics: ["Eliminated double bookings", "Automated follow-ups", "Improved customer satisfaction"]
    },
    {
      business: "Rodriguez Roofing",
      trade: "Roofer",
      results: "2x lead conversion rate",
      description: "Mike Rodriguez doubled his conversion rate with instant AI-powered responses.",
      metrics: ["500% faster response time", "Automated quote generation", "24/7 availability"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              AI Resources for <span className="text-yellow-300">Every Trade</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides, templates, and case studies to help you implement and maximize AI automation in your trade business.
            </p>
          </div>
        </div>
      </section>

      {/* Trade-Specific Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Resources by <span className="text-primary">Trade Type</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific AI solutions and templates tailored for your trade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-lightgrey rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-3">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center space-x-2">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-600">{resource}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full gradient-bg text-white hover:opacity-90 transition-all">
                    Access Resources
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Types */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup guides to advanced optimization techniques, we provide comprehensive support materials.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {resourceTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{type.title}</h3>
                      <p className="text-sm text-primary font-medium">{type.count}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {type.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-start space-x-2">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{resource}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    Browse All
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-charcoal mb-4">
              Real Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other tradies are using AI to transform their businesses and achieve remarkable results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-lightgrey rounded-2xl p-8">
                <div className="mb-6">
                  <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {study.trade}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-2">{study.business}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{study.results}</div>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-charcoal">Key Results:</h4>
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full gradient-bg text-white hover:opacity-90 transition-all">
                  Read Full Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-lightgrey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Need More Help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our comprehensive knowledge base and support team are here to help you succeed with AI automation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl">
              <BookOpen className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4 text-white p-3" />
              <h3 className="text-lg font-semibold text-charcoal mb-3">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Search our extensive library of articles, tutorials, and troubleshooting guides.</p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Browse Articles
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">?</span>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get personalized help from our AI specialists and trade business experts.</p>
              <Button className="gradient-bg text-white hover:opacity-90">
                Get Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start with our comprehensive onboarding resources and join the AI automation revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all">
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 text-lg hover:bg-white hover:text-primary transition-all"
              >
                Download Setup Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}