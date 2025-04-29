
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" 
            alt="IIT Madras Logo" 
            className="h-10" 
          />
          <div className="font-poppins font-bold">
            <span className="text-hackathon-maroon text-xl">IIT Madras</span>
            <span className="text-hackathon-blue text-xl ml-2">Hackathon</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium hover:text-hackathon-maroon transition-colors">About</a>
          <a href="#timeline" className="font-medium hover:text-hackathon-maroon transition-colors">Timeline</a>
          <a href="#sponsors" className="font-medium hover:text-hackathon-maroon transition-colors">Sponsors</a>
          <a href="#faq" className="font-medium hover:text-hackathon-maroon transition-colors">FAQ</a>
          <Button className="bg-hackathon-maroon hover:bg-hackathon-maroon/90">Register Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="font-medium hover:text-hackathon-maroon transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#timeline" 
              className="font-medium hover:text-hackathon-maroon transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </a>
            <a 
              href="#sponsors" 
              className="font-medium hover:text-hackathon-maroon transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsors
            </a>
            <a 
              href="#faq" 
              className="font-medium hover:text-hackathon-maroon transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-hackathon-maroon hover:bg-hackathon-maroon/90 w-full">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
