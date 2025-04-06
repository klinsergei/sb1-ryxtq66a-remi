import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-effect shadow-lg' : 'glass-effect'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center">
              <img src="/remi-logo.svg" alt="REMI" className="h-8 w-auto" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-800 hover:text-primary font-medium transition-colors">Home</Link>
              <Link to="/remi-world" className="text-gray-800 hover:text-primary font-medium transition-colors">REMI World</Link>
              <Link to="/about" className="text-gray-800 hover:text-primary font-medium transition-colors">About</Link>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onContactClick}
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
              >
                Contact us <span className="ml-2">→</span>
              </button>

              <button
                className="md:hidden inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-auto">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div
              ref={menuRef}
              className="glass-effect w-full max-w-xl rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: 'calc(100vh - 40px)', overflowY: 'auto' }}
            >
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200/50 glass-effect z-10">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <button
                  onClick={() => handleNavigate('/')}
                  className="block w-full h-14 rounded-lg border border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30 text-left px-4 font-medium text-gray-800 hover:bg-white/50 transition-colors"
                >
                  Home
                </button>
                
                <button
                  onClick={() => handleNavigate('/remi-world')}
                  className="block w-full h-14 rounded-lg border border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30 text-left px-4 font-medium text-gray-800 hover:bg-white/50 transition-colors"
                >
                  REMI World
                </button>

                <button
                  onClick={() => handleNavigate('/about')}
                  className="block w-full h-14 rounded-lg border border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30 text-left px-4 font-medium text-gray-800 hover:bg-white/50 transition-colors"
                >
                  About
                </button>

                <button
                  onClick={() => handleNavigate('/careers')}
                  className="block w-full h-14 rounded-lg border border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30 text-left px-4 font-medium text-gray-800 hover:bg-white/50 transition-colors"
                >
                  Careers
                </button>

                <button
                  onClick={() => handleNavigate('/legal')}
                  className="block w-full h-14 rounded-lg border border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30 text-left px-4 font-medium text-gray-800 hover:bg-white/50 transition-colors"
                >
                  Legal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
