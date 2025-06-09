import React from 'react';
import { Layers, Cpu, Shield, Headphones } from 'lucide-react';

const PlatformHighlights = () => {
  const highlights = [
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "API-First Architecture",
      description: "Flexible integration with comprehensive RESTful APIs and webhooks for seamless connectivity."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Smart Routing",
      description: "Intelligent payment routing to optimize success rates and reduce costs across multiple providers."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Risk Management",
      description: "Advanced fraud detection and risk assessment tools to protect your business and customers."
    },
    {
      icon: <Headphones className="w-12 h-12 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and dedicated account management for enterprise clients."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Platform Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Built for scale, designed for performance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{highlight.title}</h3>
              <p className="text-gray-600 text-lg">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHighlights;