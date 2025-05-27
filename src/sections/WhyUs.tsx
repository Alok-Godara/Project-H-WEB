import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Check, X } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container">
        <SectionHeading
          title="Why Choose Project-H?"
          subtitle="Our solution offers significant advantages over traditional healthcare documentation methods."
        />
        
        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  Traditional Approach
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  Project-H Solution
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                  Doctor Training Required
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-error-500" />
                  </div>
                  <span className="text-sm text-slate-600">Extensive EHR training needed</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center bg-primary-50">
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <span className="text-sm text-slate-700">No training - use existing workflows</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                  Data Entry Workload
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-error-500" />
                  </div>
                  <span className="text-sm text-slate-600">Manual data entry by staff</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center bg-primary-50">
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <span className="text-sm text-slate-700">Automated extraction via AI</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                  Real-time Data Access
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-error-500" />
                  </div>
                  <span className="text-sm text-slate-600">Delayed by manual processes</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center bg-primary-50">
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <span className="text-sm text-slate-700">Immediate digitization and access</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                  AI-Powered Analysis
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-error-500" />
                  </div>
                  <span className="text-sm text-slate-600">Limited or non-existent</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center bg-primary-50">
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <span className="text-sm text-slate-700">Advanced insights and recommendations</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800">
                  Patient Ownership of Data
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center">
                    <X className="h-5 w-5 text-error-500" />
                  </div>
                  <span className="text-sm text-slate-600">Provider/hospital controlled</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center bg-primary-50">
                  <div className="flex justify-center">
                    <Check className="h-5 w-5 text-success-500" />
                  </div>
                  <span className="text-sm text-slate-700">Patient-controlled access and sharing</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 bg-primary-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4 text-primary-900">The Project-H Advantage</h3>
          <p className="text-slate-700 mb-6">
            Our solution preserves the familiar workflow for healthcare providers while adding powerful digital capabilities. Doctors can continue writing prescriptions by hand, and our AI does the rest - creating structured, accessible digital records instantly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-bold text-2xl text-primary-600 mb-1">99.2%</div>
              <div className="text-sm text-slate-600">Recognition accuracy</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-bold text-2xl text-primary-600 mb-1">85%</div>
              <div className="text-sm text-slate-600">Time saved vs. manual entry</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-bold text-2xl text-primary-600 mb-1">5x</div>
              <div className="text-sm text-slate-600">Increase in data utilization</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-bold text-2xl text-primary-600 mb-1">0</div>
              <div className="text-sm text-slate-600">Workflow changes for doctors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;