import React, { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup = ({ isOpen, onClose }: ContactFormPopupProps) => {
  const [requestType, setRequestType] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success: boolean, message: string} | null>(null);

  useEffect(() => {
    // Safely modify body overflow
    try {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    } catch (err) {
      console.error('Error setting body overflow:', err);
    }
    
    return () => {
      try {
        document.body.style.overflow = 'unset';
      } catch (err) {
        console.error('Error resetting body overflow:', err);
      }
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitResult(null);
      
      // Simulate email sending
      try {
        // In a real implementation, you would use an email service or API endpoint here
        // to send the form data to info-remi@remirabbit.com
        console.log('Sending email to: info-remi@remirabbit.com');
        console.log({
          requestType,
          name,
          company,
          email,
          message: requestType === 'question' ? message : undefined
        });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // If successful
        setSubmitResult({
          success: true,
          message: 'Your message has been sent successfully! We will contact you soon.'
        });
        
        // Reset form
        setRequestType('');
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
        
        // Close popup after a delay
        setTimeout(() => {
          onClose();
          setSubmitResult(null);
        }, 2000);
      } catch (error) {
        setSubmitResult({
          success: false,
          message: 'There was an error sending your message. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitResult({
        success: false,
        message: 'There was an unexpected error. Please try again.'
      });
    }
  };

  const requestTypes = [
    { value: '', label: 'Select request type' },
    { value: 'connect', label: 'I want to connect' },
    { value: 'service', label: 'I want to offer a service' },
    { value: 'question', label: 'I have a question' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div 
          className="bg-white/30 backdrop-blur-xl w-full max-w-xl rounded-2xl shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">Contact Us</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              type="button"
              aria-label="Close"
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
                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                  Request Type *
                </label>
                <select
                  id="requestType"
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white/30"
                  required
                >
                  {requestTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
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
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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

              {requestType === 'question' && (
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message * ({100 - message.length} characters remaining)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value.slice(0, 100))}
                    rows={4}
                    required
                    maxLength={100}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary resize-none bg-white/30"
                  />
                </div>
              )}

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
                      Sending...
                    </span>
                  ) : (
                    'Contact Me'
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

export default ContactFormPopup;