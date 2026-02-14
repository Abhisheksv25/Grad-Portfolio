import React from 'react';
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-teal-800 dark:border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-10 md:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-teal-100 dark:text-slate-300 text-lg mb-12 max-w-md">
                  I am currently open to opportunities in Life Sciences Strategy, Venture Capital, and Biotech Product Development.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:as7750@columbia.edu" className="flex items-center text-white hover:text-teal-200 dark:hover:text-teal-400 transition-colors group">
                    <div className="p-3 bg-teal-800 dark:bg-slate-700 rounded-lg group-hover:bg-teal-700 dark:group-hover:bg-slate-600 transition-colors mr-4 border border-teal-700 dark:border-slate-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-300 dark:text-slate-400 font-semibold uppercase tracking-wider">Email</p>
                      <p className="text-lg font-medium">as7750@columbia.edu</p>
                    </div>
                  </a>
                  
                  <a href="tel:+16462101739" className="flex items-center text-white hover:text-teal-200 dark:hover:text-teal-400 transition-colors group">
                    <div className="p-3 bg-teal-800 dark:bg-slate-700 rounded-lg group-hover:bg-teal-700 dark:group-hover:bg-slate-600 transition-colors mr-4 border border-teal-700 dark:border-slate-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-300 dark:text-slate-400 font-semibold uppercase tracking-wider">Phone</p>
                      <p className="text-lg font-medium">(646) 210-1739</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center text-white">
                    <div className="p-3 bg-teal-800 dark:bg-slate-700 rounded-lg mr-4 border border-teal-700 dark:border-slate-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-teal-300 dark:text-slate-400 font-semibold uppercase tracking-wider">Location</p>
                      <p className="text-lg font-medium">New York, 10026</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://linkedin.com/in/abhishek-sv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-teal-900 bg-teal-100 hover:bg-white transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block bg-teal-800 dark:bg-slate-900 border-l border-teal-700 dark:border-slate-700">
               {/* Decorative abstract pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                 <div className="space-y-4 text-center">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20">
                       <span className="text-4xl font-bold text-white">AV</span>
                    </div>
                    <blockquote className="text-teal-100 dark:text-slate-300 italic font-medium">
                      "Bridging science and business to accelerate healthcare innovation."
                    </blockquote>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;