import React from 'react';
import { FlaskConical, Network, Microscope, FileText, Dna, Database, Code, Youtube, Users } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: "Human Centered Design and Innovation",
    institution: "Columbia University",
    duration: "Fall 2025",
    description: [
      "Chain is a human-centered design project aimed at solving major operational inefficiency in dorm laundry systems: limited machines, unpredictable availability, and user behavior that stalls throughput.",
      "Students avoid doing laundry because it requires long, inflexible time blocks and constant monitoring, resulting in machine idle time and dissatisfaction.",
      "Chain introduces a cooperative, single-visit workflow that keeps machines cycling continuously through user-to-user handoffs.",
      "By aligning incentives and using smart coordination, the system increases utilization, reduces congestion, and delivers a more reliable, efficient service model for both students and housing operators."
    ],
    tags: ["Service Design", "Operational Efficiency", "Behavioral Design", "Innovation"],
    youtubeLink: "https://www.youtube.com/watch?list=TLGGJOk0dMR-oeExMzAyMjAyNg&v=JEYl0AR4zu8"
  },
  {
    title: "Transdermal Drug Delivery System",
    institution: "Columbia University (Prof. Samuel Sia)",
    duration: "Aug 2025 – Present",
    description: [
      "Engineered an iontophoretic transdermal drug delivery system for charged nanoparticles, improving transport efficiency by ~25% versus passive diffusion models.",
      "Characterized electrokinetic transport using skin-mimetic and ex vivo models, correlating particle charge and size.",
      "Translated fluorescence-based penetration data into the device's design, improving delivery consistency by 20%."
    ],
    tags: ["Drug Delivery", "Medical Devices", "BioMEMS", "Ex Vivo Models"],
    hasReport: true
  },
  {
    title: "Autoimmune Network & Predictive Risk Modeling",
    institution: "IIT Madras (Prof. Vani Janakiraman)",
    duration: "Aug 2023 – May 2024",
    description: [
      "Constructed a network model and database to analyze complex interactions in 60+ autoimmune diseases.",
      "Discovered viral-triggered autoimmune mechanisms via high-throughput epitope analysis, linking EBV and other viruses to molecular mimicry.",
      "Developed a Python tool to predict risk of secondary autoimmune disease using prevalence, sensitivity, and other features."
    ],
    tags: ["Python", "Network Analysis", "Bioinformatics", "Predictive Modeling"],
    hasReport: true
  },
  {
    title: "Analysis of Lymph Node Dynamics",
    institution: "University of Calgary (Prof. Shan Liao)",
    duration: "May 2023 – Aug 2023",
    description: [
      "Designed iNOS knockout inflammation study, identifying lymphatic dysfunction mechanisms for therapeutics.",
      "Quantified 18% enhanced lymph node drainage via flow cytometry in iNOS-deficient inflammation model.",
      "Demonstrated 1.2× improved lymphatic microarchitecture using confocal microscopy validating therapeutic value."
    ],
    tags: ["Flow Cytometry", "Confocal Microscopy", "Immunology", "Data Analysis"],
    hasReport: true
  },
  {
    title: "Unravelling Host-Pathogen Dynamics in Respiratory Infections",
    institution: "IIT Madras (Prof. Vani Janakiraman)",
    duration: "Aug 2022 - May 2023",
    description: [
      "Explored the interaction between odorants from respiratory pathogens and the human olfactory receptors.",
      "Discovered the high promiscuous nature of OR52 family, unveiling its ability to bind to broad spectrum of odorants.",
      "Contributed to the prototype development of a breath-based diagnostic tool to detect respiratory diseases."
    ],
    tags: ["Host-Pathogen Dynamics", "Diagnostics", "Receptor Biology", "Research"],
    hasReport: false
  },
  {
    title: "iGEM Team Member",
    institution: "International Genetically Engineered Machine competition",
    duration: "Oct 2020 - May 2022",
    description: [
      "Developed a bacterial cellulose-based wound-healing patch from whey water waste using engineered bacteria.",
      "Contributed to a language project focused on public engagement and collaborated with DTU on dry lab experiments."
    ],
    tags: ["Synthetic Biology", "Wound Healing", "Public Engagement"],
    hasReport: false
  },
  {
    title: "Controllability of Gene Regulatory Circuits in Cancer System",
    institution: "IISc Bangalore (Prof. Mohit Kumar Jolly)",
    duration: "Jun 2021 - Jan 2022",
    description: [
      "Investigated the controllability of double activation and double inhibition gene regulatory circuits in cancer systems.",
      "Demonstrated that Mutual Inhibition (MI) architectures more effectively manage multistability and gene expression compared to Mutual Activation (MA) architectures.",
      "Developed a hybrid architecture combining MI and MA to enhance coordination and multistability in synthetic gene regulatory systems."
    ],
    tags: ["Systems Biology", "Gene Regulation", "Mathematical Modeling", "Cancer Research"],
    hasReport: false
  },
  {
    title: "Molecular Dynamic Simulation Study of CALB",
    institution: "Course Project - BT5420 Computer Simulations",
    duration: "Jul 2021 - Nov 2021",
    description: [
      "Investigated the structural behaviour of Candida antarctica lipase B (CALB) in water and super critical CO2 using molecular dynamic simulations.",
      "Observed notable structural changes in the CALB enzyme in ScCO2 versus aqueous solutions, suggesting instability."
    ],
    tags: ["Molecular Dynamics", "Simulations", "Structural Biology"],
    hasReport: false
  },
  {
    title: "Blockchain-based Medical Ledger",
    institution: "Center for Innovation (CFI)",
    duration: "Jun 2020 - Mar 2021",
    description: [
      "Built a website and a hybrid app using blockchain technology to store all the medical records of patients.",
      "Developed an efficient algorithm which improved the storage and retrieval rate of data from the blockchain."
    ],
    tags: ["Blockchain", "Healthcare IT", "App Development"],
    hasReport: false
  }
];

const getIcon = (title: string) => {
  if (title.includes("Human Centered")) return <Users className="w-6 h-6 text-teal-700 dark:text-teal-400" />;
  if (title.includes("Drug")) return <FlaskConical className="w-6 h-6 text-teal-700 dark:text-teal-400" />;
  if (title.includes("Network")) return <Network className="w-6 h-6 text-purple-700 dark:text-purple-400" />;
  if (title.includes("Lymph") || title.includes("Host-Pathogen")) return <Microscope className="w-6 h-6 text-blue-700 dark:text-blue-400" />;
  if (title.includes("Gene") || title.includes("iGEM")) return <Dna className="w-6 h-6 text-pink-700 dark:text-pink-400" />;
  if (title.includes("Simulation")) return <Database className="w-6 h-6 text-indigo-700 dark:text-indigo-400" />;
  if (title.includes("Blockchain")) return <Code className="w-6 h-6 text-orange-700 dark:text-orange-400" />;
  return <FlaskConical className="w-6 h-6 text-teal-700 dark:text-teal-400" />;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Academic Projects & Research</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Technical research and engineering achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 group">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {getIcon(project.title)}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600 shrink-0">
                    {project.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">{project.title}</h3>
                <p className="text-sm text-teal-700 dark:text-teal-400 font-medium mb-4">{project.institution}</p>
                
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-l-2 border-slate-100 dark:border-slate-700 pl-3">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.youtubeLink ? (
                  <a 
                    href={project.youtubeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2 mt-2 text-sm font-medium text-red-600 dark:text-red-400 bg-white dark:bg-slate-700 border border-red-100 dark:border-red-900/30 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch Video
                  </a>
                ) : project.hasReport && (
                  <button className="flex items-center justify-center w-full py-2 mt-2 text-sm font-medium text-teal-700 dark:text-teal-400 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-600 transition-colors">
                    <FileText className="w-4 h-4 mr-2" />
                    View Report / Poster
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;