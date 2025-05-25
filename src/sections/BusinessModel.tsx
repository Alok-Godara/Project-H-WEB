import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { User, Building2, Clover as Government, Building } from 'lucide-react';

const BusinessModel: React.FC = () => {
  return (
    <section id="business" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          title="Business Model"
          subtitle="Our multi-sided approach creates value for all healthcare stakeholders."
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card hover:shadow-lg h-full">
            <div className="flex flex-col h-full">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-4 inline-flex">
                <User className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Doctors</h3>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Patient Record Access</span>
                  <span className="text-success-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Practice Analytics</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Advanced AI Assistant</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Base features free to maximize adoption, premium features for practice enhancement.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card hover:shadow-lg h-full">
            <div className="flex flex-col h-full">
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mb-4 inline-flex">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hospitals</h3>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">SaaS Subscription</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Analytics Dashboard</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">HMIS Integration</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Enterprise-grade solutions with custom pricing based on hospital size and needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card hover:shadow-lg h-full">
            <div className="flex flex-col h-full">
              <div className="p-3 rounded-full bg-accent-100 text-accent-600 mb-4 inline-flex">
                <Government className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Government & Pharma</h3>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">De-identified Datasets</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Population Health Insights</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Research Collaborations</span>
                  <span className="text-primary-600 font-medium">Paid</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Anonymized, aggregated data for public health planning and pharmaceutical research.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card hover:shadow-lg h-full">
            <div className="flex flex-col h-full">
              <div className="p-3 rounded-full bg-success-100 text-success-600 mb-4 inline-flex">
                <Building className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Partners</h3>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Medicine Delivery</span>
                  <span className="text-success-600 font-medium">Referrals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Insurance Providers</span>
                  <span className="text-success-600 font-medium">Referrals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Specialist Consultations</span>
                  <span className="text-success-600 font-medium">Referrals</span>
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  Commission-based revenue from partner referrals for complementary services.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-slate-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">How We Create Value</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary-900">For Healthcare Providers</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-slate-700">Reduced administrative burden through automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-slate-700">Complete patient history access for better care</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-slate-700">AI-assisted diagnosis and treatment recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span className="text-slate-700">Practice insights for operational improvements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white rounded-lg shadow-md p-6">
                  <h4 className="text-lg font-semibold mb-3 text-secondary-900">For Patients</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span className="text-slate-700">Ownership and control of personal health data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span className="text-slate-700">Comprehensive medical history available anywhere</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span className="text-slate-700">Better coordination between healthcare providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary-600 mr-2">•</span>
                      <span className="text-slate-700">Reduced medical errors through better information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;