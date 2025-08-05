import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img className="h-10 w-28 rounded-xl" src="/logo.jpg" alt="logo" />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Accelerating app growth through advanced user acquisition, performance marketing, and AI-powered optimization.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/appladder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/appladder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/appladder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/appladder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/user-acquisition"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  User Acquisition
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/retargeting"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Retargeting & Re-engagement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/branding"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Branding
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <Link
                  to="/careers" // Ensure you have this route or external link
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <a
                  href="mailto:hello@appladder.us"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  hello@appladder.us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <a
                  href="tel:+15551234567"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">447 Broadway 2ND FL, New York, NY 10013</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm select-none">
              © 2025 Appladder. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
