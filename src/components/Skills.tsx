import React from 'react';
import { SkillCategory } from '../types';

const topSkills: SkillCategory[] = [
  {
    category: "Programming & Tools",
    skills: [
      "Python", "SQL", "MATLAB", "ImageJ", "FlowJo", "GraphPad Prism", "Figma", "Excel", "GitHub", "Power BI",
      "Gromacs", "AutoDock", "VMD", "MODELLER", "BLAST", "RACIPE", "CD-HIT", "Pymol", "Mega", "Snapgene",
      "Cytoscape", "GToTree", "COPIA"
    ]
  },
  {
    category: "Wet Lab",
    skills: [
      "Bacterial & Mammalian Cell Culture", "qPCR / RT-qPCR", "Gel Electrophoresis", "Western Blotting",
      "Staining Techniques", "Antibiotic Assays", "PCR", "Chromatography", "Mice Handling"
    ]
  }
];

const bottomSkills: SkillCategory[] = [
  {
    category: "Python Packages",
    skills: ["Numpy", "Pandas", "Scikit-Learn", "BeautifulSoup", "Pyspark", "Keras", "PyTorch"]
  },
  {
    category: "Imaging & Quant",
    skills: [
      "Cryosectioning", "Immunostaining (IHC & IF)", "Confocal Microscopy", "Flow Cytometry (Cell Cycle/Viability)",
      "FACS", "ELISA"
    ]
  },
  {
    category: "Strategy & Business",
    skills: [
      "Product Strategy", "GTM", "Financial Modeling & Valuation", "Due Diligence",
      "Competitive & Market Landscape Analysis", "Market & Scientific Research", "Data Visualization"
    ]
  }
];

const Skills: React.FC = () => {
  const renderSkillCard = (cat: SkillCategory) => (
    <div key={cat.category} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-700 transition-colors h-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">{cat.category}</h3>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <span key={skill} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:text-teal-700 dark:hover:text-teal-400 hover:border-teal-200 dark:hover:border-teal-500 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Technical Proficiency</h2>
           <p className="text-slate-600 dark:text-slate-400">
            A multidisciplinary skillset spanning computational biology, wet lab research, and business strategy.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {topSkills.map(renderSkillCard)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomSkills.map(renderSkillCard)}
        </div>
      </div>
    </section>
  );
};

export default Skills;