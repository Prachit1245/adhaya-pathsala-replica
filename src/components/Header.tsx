
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+977 9840065951</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@adhaya.edu.np</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Gaushala, Kathmandu Nepal</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/482c258d-a55f-45d7-a8ce-ab19187da364.png" 
              alt="Adhaya Pathshala Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#courses" className="text-gray-700 hover:text-orange-500 transition-colors">Courses</a>
            <a href="#admissions" className="text-gray-700 hover:text-orange-500 transition-colors">Admissions</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#courses" className="block text-gray-700 hover:text-orange-500 transition-colors">Courses</a>
            <a href="#admissions" className="block text-gray-700 hover:text-orange-500 transition-colors">Admissions</a>
            <a href="#contact" className="block text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4">
              Apply Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
