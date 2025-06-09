import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Features from '../components/Features';
import GlobalPresence from '../components/GlobalPresence';
import ReportingOverview from '../components/ReportingOverview';
import PaymentMethods from '../components/PaymentMethods';
import PlatformHighlights from '../components/PlatformHighlights';
import Partners from '../components/Partners';
import CallToAction from '../components/CallToAction';

interface HomeProps {
  onContactClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onContactClick }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
            Global Payment Infrastructure <br className="hidden sm:inline" /> for Gaming & Fintech
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-8">
            REMI powers global pay-ins and withdrawals with flexible routing, real-time reporting, and smart risk tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark transition duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <Link
              to="/remi-world"
              className="inline-flex items-center justify-center px-6 py-3 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition duration-300"
            >
              Explore REMI World
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Global Presence */}
      <GlobalPresence />

      {/* Reporting Tools */}
      <ReportingOverview />

      {/* Payment Methods */}
      <PaymentMethods />

      {/* Platform Highlights */}
      <PlatformHighlights />

      {/* Trusted Partners */}
      <Partners />

      {/* CTA */}
      <CallToAction onContactClick={onContactClick} />
    </div>
  );
};

export default Home;