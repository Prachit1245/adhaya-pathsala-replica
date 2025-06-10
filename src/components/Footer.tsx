
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/482c258d-a55f-45d7-a8ce-ab19187da364.png" 
              alt="Adhaya Pathshala Logo" 
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Adhaya Pathshala - Excellence in Higher Secondary Education. Empowering students with quality education and shaping future leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-orange-500 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-orange-500 transition-colors">Courses</a></li>
              <li><a href="#admissions" className="text-gray-300 hover:text-orange-500 transition-colors">Admissions</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">+2 Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">+2 Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">+2 Humanities</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">+2 Law</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Entrance Preparation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-orange-500" size={18} />
                <span className="text-gray-300">+977 9840065951</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-500" size={18} />
                <span className="text-gray-300">info@adhaya.edu.np</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-orange-500" size={18} />
                <span className="text-gray-300">Gaushala, Kathmandu Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Adhaya Pathshala. All rights reserved. सरकार सहित्को शिक्षा
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
