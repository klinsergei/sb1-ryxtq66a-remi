import React, { useState } from 'react';
import { Globe, Shield, Clock, MapPin, Code, MessageSquare, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onContactClick: () => void;
}

const Home = ({ onContactClick }: HomeProps) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  const images = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&w=1920&q=80",
      title: "Global Reach",
      subtitle: "Up to 200 countries and territories"
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80",
      title: "Advanced Technology",
      subtitle: "Innovative Solutions for Your Business"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
      title: "Partnership",
      subtitle: "Trusted by Leading Companies"
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section - with white background, no gradient */}
      <section className="min-h-[100vh] flex items-center pt-32 md:pt-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
          <div className="text-sm font-medium text-primary-light mb-4 md:mb-8">
            CONNECTING BUSINESSES WORLDWIDE
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
                Empower Your Business with Global Remittance Solutions
              </h1>
              <p className="text-gray-600 mb-6 md:mb-8">
                Experience seamless international money transfers with Remi's advanced technology and extensive global reach.
              </p>

              <div className="bg-primary-light/10 rounded-2xl p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-primary" />
                    <span className="font-medium">GLOBAL COVERAGE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-medium">SECURE TRANSACTIONS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <span className="font-medium">FAST PROCESSING</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={onContactClick}
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-sm md:text-base"
                >
                  CONTACT US →
                </button>
                <Link
                  to="/about"
                  className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-sm md:text-base"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex gap-2 h-[300px] md:h-[400px] lg:h-[500px]">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out cursor-default
                      ${activeImage === index ? 'w-full' : 'w-[72px]'}`}
                    onMouseEnter={() => setActiveImage(index)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                      <h3 className="text-lg md:text-xl font-semibold mb-1">{image.title}</h3>
                      <p className={`text-sm md:text-base transition-opacity duration-300 ${activeImage === index ? 'opacity-100' : 'opacity-0'}`}>
                        {image.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - white background */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-primary-light mb-4">Streamline Your Remittance Operations</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how Remi's innovative technology and global network can optimize your money transfer processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Access to up to 200 countries and territories for seamless transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <Cpu className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge solutions for fast, secure, and reliable money transfers.</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance & Security</h3>
              <p className="text-gray-600">Robust measures to ensure safe and compliant transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - white background */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Global Remittance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join businesses worldwide leveraging Remi's technology for efficient and secure money transfers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-primary-light/10 p-6 md:p-8 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-lg md:text-xl font-semibold mb-2">Payment methods supported</div>
              <p className="text-gray-600">Expanding our global reach every day.</p>
            </div>
            <div className="bg-primary text-white p-6 md:p-8 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg md:text-xl font-semibold mb-2">Transactions Processed</div>
              <p className="text-primary-light">Reliable and secure transfers worldwide.</p>
            </div>
            <div className="bg-primary-light/10 p-6 md:p-8 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
              <div className="text-lg md:text-xl font-semibold mb-2">Trusted Partners</div>
              <p className="text-gray-600">Collaborating with leading money transfer companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - light gray background */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="text-primary-light mb-4">Innovative Solutions for Your Business</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Remittance Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remi offers a comprehensive suite of tools and services to optimize your money transfer operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Monitor transactions in real-time for enhanced transparency.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customizable API</h3>
              <p className="text-gray-600">Integrate seamlessly with your existing systems.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 assistance to ensure smooth operations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Grow your business with our flexible and scalable services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;