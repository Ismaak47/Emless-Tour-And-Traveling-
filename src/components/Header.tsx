import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/b219aa98-6bc6-4316-aa8b-8338713574b1.png" alt="Emless Tour and Travelling Zanzibar" className="w-10 h-10" />
            <span className="text-xl font-semibold text-foreground">Emless Tours</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-safari font-medium">
              Home
            </Link>
            <Link to="/zanzibar-tours" className="text-foreground hover:text-primary transition-safari font-medium">
              Zanzibar Tours
            </Link>
            <Link to="/tanzania-safaris" className="text-foreground hover:text-primary transition-safari font-medium">
              Tanzania Safaris
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-safari font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-safari font-medium">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Link to="/contact">
              <Button variant="safari" size="lg">
                Enquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-foreground hover:text-primary transition-safari">
                Home
              </Link>
              <Link to="/zanzibar-tours" className="block px-4 py-2 text-foreground hover:text-primary transition-safari">
                Zanzibar Tours
              </Link>
              <Link to="/tanzania-safaris" className="block px-4 py-2 text-foreground hover:text-primary transition-safari">
                Tanzania Safaris
              </Link>
              <Link to="/about" className="block px-4 py-2 text-foreground hover:text-primary transition-safari">
                About Us
              </Link>
              <Link to="/contact" className="block px-4 py-2 text-foreground hover:text-primary transition-safari">
                Contact Us
              </Link>
              <div className="px-4 pt-2">
                <Link to="/contact">
                  <Button variant="safari" size="lg" className="w-full">
                    Enquire Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;