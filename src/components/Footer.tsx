import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-footer text-footer-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/b219aa98-6bc6-4316-aa8b-8338713574b1.png" alt="Emless Tour and Travelling Zanzibar" className="w-10 h-10" />
            <span className="text-xl font-bold">Emless Tours</span>
          </div>
          <p className="text-footer-foreground/70 leading-relaxed">
            Your trusted partner for authentic African safari experiences. Discover the wild beauty of East Africa with our expert guides and carefully crafted adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Safari & Tours", path: "/" },
              { name: "Countries & Parks", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
              { name: "Travel Proposal", path: "/contact" },
              { name: "Best Price Guarantee", path: "/about" }
            ].map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-footer-foreground/70 hover:text-footer-hover transition-safari">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Destinations</h3>
          <ul className="space-y-2">
            {[{
              name: "Kenya Safaris",
              path: "/kenya-safaris"
            }, {
              name: "Tanzania Safaris",
              path: "/tanzania-safaris"
            }, {
              name: "Zanzibar Beach",
              path: "/zanzibar-tours"
            }, {
              name: "Mountain Climbing",
              path: "/tanzania-safaris"
            }].map(dest => <li key={dest.name}>
              <Link to={dest.path} className="text-footer-foreground/70 hover:text-footer-hover transition-safari">
                {dest.name}
              </Link>
            </li>)}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <span className="text-footer-foreground/70 text-sm">
                Stone Town, Zanzibar
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-footer-foreground" />
              <span className="text-footer-foreground/70 text-sm">
                <a href="tel:+255774071713" className="hover:text-footer-hover transition-safari">+255 774 071 713</a>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-footer-foreground" />
              <span className="text-footer-foreground/70 text-sm">
                <a href="tel:+255777834688" className="hover:text-footer-hover transition-safari">+255 777 834 688</a>
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-footer-foreground" />
              <span className="text-footer-foreground/70 text-sm">info@emlesstours.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4">
            <a href="https://www.facebook.com/profile.php?id=61579875351304&rdid=RVdbUEL9sTvpRGRe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CofecQqb8%2F#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-footer-foreground/10 rounded-full flex items-center justify-center hover:bg-footer-hover transition-safari">
              <Facebook className="w-5 h-5 text-footer-foreground hover:text-footer" />
            </a>
            <a href="https://www.instagram.com/emless_tours?igsh=MW1kZHdqeGM5cDBrbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-footer-foreground/10 rounded-full flex items-center justify-center hover:bg-footer-hover transition-safari">
              <Instagram className="w-5 h-5 text-footer-foreground hover:text-footer" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-footer-foreground/10 rounded-full flex items-center justify-center hover:bg-footer-hover transition-safari">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-footer-foreground hover:text-footer">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.61a7 7 0 0 0 3.41 1.59v-4.51Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/20 mt-12 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-footer-foreground/60 text-sm">© 2025 Emless Tours and Traveling. All rights reserved.</p>
          <div className="hidden md:flex justify-center">
            <img src="/lovable-uploads/530ecb66-3936-4e4c-953c-a8f06a8b7dac.png" alt="ZATO Member" className="h-32 w-auto" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-footer-foreground/60 hover:text-footer-hover transition-safari">Privacy Policy</a>
              <a href="#" className="text-footer-foreground/60 hover:text-footer-hover transition-safari">Terms of Service</a>
              <a href="#" className="text-footer-foreground/60 hover:text-footer-hover transition-safari">Cookie Policy</a>
            </div>
            <img src="/images/certification-logo.jpg" alt="Certification Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;