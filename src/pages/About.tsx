import React from 'react';
import { Building, Users, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHeader
        title="About REMI"
        subtitle="Leading the future of global money remittance"
      />

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Official Partners</h2>
            <p className="text-gray-600">Working with industry leaders to provide the best service</p>
          </div>
          <div className="flex justify-center">
            <a href="https://www.payporter.com.tr/tr" target="_blank" rel="noopener noreferrer" className="w-full max-w-md p-6 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">PayPorter</h3>
              <p className="text-gray-600">Official Strategic Partner</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What is REMI?</h3>
              <p className="text-gray-600">REMI is a global B2B money remittance service provider that enables businesses to send and receive international payments securely and efficiently.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How secure are your services?</h3>
              <p className="text-gray-600">We maintain the highest security standards with PCI DSS compliance and implement robust fraud prevention measures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Which countries do you support?</h3>
              <p className="text-gray-600">We operate in over 10 countries worldwide. Visit our REMI World page to see our full coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600">Meet the people behind REMI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
          </div>
          <div className="text-center mt-12">
            <Link to="/careers" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">
              Join our team <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;