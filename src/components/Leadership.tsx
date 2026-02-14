import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';
import { LeadershipItem } from '../types';

const leadershipItems: LeadershipItem[] = [
  {
    role: "Core Member",
    organization: "Social Impact Initiative",
    duration: "2023 - Present",
    description: "Leading a team of volunteers to organize health camps in rural areas, impacting over 500+ lives through accessible diagnostics.",
    icon: 'heart'
  },
  {
    role: "Student Mentor",
    organization: "University Peer Guide Program",
    duration: "2024 - Present",
    description: "Mentoring junior students in academic planning and research opportunities, facilitating workshops on resume building and internships.",
    icon: 'users'
  },
  {
    role: "Volunteer",
    organization: "Global Health Symposium",
    duration: "2023",
    description: "Coordinated logistics for an international symposium connecting healthcare professionals and students to discuss global health challenges.",
    icon: 'globe'
  }
];

const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Leadership & Social Impact</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Beyond academics and research, I am committed to creating positive community impact through leadership and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-teal-200 dark:hover:border-teal-700 transition-all text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 mb-4">
                {item.icon === 'heart' && <Heart className="w-6 h-6" />}
                {item.icon === 'users' && <Users className="w-6 h-6" />}
                {item.icon === 'globe' && <Globe className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400 mb-3">{item.organization}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 font-medium uppercase tracking-wide">{item.duration}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;