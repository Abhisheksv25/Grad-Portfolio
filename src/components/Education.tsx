import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { EducationItem } from '../types';

const education: EducationItem[] = [
  {
    institution: "Columbia University",
    degree: "Master of Science in Biomedical Engineering",
    location: "New York, NY",
    date: "Dec 2026",
    details: [
      "GPA: 4.1/4.0",
      "Teaching Assistant: Human Centered Design (Prof. Harry West)",
      "Coursework: Lab to Market, BioMEMS, Biomedical Innovations, Immunoengineering"
    ]
  },
  {
    institution: "Indian Institute of Technology Madras (IIT Madras)",
    degree: "Dual Degree (B. Tech & M. Tech in Biological Engineering)",
    location: "Chennai, India",
    date: "May 2024",
    details: [
      "GPA: 8.57/10 | Rank: 4/80",
      "Semester Exchange in Université Paris-Saclay",
      "Minor in Computational Biology"
    ]
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center space-x-3">
          <div className="p-2 bg-teal-700 rounded-lg shadow-sm">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Academic Background</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700 flex flex-col h-full">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <h3 className="text-xl font-bold text-teal-800 dark:text-teal-400">{edu.institution}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
              <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1 leading-snug">{edu.degree}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex items-center">
                {edu.location}
              </p>
              
              <div className="mt-auto">
                <ul className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-slate-700 dark:text-slate-300 text-sm">
                      {detail.includes("Teaching Assistant") ? (
                        <BookOpen className="w-4 h-4 mr-3 mt-0.5 text-purple-600 dark:text-purple-400 shrink-0" />
                      ) : (
                        <Award className="w-4 h-4 mr-3 mt-0.5 text-teal-600 dark:text-teal-500 shrink-0" />
                      )}
                      <span className="leading-relaxed">{detail}</span>
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

export default Education;