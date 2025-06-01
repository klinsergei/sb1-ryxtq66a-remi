import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
        {subtitle && <p className="text-lg sm:text-xl text-gray-600">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
