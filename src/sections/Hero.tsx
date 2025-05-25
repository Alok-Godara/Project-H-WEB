import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-500 opacity-5 pattern-dots pattern-size-4 pattern-diagonal-lines"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Digitizing India's Healthcare for a Smarter Future
            </h1>
            <p className="text-xl text-slate-700 mb-8 max-w-xl">
              AyuBharat is a health-tech startup turning handwritten prescriptions into structured digital records using powerful AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Connect With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#team" className="btn btn-secondary">
                View Our Team
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6">
                <img 
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Doctor using digital tablet" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6 space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-primary-700 mb-1">Prescription Digitization</h3>
                    <p className="text-sm text-slate-600">Convert handwritten notes to structured data instantly</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-primary-700 mb-1">AI-Powered Analysis</h3>
                    <p className="text-sm text-slate-600">Get insights and recommendations from medical data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-primary-600 transition-colors">
          <span className="text-sm mb-1">Learn More</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;