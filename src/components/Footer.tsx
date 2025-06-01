import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onContactClick: () => void;
}

const Footer = ({ onContactClick }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-primary-light to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding + Legal */}
          <div>
            <img src="/logo.svg" alt="Remi Logo" className="h-10 mb-4" />
            <p className="text-sm leading-relaxed">
              Global B2B Money Remittance Service Provider
            </p>
            <p className="text-xs mt-2">
              “Encore pay” LLP, NBRK registration number No. 01-23-160
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/remi-world" className="hover:underline">
                  REMI World
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/aml-policy" className="hover:underline">
                  AML Policy
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:underline">
                  Compliance
                </Link>
              </li>
              <li>
                <Link to="/pci-dss" className="hover:underline">
                  PCI DSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:joinremi@remirabbit.com" className="text-sm">
                joinremi@remirabbit.com
              </a>
            </div>
            <button
              onClick={onContactClick}
              className="bg-white text-primary mt-4 px-5 py-2 rounded-full hover:bg-gray-100 transition text-sm"
            >
              Contact us →
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-white/70">
          © 2025 REMI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
