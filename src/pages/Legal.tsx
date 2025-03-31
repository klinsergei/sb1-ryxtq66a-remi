import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Scale } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Legal = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHeader
        title="Legal Information"
        subtitle="Transparency and compliance are our top priorities"
      />

      {/* Legal Team Statement */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          </div>
          <div className="bg-primary-light/10 p-8 rounded-xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At REMI, our legal and compliance departments work tirelessly to make our processes as convenient and efficient as possible while maintaining the highest standards of regulatory compliance. We strive to create a secure environment for all your transactions, ensuring both speed and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Learn about how we collect, use, and protect your personal information.
              </p>
              <Link to="/legal/privacy-policy" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                Read Privacy Policy
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <FileText className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">AML Policy</h2>
              <p className="text-gray-600 mb-6">
                Our commitment to preventing money laundering and financial crime.
              </p>
              <Link to="/legal/aml-policy" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                Read AML Policy
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Scale className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Compliance</h2>
              <p className="text-gray-600 mb-6">
                Information about our regulatory compliance and industry standards.
              </p>
              <Link to="/compliance" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                View Compliance
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Lock className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">PCI DSS</h2>
              <p className="text-gray-600 mb-6">
                Details about our payment security standards and certifications.
              </p>
              <Link to="/pci-dss" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors">
                View Certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies Policy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cookies Policy</h2>
            <p className="text-gray-600">Understanding how we use cookies on our website</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">What are cookies?</h3>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience and understand how visitors use our site.
            </p>
            <h3 className="text-xl font-semibold mb-4">How we use cookies</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>To remember your preferences and settings</li>
              <li>To improve site navigation</li>
              <li>To analyze how our site is used</li>
              <li>To help with our security and fraud prevention efforts</li>
            </ul>
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition duration-300">
              Accept All Cookies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;