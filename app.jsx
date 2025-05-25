import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Smartphone, Lightbulb, Brain, FileText } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 font-sans">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-blue-600">AyuBharat</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600"><Github /></a>
          <a href="#" className="text-gray-600 hover:text-blue-600"><Linkedin /></a>
          <a href="mailto:contact@ayubharat.in" className="text-gray-600 hover:text-blue-600"><Mail /></a>
        </div>
      </header>

      <main className="px-6 py-12 max-w-6xl mx-auto">
        <motion.section 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Digitizing India's Healthcare</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Empowering patients, doctors, and hospitals with secure, AI-powered prescription digitization and analytics.
          </p>
        </motion.section>

        <motion.section 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}>
          <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <Lightbulb className="mx-auto mb-4 text-blue-500" size={36} />
            <h3 className="text-xl font-semibold mb-2">Innovative AI</h3>
            <p className="text-gray-600">Visual-based ML models trained on doctor's handwriting for unmatched accuracy.</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <Brain className="mx-auto mb-4 text-green-500" size={36} />
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-600">Insights for doctors and hospitals on treatments, medicine trends, and patient types.</p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 text-center hover:scale-105 transition-transform">
            <FileText className="mx-auto mb-4 text-purple-500" size={36} />
            <h3 className="text-xl font-semibold mb-2">Digital Records</h3>
            <p className="text-gray-600">Patients can access and control their records securely, anytime.</p>
          </div>
        </motion.section>

        <motion.section 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 0.6 }}>
          <img src="/healthcare-illustration.svg" alt="Healthcare AI" className="mx-auto mb-6 w-full max-w-xl" />
          <h3 className="text-2xl font-bold text-blue-700 mb-2">Join the Movement</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            AyuBharat is building the future of healthcare data in India. Be part of the transformation.
          </p>
        </motion.section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 AyuBharat. All rights reserved.
      </footer>
    </div>
  );
}
