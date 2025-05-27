import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Target, Lightbulb, BadgeCheck, Award } from 'lucide-react';

const Strategy: React.FC = () => {
  return (
    <section id="strategy" className="section-padding bg-slate-50">
      <div className="container">
        <SectionHeading
          title="Go-To-Market Strategy"
          subtitle="Our approach to bringing Project-H's solutions to India's healthcare ecosystem."
        />
        
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary-200 h-full hidden md:block"></div>
          
          <div className="space-y-16">
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold border-4 border-white hidden md:flex">1</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block mb-4 md:mb-0">
                    <div className="p-3 rounded-full bg-primary-100 text-primary-600 md:hidden">
                      <Target className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Initial Focus: Doctors & Patients</h3>
                  <p className="text-slate-600 mb-4">
                    We're starting with individual practitioners and their patients to build our user base and data repository.
                  </p>
                  <div className="bg-white rounded-lg shadow-sm p-4 md:ml-auto md:mr-8">
                    <h4 className="font-medium text-primary-900 mb-2">Key Tactics</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start md:justify-end">
                        <span className="text-primary-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">Free prescription digitization for doctors</span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-primary-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">Patient app for prescription history</span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-primary-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">Medical conferences and doctor networks</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg blur opacity-30 hidden md:block"></div>
                  <div className="relative md:ml-8">
                    <div className="hidden md:block p-3 rounded-full bg-primary-100 text-primary-600 mb-4 inline-flex">
                      <Target className="h-6 w-6" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="font-medium text-primary-900 mb-2">Expected Outcomes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-slate-700">10,000+ doctors in first 18 months</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-slate-700">1M+ digitized prescriptions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span className="text-slate-700">Initial AI model training and refinement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary-600 text-white flex items-center justify-center font-bold border-4 border-white hidden md:flex">2</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 md:text-left">
                  <div className="inline-block mb-4 md:mb-0">
                    <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 md:hidden">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Monetization: Premium Features</h3>
                  <p className="text-slate-600 mb-4">
                    With a solid user base, we'll introduce premium analytics and AI-powered chatbot capabilities.
                  </p>
                  <div className="bg-white rounded-lg shadow-sm p-4 md:mr-auto md:ml-8">
                    <h4 className="font-medium text-secondary-900 mb-2">Key Tactics</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span className="text-slate-700">Freemium model with tiered pricing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span className="text-slate-700">Advanced analytics for practice insights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary-600 mr-2">•</span>
                        <span className="text-slate-700">AI-powered medical assistant features</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative md:order-1">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-secondary-300 rounded-lg blur opacity-30 hidden md:block"></div>
                  <div className="relative md:mr-8">
                    <div className="hidden md:block p-3 rounded-full bg-secondary-100 text-secondary-600 mb-4 inline-flex">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="font-medium text-secondary-900 mb-2">Expected Outcomes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span className="text-slate-700">15-20% conversion to paid tiers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span className="text-slate-700">Initial revenue generation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-600 mr-2">•</span>
                          <span className="text-slate-700">Validated business model</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phase 3 */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold border-4 border-white hidden md:flex">3</div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-block mb-4 md:mb-0">
                    <div className="p-3 rounded-full bg-accent-100 text-accent-600 md:hidden">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Government & Institutional Partnerships</h3>
                  <p className="text-slate-600 mb-4">
                    Scale through partnerships with ABDM, hospitals, and other healthcare institutions.
                  </p>
                  <div className="bg-white rounded-lg shadow-sm p-4 md:ml-auto md:mr-8">
                    <h4 className="font-medium text-accent-900 mb-2">Key Tactics</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start md:justify-end">
                        <span className="text-accent-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">ABDM integration for ABHA ID connectivity</span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-accent-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">Hospital and clinic enterprise solutions</span>
                      </li>
                      <li className="flex items-start md:justify-end">
                        <span className="text-accent-600 mr-2 md:order-2">•</span>
                        <span className="text-slate-700 md:text-right">Achieving NHS certification for wider adoption</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-300 rounded-lg blur opacity-30 hidden md:block"></div>
                  <div className="relative md:ml-8">
                    <div className="hidden md:block p-3 rounded-full bg-accent-100 text-accent-600 mb-4 inline-flex">
                      <BadgeCheck className="h-6 w-6" />
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h4 className="font-medium text-accent-900 mb-2">Expected Outcomes</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span className="text-slate-700">Integration with 100+ hospitals/clinics</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span className="text-slate-700">Government pilot programs</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span className="text-slate-700">Scaled data acquisition and processing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8 text-center">
          <div className="p-3 rounded-full bg-white text-primary-600 mb-4 inline-flex shadow-sm">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Our Ultimate Vision</h3>
          <p className="text-slate-700 max-w-3xl mx-auto">
            To become India's most trusted healthcare data platform, connecting every stakeholder 
            in the healthcare ecosystem while preserving patient data ownership and privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strategy;