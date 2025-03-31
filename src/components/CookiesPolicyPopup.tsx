import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookiesPolicyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // Check if cookies have been accepted before
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('remi-cookies-accepted');
    if (!cookiesAccepted) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save in localStorage that cookies were accepted
    localStorage.setItem('remi-cookies-accepted', 'true');
    setClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setClosing(false);
    }, 300);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed z-50 max-w-sm transition-all duration-300 
        ${closing ? 'opacity-0 transform translate-y-4' : 'opacity-100'}
        bottom-4 right-4 md:right-6 md:bottom-6 left-4 md:left-auto`}
    >
      <div className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200/50">
          <div className="flex items-center gap-2">
            <Cookie className="w-5 h-5 text-primary" />
            <h2 className="text-base font-semibold">Cookies Policy</h2>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
          </p>
          
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleAccept}
              className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition duration-300 text-sm"
            >
              Accept All Cookies
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicyPopup;