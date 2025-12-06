export interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: string;
  impact?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface Certification {
  name: string;
  provider: string;
}

export interface Award {
  title: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}