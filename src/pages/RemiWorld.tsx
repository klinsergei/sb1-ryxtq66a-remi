import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const RemiWorld = () => {
  const onlineCountries = [
    'Argentina', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Ecuador',
    'Guatemala', 'Honduras', 'Kazakhstan', 'Mexico', 'Panama', 'Peru',
    'Turkey', 'Uruguay'
  ];

  const comingSoonByRegion = {
    Europe: [
      'Albania', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 
      'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark', 'Estonia', 
      'Finland', 'France', 'Germany', 'Greece', 'Holland', 'Hungary', 
      'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Lithuania', 'Luxembourg',
      'Macedonia', 'Malta', 'Moldova', 'Montenegro', 'Northern Cyprus', 
      'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 
      'South Cyprus', 'Spain', 'Sweden', 'Switzerland'
    ],
    America: [
      'Antigua and Barbuda', 'Bahamas', 'Bolivia', 'Canada', 
      'Dominican Republic', 'Guyana', 'Haiti', 'Jamaica', 'Nicaragua', 
      'Paraguay', 'Puerto Rico', 'Suriname', 'Trinidad and Tobago', 
      'US Virgin Islands', 'United States of America'
    ],
    Asia: [
      'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Cambodia',
      'Georgia', 'Hong Kong', 'India', 'Indonesia', 'Israel', 'Japan',
      'Jordan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia',
      'Mongolia', 'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines',
      'Qatar', 'Saudi Arabia', 'Singapore', 'Sri Lanka', 'Tajikistan',
      'Thailand', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan',
      'Vietnam', 'Yemen'
    ],
    Africa: [
      'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 
      'Burundi', 'Cameroon', 'Cape Verde', 'Central Africa', 'Chad', 
      'Comoros', 'Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 
      'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 
      'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 
      'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
      'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda',
      'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone',
      'Somalia', 'South Africa', 'Swaziland', 'Tanzania', 'Togo',
      'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
    ],
    Oceania: [
      'Australia', 'Fiji', 'New Zealand', 'Tonga', 'Western Samoa'
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PageHeader
        title="Countries You Can Transfer Money With REMI"
        subtitle="With REMI, you can transfer money throughout more than 250 service points in Turkey and soon - more than 450,000 points worldwide and to more than 160 countries!"
      />

      {/* Countries List */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Online Countries */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Online Countries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {onlineCountries.map((country) => (
                <div key={country} className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-success mr-2 md:mr-3 flex-shrink-0" />
                  <span className="text-gray-800 text-sm md:text-base">{country}</span>
                  <span className="ml-auto text-xs md:text-sm font-medium text-success whitespace-nowrap">ONLINE</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Countries */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Coming Soon</h2>
            {Object.entries(comingSoonByRegion).map(([region, countries]) => (
              <div key={region} className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">{region}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {countries.map((country) => (
                    <div key={country} className="flex items-center p-3 md:p-4 bg-white rounded-lg shadow-sm">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2 md:mr-3 flex-shrink-0" />
                      <span className="text-gray-800 text-sm md:text-base">{country}</span>
                      <span className="ml-auto text-xs md:text-sm font-medium text-primary whitespace-nowrap">Coming Soon</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemiWorld;