import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Shield, UserCheck, Clock, UserX } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <section id="privacy" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        <SectionHeading
          title="Privacy & Consent"
          subtitle="Patient data ownership and control are at the core of our approach."
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/3808057/pexels-photo-3808057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Patient data privacy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Patient-Controlled Access</h3>
                <p className="text-slate-600">
                  Patients approve all data sharing through a simple consent mechanism. Your medical data remains private unless you choose to share it.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-secondary-100 rounded-lg text-secondary-600">
                  <UserCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Secure Access Requests</h3>
                <p className="text-slate-600">
                  Healthcare providers request access through your unique ABHA ID. You receive notifications and can review each request before approving.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-accent-100 rounded-lg text-accent-600">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Time-Limited Sharing</h3>
                <p className="text-slate-600">
                  Control how long your data is shared. Set access durations from a single visit to ongoing care relationships, with automatic expiration.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 bg-error-100 rounded-lg text-error-600">
                  <UserX className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Revoke Access Anytime</h3>
                <p className="text-slate-600">
                  Change your mind? Revoke access instantly through the AyuBharat app or web portal, with immediate effect across all systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-slate-50 rounded-xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">Our Privacy Commitment</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-primary-700 mb-2">ABDM Compliant</h4>
              <p className="text-slate-600 text-sm">
                All data handling follows Ayushman Bharat Digital Mission guidelines and standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-primary-700 mb-2">End-to-End Encryption</h4>
              <p className="text-slate-600 text-sm">
                Your medical data is encrypted at rest and in transit with industry-leading protocols.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h4 className="font-semibold text-primary-700 mb-2">Transparent Data Usage</h4>
              <p className="text-slate-600 text-sm">
                Clear records of who accessed your data, when, and why - all available in your dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;