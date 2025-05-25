import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { FileText, MessageSquare, Building2 } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container">
        <SectionHeading
          title="Our Products"
          subtitle="Innovative solutions designed to transform healthcare data management and accessibility."
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="card hover:shadow-lg h-full">
            <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-6 inline-flex">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">TextTag</h3>
            <p className="text-slate-600 mb-4">
              Our visual AI model that converts handwritten prescriptions and medical reports into structured digital text.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>High accuracy recognition of medical terminology</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Automatic extraction of medications, dosages, and instructions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Integration with ABHA health records</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover:shadow-lg h-full">
            <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mb-6 inline-flex">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">ChatBot</h3>
            <p className="text-slate-600 mb-4">
              AI assistant for both patients and doctors for medical analysis, suggestions, and health tracking.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">•</span>
                <span>Personalized health insights from medical records</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">•</span>
                <span>Medication reminders and adherence tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary-600 mr-2">•</span>
                <span>Doctor consultation preparation and follow-up</span>
              </li>
            </ul>
          </div>
          
          <div className="card hover:shadow-lg h-full md:col-span-2 lg:col-span-1">
            <div className="p-3 rounded-full bg-accent-100 text-accent-600 mb-6 inline-flex">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">HMIS Integration</h3>
            <p className="text-slate-600 mb-4">
              Seamless connection between our AI solutions and hospital management information systems.
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">•</span>
                <span>API-based integration with existing hospital systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">•</span>
                <span>Automated data flow from paper to digital records</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-600 mr-2">•</span>
                <span>Analytics dashboard for hospital administrators</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600 italic">
            All our products are designed to be compliant with ABDM (Ayushman Bharat Digital Mission) standards and protocols.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;