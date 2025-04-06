import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white" style={{
      backgroundImage: `radial-gradient(at 91.33% 24.40%, hsla(195.86, 100%, 65.88%, 1) 0%, hsla(195.86, 100%, 65.88%, 0) 100%), 
                        radial-gradient(at 81.16% 1.88%, hsla(239.18, 90.98%, 52.15%, 1) 0%, hsla(239.18, 90.98%, 52.15%, 0) 100%),
                        radial-gradient(at 41.25% 33.80%, hsla(195.86, 100%, 65.88%, 1) 0%, hsla(195.86, 100%, 65.88%, 0) 100%),
                        radial-gradient(at 5.50% 91.87%, hsla(147.23, 83.58%, 61.76%, 1) 0%, hsla(147.23, 83.58%, 61.76%, 0) 100%),
                        radial-gradient(at 35.63% 34.66%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%)`
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src="/remi-logo.svg" alt="REMI" className="h-12 w-12" />
            </div>
            <p className="mt-4 text-white/80">
              Global B2B Money Remittance Service Provider
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/remi-world" className="text-white/80 hover:text-white">REMI World</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"><Link to="/legal" className="text-white hover:text-white">Legal</Link></h3>
            <ul className="space-y-2">
              <li><Link to="/legal/privacy-policy" className="text-white/80 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/legal/aml-policy" className="text-white/80 hover:text-white">AML Policy</Link></li>
              <li><Link to="/compliance" className="text-white/80 hover:text-white">Compliance</Link></li>
              <li><Link to="/pci-dss" className="text-white/80 hover:text-white">PCI DSS</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-white/80">
                <Mail className="h-5 w-5 mr-2" />
                joinremi@remirabbit.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} REMI. All rights reserved.</p>
        </div>
      </div>

      <div className="w-full bg-white py-4 flex flex-wrap items-center justify-center gap-6">
        <img src="/visa.png" alt="Visa" className="h-8 object-contain" />
        <img src="/mastercard.png" alt="Mastercard" className="h-8 object-contain" />
        <img src="/troy.png" alt="Troy" className="h-8 object-contain" />
        <img src="/jcb.png" alt="JCB" className="h-8 object-contain" />
        <img src="/unionpay.png" alt="UnionPay" className="h-8 object-contain" />
        <img src="/bank-transfer.png" alt="Bank Transfer" className="h-8 object-contain" />
        <img src="/havale.png" alt="Havale" className="h-8 object-contain" />
      </div>
    </footer>
  );
};

export default Footer;
