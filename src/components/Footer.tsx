
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/482c258d-a55f-45d7-a8ce-ab19187da364.png" 
              alt="Adhaya Pathshala Logo" 
              className="h-12 w-auto"
            />
            <p className="text-orange-100 leading-relaxed">
              Adhaya Pathshala - Excellence in Higher Secondary Education. Empowering students with quality education and shaping future leaders.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white text-orange-500 p-2 rounded-full hover:bg-orange-100 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-orange-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-orange-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-orange-100 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#admissions" className="text-orange-100 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#contact" className="text-orange-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">+2 Science</a></li>
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">+2 Management</a></li>
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">+2 Humanities</a></li>
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">+2 Law</a></li>
              <li><a href="#" className="text-orange-100 hover:text-white transition-colors">Entrance Preparation</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-white" size={18} />
                <span className="text-orange-100">+977 9840065951</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-white" size={18} />
                <span className="text-orange-100">info@adhaya.edu.np</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-white" size={18} />
                <span className="text-orange-100">Gaushala, Kathmandu Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-orange-100 text-sm">
              © 2024 Adhaya Pathshala. All rights reserved. सरकार सहित्को शिक्षा
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-orange-100 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-orange-100 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-orange-100 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
