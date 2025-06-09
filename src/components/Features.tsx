import React from 'react';
import { Shield, Zap, Globe, BarChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Payments",
      description: "Bank-grade security with PCI DSS compliance and advanced fraud protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Instant Processing",
      description: "Real-time payment processing with instant confirmation and settlement."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Send and receive payments across 160+ countries worldwide."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Smart Analytics",
      description: "Comprehensive reporting and analytics to track your payment flows."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose REMI?
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed for modern businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;