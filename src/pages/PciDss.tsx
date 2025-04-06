import React, { useEffect } from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const PciDss = () => {
  useEffect(() => {
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', disableContextMenu);
    return () => document.removeEventListener('contextmenu', disableContextMenu);
  }, []);

  return (
    <div className="flex flex-col select-none">
      {/* Hero Section */}
      <PageHeader
        title="PCI DSS Certification"
        subtitle="Ensuring the highest level of payment security"
      />

      {/* Certificate Display Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">PCI DSS Compliance</h2>
            <p className="text-gray-600 text-lg mb-8">
              REMI maintains Payment Card Industry Data Security Standard (PCI DSS) certification, 
              the highest level of compliance for organizations that process payment card data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Secure network infrastructure with advanced encryption</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Regular security assessments and vulnerability scans</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Robust access control measures and authentication protocols</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-success mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Continuous monitoring and incident response procedures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Embed */}
          <div className="bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">PCI DSS Certificate</h3>
              <div className="bg-white p-2 rounded border border-gray-200 flex items-center justify-center min-h-[500px]">
                <iframe
                  src="/docs/psi-dss.pdf#toolbar=0"
                  title="PCI DSS Certificate"
                  className="w-full h-[500px] pointer-events-none"
                  sandbox=""
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Our PCI DSS certification demonstrates our commitment to maintaining the highest security standards
              for handling sensitive payment information, giving our customers and partners peace of mind.
            </p>
            <p className="text-gray-600">
              The certification process involves rigorous assessments by qualified security assessors and
              compliance with over 300 security controls designed to protect cardholder data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PciDss;
