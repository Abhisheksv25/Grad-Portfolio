import React from 'react';
import { BookOpen, ExternalLink, ScrollText } from 'lucide-react';
import { PublicationItem } from '../types';

const publications: PublicationItem[] = [
  {
    title: "Coupled mutual inhibition and mutual activation motifs as tools for cell-fate control",
    authors: "Sabuwala, B., Shanmuga Vengatasalam, A., Hari, K., & Jolly, M. K.",
    journal: "Cells Tissues Organs",
    year: "2023",
    status: "Published",
    link: "https://doi.org/10.1159/000529558"
  },
  {
    title: "Crossing Barriers: Role of Respiratory Viral Infection in CNS Disorders",
    authors: "Shanmuga Vengatasalam, A., Abhijit, G., SenthilKumar, K., Ghosh, S., & Janakiraman, V.",
    journal: "Yale Journal of Biology and Medicine",
    year: "2024",
    status: "Under Publication"
  }
];

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center space-x-3">
           <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
             <ScrollText className="w-6 h-6 text-blue-700 dark:text-blue-400" />
           </div>
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Publications</h2>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-600/50 transition-colors">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${pub.status === 'Published' ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800'}`}>
                      {pub.status}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{pub.journal}, {pub.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 italic">
                    {pub.authors}
                  </p>
                </div>
                {pub.link && (
                   <div className="flex-shrink-0 pt-1">
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-teal-700 dark:text-teal-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-600 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                    >
                      Read Paper
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;