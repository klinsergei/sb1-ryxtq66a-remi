import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface CallToActionProps {
  onContactClick: () => void;
}

const CallToAction = ({ onContactClick }: CallToActionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Payment Infrastructure?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Join thousands of businesses who trust REMI for their global payment needs.
          Get started today and experience the future of money transfer.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            <Mail className="mr-2 w-5 h-5" />
            Contact Sales
          </button>
          <a
            href="mailto:joinremi@remirabbit.com"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-8 text-white/80">
          <p>Questions? Email us at <a href="mailto:joinremi@remirabbit.com" className="underline">joinremi@remirabbit.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;