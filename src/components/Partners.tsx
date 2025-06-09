import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600">
            Working with industry leaders to provide exceptional service
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-md text-center">
            <img
              src="/PayPorter.jpg"
              alt="PayPorter Logo"
              className="h-16 mx-auto mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">PayPorter</h3>
            <p className="text-gray-600 mb-4">Official Strategic Partner</p>
            <a
              href="https://www.payporter.com.tr/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark font-medium"
            >
              Learn More →
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Interested in becoming a partner?
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;