import { NavLink } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const debouncedHandleScroll = debounce(handleScroll, 100); // Custom debounce for performance
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
      { path: '/news', label: 'News' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <NavLink
            to="/"
            className="flex items-center space-x-2"
            aria-label="Go to homepage"
          >
            <Star className="h-6 w-6 text-purple-400" />
            <span className="text-white font-bold text-xl">AstronomyBU</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `
                  relative text-white transition-colors duration-300
                  hover:text-purple-400 ${isActive ? 'text-purple-400' : ''}
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-full after:h-0.5 after:bg-purple-400 
                  after:transform after:scale-x-0 after:transition-transform 
                  after:duration-300 hover:after:scale-x-100
                  ${isActive ? 'after:scale-x-100' : ''}
                `}
                aria-label={`Navigate to ${label}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md py-4 px-4 rounded-lg mt-2">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `
                  block py-2 text-white text-lg transition-colors duration-300
                  hover:text-purple-400 ${isActive ? 'text-purple-400' : ''}
                `}
                aria-label={`Navigate to ${label}`}
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Custom debounce function
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default Navbar;
