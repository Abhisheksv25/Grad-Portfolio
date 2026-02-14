import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';
import { HonorItem } from '../types';

const honors: HonorItem[] = [
  {
    title: "One of 10 selected for the Circular Economy Pre-Incubator program by EIT Climate-KIC & SecondMuse",
    year: "2024"
  },
  {
    title: "Awarded the prestigious MITACS Globalink research internship at the University of Calgary, Canada",
    year: "2023"
  },
  {
    title: "Nominated for the Australian National University as a Future Research Talent (FRT) Scholar",
    year: "2023"
  },
  {
    title: "One of the 12 students selected from 10000+ applicants, all over India, for the Charpak Scholarship",
    year: "2022"
  }
];

const Honors: React.FC = () => {
  return (
    <section id="honors" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center space-x-3">
          <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
            <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Honors & Awards</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Global Recognition & Scholarships</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honors.map((honor, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-amber-200 dark:hover:border-amber-700 hover:shadow-md transition-all flex items-start space-x-4">
              <div className="mt-1 flex-shrink-0">
                {index < 2 ? (
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                ) : (
                  <Medal className="w-5 h-5 text-teal-600 dark:text-teal-500" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {honor.title}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-mono">
                  {honor.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;