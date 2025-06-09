import React from 'react';
import { MapPin, Users, Building } from 'lucide-react';

const GlobalPresence = () => {
  const stats = [
    { icon: <MapPin className="w-8 h-8 text-primary" />, number: "160+", label: "Countries" },
    { icon: <Building className="w-8 h-8 text-primary" />, number: "450K+", label: "Service Points" },
    { icon: <Users className="w-8 h-8 text-primary" />, number: "1M+", label: "Satisfied Customers" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600">
            Connecting businesses worldwide through our extensive network
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-gray-100 rounded-lg p-8">
            <img 
              src="/world-map.svg" 
              alt="Global Coverage Map" 
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;