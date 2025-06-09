import React from 'react';
import { CreditCard, Building, Smartphone, Globe } from 'lucide-react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Card Payments",
      description: "Accept all major credit and debit cards worldwide",
      logos: ["/visa.png", "/mastercard.png", "/jcb.png", "/unionpay.png"]
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Bank Transfers",
      description: "Direct bank-to-bank transfers and wire payments",
      logos: ["/bank-transfer.png", "/havale.png", "/troy.png"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Digital Wallets",
      description: "Mobile payments and digital wallet integration",
      logos: []
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Local Methods",
      description: "Region-specific payment methods for global reach",
      logos: []
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Methods
          </h2>
          <p className="text-xl text-gray-600">
            Support for all popular payment methods and local preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              {method.logos.length > 0 && (
                <div className="flex justify-center space-x-2">
                  {method.logos.map((logo, logoIndex) => (
                    <img
                      key={logoIndex}
                      src={logo}
                      alt={`Payment method ${logoIndex + 1}`}
                      className="h-8 w-auto object-contain"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;