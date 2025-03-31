import React from 'react';
import { Lock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              REMI ("we", "our", or "us") is committed to protecting the privacy and confidentiality of your personal information. This Privacy Policy outlines how we collect, use, store, and safeguard your information.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Collection:</h2>
              <p className="text-gray-700">
                We collect personal data, such as name, contact details, and transaction details necessary for providing our payment processing services.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Use of Information:</h2>
              <p className="text-gray-700">
                Your data is used exclusively for processing payments, enhancing our services, ensuring compliance with legal obligations, and improving customer experience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Sharing:</h2>
              <p className="text-gray-700">
                We may share your personal data with trusted third-party partners solely to facilitate our services and comply with regulatory obligations.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Security Measures:</h2>
              <p className="text-gray-700">
                We implement strict security protocols to protect your data from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights:</h2>
              <p className="text-gray-700">
                You have the right to access, update, or request deletion of your personal information at any time by contacting us directly.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Updates:</h2>
              <p className="text-gray-700">
                This policy may be updated periodically. Any significant changes will be communicated clearly on our website.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700">
                For any privacy-related questions, contact us at <a href="mailto:privacy@remirabbit.com" className="text-primary">privacy@remirabbit.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;