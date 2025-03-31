import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const [requestType, setRequestType] = useState('');
  const [message, setMessage] = useState('');

  const requestTypes = [
    { value: '', label: 'Select request type' },
    { value: 'connect', label: 'I want to connect' },
    { value: 'service', label: 'I want to offer a service' },
    { value: 'question', label: 'I have a question' }
  ];

  return (
    <section className="py-20 bg-primary-light/10" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with our team to learn more about our services</p>
        </div>
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
              Request Type *
            </label>
            <select
              id="requestType"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
              className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary bg-white"
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
                required
                className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                required
                className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
              required
              className="block w-full h-14 rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
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
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary resize-none"
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white h-14 rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;