import React from 'react';
import { Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const AmlPolicy = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Anti-Money Laundering Policy"
        subtitle="Our commitment to combating financial crime"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              REMI is dedicated to combating money laundering, fraud, and terrorist financing. Our Anti-Money Laundering (AML) Policy ensures compliance with applicable laws and regulations.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Customer Verification (KYC):</h2>
              <p className="text-gray-700">
                We conduct thorough Know Your Customer (KYC) procedures, verifying the identity of all clients to prevent misuse of our services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Transaction Monitoring:</h2>
              <p className="text-gray-700">
                We actively monitor transactions for suspicious activities or unusual patterns, promptly reporting any such activities to relevant authorities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Risk Assessment:</h2>
              <p className="text-gray-700">
                Regular risk assessments are conducted to identify and mitigate AML risks associated with our payment processing services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Employee Training:</h2>
              <p className="text-gray-700">
                Our employees receive regular training on AML practices and compliance to ensure awareness and adherence to regulatory requirements.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Reporting:</h2>
              <p className="text-gray-700">
                We maintain clear reporting channels and cooperate fully with financial regulators and law enforcement agencies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Compliance Review:</h2>
              <p className="text-gray-700">
                Our AML policy and procedures are reviewed and updated regularly to reflect changes in legislation and industry standards.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700">
                For further details or AML-related inquiries, contact <a href="mailto:compliance@remirabbit.com" className="text-primary">compliance@remirabbit.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmlPolicy;