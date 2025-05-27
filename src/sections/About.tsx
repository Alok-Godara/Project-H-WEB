import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Target, Lightbulb, Lock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          title="Our Mission"
          subtitle="We're solving India's healthcare data gap by digitizing billions of handwritten prescriptions with our cutting-edge AI technology."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card hover:shadow-lg group">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-slate-600">
                Making healthcare data accessible to patients and providers across India, regardless of location or resources.
              </p>
            </div>
          </div>
          
          <div className="card hover:shadow-lg group">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mb-4 group-hover:bg-secondary-600 group-hover:text-white transition-all">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
              <p className="text-slate-600">
                Using cutting-edge visual AI to recognize, analyze, and structure handwritten medical data with high accuracy.
              </p>
            </div>
          </div>
          
          <div className="card hover:shadow-lg group">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-accent-100 text-accent-600 mb-4 group-hover:bg-accent-600 group-hover:text-white transition-all">
                <Lock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
              <p className="text-slate-600">
                Ensuring patient data remains private and secure, with patients controlling access to their medical records.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">The Challenge We're Solving</h3>
              <p className="text-slate-700 mb-4">
                India generates billions of handwritten prescriptions annually that remain inaccessible as digital data. This creates fragmented patient histories, medication errors, and missed insights.
              </p>
              <p className="text-slate-700">
                Project-H bridges this gap by turning paper prescriptions into structured digital records that integrate with India's healthcare ecosystem, while respecting patient privacy and consent.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Doctor writing prescription" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;