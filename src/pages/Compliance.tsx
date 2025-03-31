import React from 'react';
import { Scale, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Compliance = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHeader
        title="Compliance"
        subtitle="Meeting the highest standards of regulatory requirements"
      />

      {/* Compliance Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Compliance Framework</h2>
            <p className="text-gray-600 text-lg">
              At REMI, we are committed to maintaining the highest standards of compliance across our global operations.
              Our compliance framework is designed to ensure we meet or exceed all regulatory requirements in the jurisdictions where we operate.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-success mr-3" />
                International Standards
              </h3>
              <p className="text-gray-700">
                We adhere to international standards for financial transactions, data protection, and anti-money laundering practices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-success mr-3" />
                Regulatory Compliance
              </h3>
              <p className="text-gray-700">
                Our operations comply with all relevant financial regulations, including Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-success mr-3" />
                Regular Audits
              </h3>
              <p className="text-gray-700">
                We conduct regular internal and external audits to ensure ongoing compliance with all applicable regulations and standards.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-success mr-3" />
                Staff Training
              </h3>
              <p className="text-gray-700">
                All our staff undergo regular compliance training to ensure they are up-to-date with the latest regulatory requirements and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Certifications</h2>
            <p className="text-gray-600 text-lg">
              We maintain various certifications that demonstrate our commitment to meeting industry standards and regulatory requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-light/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PCI DSS</h3>
              <p className="text-gray-600 mb-4">
                The highest level of payment card industry data security standards.
              </p>
              <Link to="/pci-dss" className="text-primary hover:text-primary-dark">Learn more</Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-light/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO 27001</h3>
              <p className="text-gray-600">
                International standard for information security management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary-light/10 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">
                Fully compliant with General Data Protection Regulation requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;