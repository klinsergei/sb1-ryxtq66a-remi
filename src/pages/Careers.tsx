import React, { useState } from 'react';
import { Briefcase, Heart, Globe, Star } from 'lucide-react';
import CareerFormPopup from '../components/CareerFormPopup';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  const [isCareerFormOpen, setIsCareerFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setIsCareerFormOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHeader
        title="Join Our Team"
        subtitle="Help us shape the future of global money remittance"
      />

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join REMI?</h2>
            <p className="text-gray-600">Be part of a team that's revolutionizing global finance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-gray-600">Make a difference in how the world moves money</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Work with cutting-edge technology</p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Benefits</h3>
              <p className="text-gray-600">Competitive compensation and benefits package</p>
            </div>
            <div className="text-center p-6">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Opportunities for career development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600">Join our growing team</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Development Manager</h3>
                  <p className="text-gray-600 mb-4">
                    Drive strategic partnerships, identify new market opportunities, and develop business growth plans for our global remittance platform.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light/20 text-primary">
                      Full-time
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-light/20 text-success">
                      Remote
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleApplyClick('business-development-manager')}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition duration-300 whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Account Manager</h3>
                  <p className="text-gray-600 mb-4">
                    Manage relationships with major corporate clients, provide exceptional service, and identify growth opportunities within existing accounts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-light/20 text-primary">
                      Full-time
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success-light/20 text-success">
                      Remote
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleApplyClick('key-account-manager')}
                  className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition duration-300 whitespace-nowrap"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Application Form Popup */}
      <CareerFormPopup
        isOpen={isCareerFormOpen}
        onClose={() => setIsCareerFormOpen(false)}
        defaultPosition={selectedPosition}
      />
    </div>
  );
};

export default Careers;