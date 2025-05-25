import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { TrendingUp, PieChart, BarChart3 } from 'lucide-react';

const Market: React.FC = () => {
  return (
    <section id="market" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <SectionHeading
          title="Market Opportunity"
          subtitle="India's healthcare digitization presents a massive untapped opportunity for innovative solutions."
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-lg shadow-md p-8 h-full">
              <div className="p-3 rounded-full bg-primary-100 text-primary-600 mb-6 inline-flex">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Total Addressable Market</h3>
              <div className="text-3xl font-bold text-primary-700 mb-4">₹30,000+ Cr</div>
              <p className="text-slate-600">
                The entire healthcare digitization market in India, including electronic health records, 
                telemedicine, AI diagnostics, and healthcare analytics.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-secondary-300 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-lg shadow-md p-8 h-full">
              <div className="p-3 rounded-full bg-secondary-100 text-secondary-600 mb-6 inline-flex">
                <PieChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serviceable Available Market</h3>
              <div className="text-3xl font-bold text-secondary-700 mb-4">₹1,600 Cr</div>
              <p className="text-slate-600">
                Budget allocated for the Ayushman Bharat Digital Mission (2022-2027), focusing on 
                creating a national digital health ecosystem.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-secondary-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-300 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-lg shadow-md p-8 h-full">
              <div className="p-3 rounded-full bg-accent-100 text-accent-600 mb-6 inline-flex">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serviceable Obtainable Market</h3>
              <div className="text-3xl font-bold text-accent-700 mb-4">₹100-300 Cr</div>
              <p className="text-slate-600">
                Our direct opportunity in prescription digitization and data analytics, capturing 
                a significant portion of India's healthcare digitization efforts.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-accent-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Market Dynamics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3 text-primary-900">Drivers</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-slate-700">Government's push for digital health records through ABDM</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-slate-700">Rising smartphone penetration (850M+ users) enabling digital health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-slate-700">Growing demand for telemedicine and remote healthcare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-slate-700">Increasing healthcare expenditure (6% annual growth)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-3 text-secondary-900">Challenges</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-slate-700">Varied digital literacy among healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-slate-700">Data privacy concerns and regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-slate-700">Integration with existing healthcare IT systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-600 mr-2">•</span>
                  <span className="text-slate-700">Building trust in AI-powered medical analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;