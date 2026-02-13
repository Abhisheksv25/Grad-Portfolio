import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: "Stellaris Venture Partners",
    role: "Venture Strategy Analyst, Lifesciences",
    location: "Bangalore, India",
    duration: "Apr 2025 – Jul 2025",
    points: [
      "Evaluated 50+ medtech and life-science startups using market sizing, competitive analysis, and business models.",
      "Built investment theses across diagnostics, CGT and AI drug discovery, identifying top 10% investment entry points.",
      "Designed GTM and pricing entry playbooks with exit strategies, accelerating partner evaluation cycles by 15%."
    ]
  },
  {
    company: "Elixir",
    role: "Founder, Entrepreneur First (EF)",
    location: "Bangalore, India",
    duration: "Aug 2024 – Apr 2025",
    points: [
      "Founded a protein engineering startup using computational protein design and precision fermentation, targeting a $8B functional proteins market.",
      "Validated product-market fit and $2M+ ARR for engineered protein sweeteners through stakeholder discussions.",
      "Built market entry framework using beachhead analysis and unit economics modeling, securing LOIs before strategic shutdown due to capital-intensive scaling."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          </div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-50 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-md z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase className="w-5 h-5 text-teal-700 dark:text-teal-400" />
              </div>
              
              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white leading-tight">{exp.role}</h3>
                    <h4 className="font-semibold text-teal-800 dark:text-teal-400 mt-1">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col items-start lg:items-end mt-2 lg:mt-0 text-sm text-slate-500 dark:text-slate-400 space-y-1 shrink-0">
                    <span className="flex items-center whitespace-nowrap bg-slate-50 dark:bg-slate-700/50 px-2 py-1 rounded"><Calendar className="w-3 h-3 mr-1.5" /> {exp.duration}</span>
                    <span className="flex items-center whitespace-nowrap px-2"><MapPin className="w-3 h-3 mr-1.5" /> {exp.location}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500 dark:bg-teal-400"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;