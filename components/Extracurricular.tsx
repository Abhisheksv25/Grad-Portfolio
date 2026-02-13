import React from 'react';
import { BookOpen, Users, Globe, Mic, Plane, Trophy, Leaf } from 'lucide-react';
import { ExtracurricularItem } from '../types';

const activities: ExtracurricularItem[] = [
  {
    title: "Served as a teaching assistant for the Infection Biology course (BT5410) under Prof. Vani Janakiraman",
    year: "2024",
    icon: 'teaching'
  },
  {
    title: "Served as a teaching assistant for the Life Sciences course (BT1010) under Prof. Karunagaran",
    year: "2023",
    icon: 'teaching'
  },
  {
    title: "Attended the International Conference on Cancer Biology 2023 (ICCB23): Molecular Mechanisms, Genomics",
    year: "2023",
    icon: 'conference'
  },
  {
    title: "Engaged with the non-profit organization “Love to Serve” to help combat food waste",
    year: "2022",
    icon: 'volunteer'
  },
  {
    title: "Member of the team GEnoM (iGEM IIT Madras) that won Best Computational Project (Gold medal) at GOGEC",
    year: "2021",
    icon: 'award'
  },
  {
    title: "Member of the institute and hostel badminton team that participated in the university tournaments",
    year: "2021",
    icon: 'sport'
  },
  {
    title: "Participated in public policy discourse as a Student Legislative Council delegate to the Indian Parliament",
    year: "2019",
    icon: 'policy'
  },
  {
    title: "Backpacked across 18 different European countries exploring the culture, traditions, and local lifestyles",
    icon: 'travel'
  }
];

const Extracurricular: React.FC = () => {
  const getIcon = (type?: string) => {
    switch (type) {
      case 'teaching': return <BookOpen className="w-5 h-5" />;
      case 'conference': return <Users className="w-5 h-5" />;
      case 'volunteer': return <Leaf className="w-5 h-5" />;
      case 'award': return <Trophy className="w-5 h-5" />;
      case 'sport': return <Trophy className="w-5 h-5" />;
      case 'policy': return <Mic className="w-5 h-5" />;
      case 'travel': return <Plane className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="extracurricular" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Extracurricular Activities</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Leadership, Volunteering & Global Exposure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {activities.map((item, index) => (
            <div key={index} className="flex items-start group">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/40 transition-colors">
                  {getIcon(item.icon)}
                </div>
              </div>
              <div className="ml-4">
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  {item.title}
                </p>
                {item.year && (
                  <span className="inline-block mt-1 text-sm font-semibold text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {item.year}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;