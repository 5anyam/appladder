import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTopNavLink from "./ScrollToTopNavLink";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img className="h-10 w-42 rounded-xl" src="/AppladderLogo.png" alt="logo" />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Accelerating app growth with smart user acquisition and AI-driven optimization.
            </p>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/app-ladder/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
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
                <ScrollToTopNavLink
                  to="/user-acquisition"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  User Acquisition
                </ScrollToTopNavLink>
              </li>
              <li>
                <ScrollToTopNavLink
                  to="/retargeting"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Retargeting & Re-engagement
                </ScrollToTopNavLink>
              </li>
              <li>
                <ScrollToTopNavLink
                  to="/branding"
                  className={({ isActive }) => 
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Branding
                </ScrollToTopNavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <ScrollToTopNavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  About Us
                </ScrollToTopNavLink>
              </li>
              <li>
                <Link
                  to="" // Ensure you have this route or external link
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <ScrollToTopNavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-slate-300 hover:text-white transition-colors duration-300 ${
                      isActive ? "text-[#00F0FF]" : ""
                    }`
                  }
                >
                  Contact
                </ScrollToTopNavLink>
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
                  sales@appladder.us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <a
                  href="https://wa.me/+12177735600"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                >
                  +121-7773-5600
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
                to=""
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to=""
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to=""
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
