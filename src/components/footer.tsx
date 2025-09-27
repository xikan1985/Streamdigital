import { Twitter, Linkedin, Facebook } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-400 leading-relaxed">
              Stream Digital is Australia's premier AI automation agency, specialising in helping trade businesses and service companies grow through intelligent automation solutions. We save you time and solve real world problems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          

          

          
          <div>
            <h4 className="font-semibold mb-4">Stream Digital</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/features" className="hover:text-white transition-colors">AI Automation Services</a></li>
              <li><a href="/plans" className="hover:text-white transition-colors">Automation Plans & Pricing</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Business Resources</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Australia-Wide Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors">Trade Business Automation</li>
              <li className="hover:text-white transition-colors">Service Business AI Solutions</li>
              <li className="hover:text-white transition-colors">Missed Call Text Back</li>
              <li className="hover:text-white transition-colors">CRM Automation</li>
              <li className="hover:text-white transition-colors">Reputation Management</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Stream Digital</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Australia-Wide Service</li>
              <li>Email: hello@streamdigital.com.au</li>
              <li>AI Automation Specialists</li>
              <li className="text-primary font-medium">Stream Digital ABN: 53744510019</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Stream Digital. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            ABN: 53744510019
          </p>
        </div>
      </div>
    </footer>
  );
}
