import React, { useState, useEffect } from 'react';
import { Briefcase, X } from 'lucide-react';

interface CareerFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPosition?: string;
}

const CareerFormPopup = ({ isOpen, onClose, defaultPosition }: CareerFormPopupProps) => {
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [cvLink, setCvLink] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean, message: string} | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (defaultPosition) {
        setPosition(defaultPosition);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, defaultPosition]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      console.log('Sending application to: info-remi@remirabbit.com');
      console.log({
        position,
        name,
        cvLink,
        email
      });

      await new Promise(resolve => setTimeout(resolve, 800));

      setSubmitResult({
        success: true,
        message: 'Your application has been submitted successfully! We will contact you soon.'
      });

      setPosition(defaultPosition || '');
      setName('');
      setCvLink('');
      setEmail('');

      setTimeout(() => {
        onClose();
        setSubmitResult(null);
      }, 2000);
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'There was an error submitting your application. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const positions = [
    { value: '', label: 'Select position' },
    { value: 'business-development-manager', label: 'Business Development Manager' },
    { value: 'key-account-manager', label: 'Key Account Manager' },
    { value: 'other', label: 'Other position' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="bg-white/30 backdrop-blur-xl w-full max-w-xl rounded-2xl shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">My career with REMI</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitResult ? (
            <div className={`p-6 text-center ${submitResult.success ? 'text-success' : 'text-secondary'}`}>
              <p className="text-lg font-medium">{submitResult.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <select
                  id="position"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30"
                  required
                >
                  {positions.map((pos) => (
                    <option key={pos.value} value={pos.value}>
                      {pos.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="cvLink" className="block text-sm font-medium text-gray-700 mb-2">
                    Link to my CV *
                  </label>
                  <input
                    type="url"
                    id="cvLink"
                    value={cvLink}
                    onChange={(e) => setCvLink(e.target.value)}
                    placeholder="https://"
                    required
                    className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white h-14 rounded-lg font-semibold hover:bg-primary-dark transition duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Apply Now'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerFormPopup;
