import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ExampleWithModalButton } from "./UniversalModal"; // Adjust path accordingly
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", to: "/" },
  { name: "User Acquisition", to: "/user-acquisition" },
  { name: "Retargeting", to: "/retargeting" },
  { name: "Branding", to: "/branding" },
  { name: "Programmatic UA", to: "/programmatic" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // To close mobile menu on navigation
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <div className="text-white text-lg font-bold select-none">A</div>
            </div>
            <span className="text-xl font-bold gradient-text select-none cursor-pointer">
              Appladder
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                    isActive ? "text-[#00F0FF]" : "text-muted-foreground"
                  }`
                }
                end={item.to === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ExampleWithModalButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#00F0FF]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in-up bg-background/90 backdrop-blur-sm border-t border-border">
            <ul className="flex flex-col gap-4 px-4 text-center">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `block text-lg font-semibold transition-colors duration-200 hover:text-foreground ${
                        isActive ? "text-[#00F0FF]" : "text-muted-foreground"
                      }`
                    }
                    end={item.to === "/"}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li className="pt-4 border-t border-border">
                <ExampleWithModalButton />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
