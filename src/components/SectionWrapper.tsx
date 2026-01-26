import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 relative ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
