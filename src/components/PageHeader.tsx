import React, { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <section 
      className="relative pt-32 pb-20 text-white mt-10"
      style={{
        backgroundImage: `radial-gradient(at 41.554564598978416% 83.29583197955937%, hsla(195.86206896551727, 100%, 65.88235294117646%, 1) 0%, hsla(195.86206896551727, 100%, 65.88235294117646%, 0) 100%), radial-gradient(at 38.25445642317893% 11.977923572751447%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 1) 0%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 0) 100%), radial-gradient(at 77.80375430921237% 37.87631277855763%, hsla(147.23926380368098, 83.58974358974359%, 61.76470588235294%, 1) 0%, hsla(147.23926380368098, 83.58974358974359%, 61.76470588235294%, 0) 100%), radial-gradient(at 96.95435164336075% 86.4591135134396%, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 100%, 0) 100%), radial-gradient(at 92.19966710806902% 25.591156820930806%, hsla(195.86206896551727, 100%, 65.88235294117646%, 1) 0%, hsla(195.86206896551727, 100%, 65.88235294117646%, 0) 100%), radial-gradient(at 95.5180608064893% 98.82075960853429%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 1) 0%, hsla(239.1891891891892, 90.98360655737707%, 52.156862745098046%, 0) 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;