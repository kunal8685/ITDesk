import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'Courses',
    path: '/courses',
    isDropdown: true,
    basePath: '/courses',
    categories: {
      Mechanical: 'mechanical',
      Electrical: 'electrical',
      Civil: 'civil',
    },
  },
  {
    name: 'Advance Courses',
    path: '/advanced-courses',
    isDropdown: true,
    basePath: '/advanced-courses',
    categories: {
      'Domain Courses': 'domain-courses',
      'Graphic Design': 'graphic-design',
    },
  },
  { name: 'About Us', path: '/about' },
  { name: 'Placements', path: '/placements' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.relative.group') // Allow clicks within main nav items
      ) {
        setActiveDropdown(null);
        // Do not close mobile menu on outside click directly, only on link click
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAllDropdowns(); // Close menus on route change
  }, [location]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeAllDropdowns}>
          <img src="/placeholder-logo.png" alt="CADDESK PCMC Logo" className="h-10 mr-2" /> {/* Replace with your logo */}
          <span className="text-xl font-bold text-brand-blue">CADDESK PCMC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((item) => (
            <div key={item.name} className="relative group">
              {item.isDropdown ? (
                <>
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:text-brand-orange text-lg font-semibold px-0 py-0 h-auto"
                    onClick={() => handleDropdownToggle(item.name)}
                  >
                    {item.name} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </Button>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10"
                      >
                        {Object.keys(item.categories).map((category) => (
                          <React.Fragment key={category}>
                            <Link
                              to={`${item.basePath}/${category.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-brand-orange focus:outline-none focus:bg-gray-100 transition-colors duration-150"
                              onClick={closeAllDropdowns}
                            >
                              {category}
                            </Link>
                          </React.Fragment>
                        ))}
                        <Link
                          to={item.basePath}
                          className="block w-full text-center px-4 py-2 mt-2 bg-brand-blue text-white rounded-b-md hover:bg-brand-blue-dark transition-colors duration-150"
                          onClick={closeAllDropdowns}
                        >
                          Show all {item.name}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-brand-orange text-lg font-semibold transition-colors duration-150"
                  onClick={closeAllDropdowns}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 pb-4 shadow-inner"
          >
            <div className="flex flex-col items-start px-4">
              {navLinks.map((item) => (
                <React.Fragment key={item.name}>
                  {item.isDropdown ? (
                    <div className="w-full">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-left py-3 text-gray-700 hover:text-brand-orange text-lg font-semibold"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name} <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </Button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-md shadow-inner py-1 mb-2 ml-4 border-l-2 border-brand-blue"
                          >
                            {Object.keys(item.categories).map((category) => (
                              <Link
                                key={category}
                                to={`${item.basePath}/${category.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-brand-orange transition-colors duration-150"
                                onClick={closeAllDropdowns}
                              >
                                {category}
                              </Link>
                            ))}
                            <Link
                              to={item.basePath}
                              className="block text-center px-6 py-2 mt-2 bg-brand-blue text-white rounded-b-md hover:bg-brand-blue-dark transition-colors duration-150"
                              onClick={closeAllDropdowns}
                            >
                              Show all {item.name}
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block w-full text-left py-3 text-gray-700 hover:text-brand-orange text-lg font-semibold transition-colors duration-150"
                      onClick={closeAllDropdowns}
                    >
                      {item.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;