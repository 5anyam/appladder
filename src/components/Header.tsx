// ── Updated Header — Login & Sign Up alag buttons ─────────────────
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home",             to: "/" },
  { name: "About",            to: "/about" },
  { name: "User Acquisition", to: "/user-acquisition" },
  { name: "Retargeting",      to: "/retargeting" },
  { name: "Branding",         to: "/branding" },
  { name: "Contact",          to: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50 border-b border-border shadow-glow">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" onClick={handleNavClick} className="flex items-center">
            <div className="h-10 bg-slate-50 rounded-xl flex items-center justify-center">
              <img className="h-10 w-28 lg:w-full" src="./AppladderLogo.png" alt="Appladder Logo" />
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors duration-200 hover:text-primary ${
                    isActive ? "text-primary" : "text-blue-800"
                  }`
                }
                end={item.to === "/"}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — Login | Sign Up (alag) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Login — outlined */}
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap"
            >
              Login
            </NavLink>

            {/* Sign Up — filled, dropdown style with both portals */}
            <div className="flex items-center gap-2">
              <NavLink
                to="/advertiser-signup"
                className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-primary text-white shadow-glow hover:opacity-90 hover:shadow-brand transition-all duration-200 whitespace-nowrap"
              >
                Advertiser Sign Up
              </NavLink>
              <NavLink
                to="/publisher-signup"
                className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-violet-500 text-violet-600 bg-transparent hover:bg-violet-600 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                Publisher Sign Up
              </NavLink>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary/40"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Nav Panel */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in-up bg-background/90 backdrop-blur-sm border-t border-border">
            <ul className="flex flex-col gap-4 px-4 text-center">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `block text-base font-semibold transition-colors duration-200 hover:text-primary ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`
                    }
                    end={item.to === "/"}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile — Login + Signups */}
              <li className="pt-4 border-t border-border flex flex-col gap-3">
                <NavLink
                  to="/login"
                  onClick={handleNavClick}
                  className="w-full py-2.5 rounded-xl border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all text-center"
                >
                  🔐 Login
                </NavLink>
                <NavLink
                  to="/advertiser-signup"
                  onClick={handleNavClick}
                  className="w-full py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-semibold shadow-glow hover:opacity-90 transition-all text-center"
                >
                  🎯 Advertiser Sign Up
                </NavLink>
                <NavLink
                  to="/publisher-signup"
                  onClick={handleNavClick}
                  className="w-full py-2.5 rounded-xl border-2 border-violet-500 text-violet-600 text-sm font-semibold hover:bg-violet-600 hover:text-white transition-all text-center"
                >
                  🌐 Publisher Sign Up
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
