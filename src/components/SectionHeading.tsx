import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className={`section-subtitle ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;