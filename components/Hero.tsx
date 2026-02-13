import React from 'react';
import { Mail, MapPin, Linkedin, ArrowRight, Download, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Intro */}
        <div className="lg:col-span-7 flex flex-col space-y-6 order-2 lg:order-1 text-center lg:text-left">
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Abhishek Shanmuga Vengatasalam
            </h1>
            <div className="space-y-1 pt-2">
              <p className="text-xl md:text-2xl text-teal-700 dark:text-teal-400 font-medium">
                Graduate Biomedical Engineer,
              </p>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium">
                Columbia University
              </p>
              <div className="flex items-center justify-center lg:justify-start text-slate-500 dark:text-slate-400 font-medium text-base">
                <MapPin className="w-4 h-4 mr-1.5" />
                <span>New York</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-12 h-1 bg-teal-500 rounded-full mx-auto lg:mx-0 opacity-80 my-2"></div>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            A curious biotechnologist and entrepreneur, thriving on reimagining biology to build innovative solutions at the intersection of health, technology, and sustainability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <a href="#experience" className="inline-flex justify-center items-center px-8 py-3.5 bg-teal-800 hover:bg-teal-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white rounded-full transition-all shadow-lg hover:shadow-xl font-medium text-base group">
              View Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-3 justify-center">
              <a href="https://linkedin.com/in/abhishek-sv" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center w-12 h-12 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-colors border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-300 dark:hover:border-teal-600" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:as7750@columbia.edu" className="inline-flex justify-center items-center w-12 h-12 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-colors border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-300 dark:hover:border-teal-600" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
               <a href="#" className="inline-flex justify-center items-center w-12 h-12 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-colors border border-slate-200 dark:border-slate-700 shadow-sm hover:border-teal-300 dark:hover:border-teal-600" aria-label="Resume">
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Creative Profile Snapshot */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center w-full relative">
          
          {/* Decorative Back Layers */}
          <div className="absolute top-10 -right-10 w-64 h-64 bg-teal-400/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000"></div>

          <div className="relative w-full max-w-sm">
            
            {/* Main Photo Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800 bg-white dark:bg-slate-800 transform transition-transform hover:scale-[1.02] duration-500">
               {/* 
                  NOTE TO USER: Replace the src below with the URL of the photo you uploaded. 
                  If you are running this locally, put your image in the public folder and reference it like '/my-photo.jpg'.
               */}
               <img 
                 src="Abhi_photo.jpg" 
                 alt="Abhishek S.V." 
                 className="w-full h-[460px] object-cover"
               />
               
               {/* Gradient Overlay for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
               
               {/* Bottom Content within Image */}
               <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                 <div className="flex items-center space-x-2 mb-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-300">Open to Opportunities</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   <span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded text-xs font-medium text-white">
                     Strategy
                   </span>
                   <span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded text-xs font-medium text-white">
                     Bio-Devices
                   </span>
                   <span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded text-xs font-medium text-white">
                     Therapeutics
                   </span>
                 </div>
               </div>
            </div>

            {/* Floating Widget 1: Education */}
            <div className="absolute -top-6 -left-6 md:-left-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 dark:border-slate-700 flex items-center gap-3 animate-bounce-slow">
              <div className="p-2.5 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-700 dark:text-teal-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Education</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Columbia <br/>University '26</p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;