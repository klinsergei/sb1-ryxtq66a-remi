import React from 'react';
import { BarChart, TrendingUp, Clock, Download } from 'lucide-react';

const ReportingOverview = () => {
  const features = [
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Real-time Analytics",
      description: "Monitor transaction volumes, success rates, and performance metrics in real-time."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Business Intelligence",
      description: "Gain insights into customer behavior, market trends, and revenue optimization."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Transaction History",
      description: "Access complete transaction histories with advanced filtering and search capabilities."
    },
    {
      icon: <Download className="w-6 h-6 text-primary" />,
      title: "Custom Reports",
      description: "Generate and export customized reports for accounting, compliance, and analysis."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Reporting & Analytics
          </h2>
          <p className="text-xl text-gray-600">
            Make data-driven decisions with comprehensive insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary-light/10 rounded-lg">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportingOverview;