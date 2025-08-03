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
              Stream Digital is Geelong's leading AI and automation agency, helping local service businesses throughout Geelong and Bellarine Peninsula grow with intelligent solutions.
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
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Stream Digital Geelong - AI & Automation Agency. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Australian Business Number: 123 456 789
          </p>
        </div>
      </div>
    </footer>
  );
}
