import React from 'react';
import { Heart, Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold">Project-H</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Digitizing India's healthcare for a smarter future by turning handwritten 
              prescriptions into structured digital records using powerful AI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="text-slate-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#why-us" className="text-slate-300 hover:text-white transition-colors">Why Project-H</a></li>
              <li><a href="#team" className="text-slate-300 hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:contact@Project-H.in" className="text-slate-300 hover:text-white transition-colors">
                  b22ai046@iitj.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Project-H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;