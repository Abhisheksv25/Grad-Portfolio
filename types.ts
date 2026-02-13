export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  points: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  date: string;
  details: string[];
}

export interface ProjectItem {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  tags: string[];
  link?: string;
  hasReport?: boolean;
  youtubeLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PublicationItem {
  title: string;
  authors: string;
  journal: string;
  year: string;
  status?: string; // e.g., "Published", "Under Review"
  link?: string;
}

export interface HonorItem {
  title: string;
  year: string;
  description?: string;
}

export interface ExtracurricularItem {
  title: string;
  year?: string;
  icon?: 'teaching' | 'conference' | 'volunteer' | 'award' | 'sport' | 'policy' | 'travel';
}

export interface LeadershipItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  icon: 'heart' | 'users' | 'globe';
}