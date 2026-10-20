import { Project, Education, Certification, Award, SkillCategory } from './types';
import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  BarChart, 
  Cpu, 
  Award as AwardIcon, 
  BookOpen, 
  Terminal
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Charan Sri Hari P",
  title: "Forward Deployed Engineer | AI Agents & Prompt Engineering",
  email: "charansrihari1607@gmail.com",
  phone: "+91 9742072679",
  location: "Bangalore, India",
  summary: "AI & Data Science engineer with hands-on Forward Deployed Engineering experience shipping production AI agents directly into customer workflows. Specializes in prompt engineering, conversational AI agent design and RAG for real-world deployment, with an applied ML/NLP background."
};

export const WORK_EXPERIENCE = [
  {
    role: "Forward Deployed Engineer",
    company: "ExtraaEdge Technology Solutions Pvt. Ltd.",
    period: "Apr 2026 - Present",
    location: "Bangalore, India",
    points: [
      "Designed and deployed AI voice-calling agents (VidyaCall) for higher-education clients, from prompt design through live-call testing.",
      "Built multi-language conversational flows, including Hindi and Kannada, for lead-qualification calls.",
      "Tested deployed agents against per-institution QA rubrics and revised prompts based on findings.",
      "Built a multi-tenant RAG chatbot for institution admissions enquiries, grounding LLM answers in each institution's own knowledge base and pushing chat conversations into the CRM."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "SATURN",
    type: "Sentiment Analysis Tool & User Review Navigation",
    description: "A real-time sentiment analysis tool classifying social media sentiments using NLP and ML. Included data preprocessing and classification models to extract insights from user-generated content.",
    technologies: ["NLP", "Machine Learning", "Python", "Data Preprocessing"],
    impact: "Accepted for publication in ICIAH 2025 (Springer)."
  },
  {
    title: "NISCHETHANA SAHAYAKA",
    type: "Curative Diagnostic Tool for Pediatric Anesthesia",
    description: "An Android mobile app developed in Java to assist pediatric anesthesiologists with rapid and accurate critical drug dosage calculations. Features a user-friendly interface for quick access to patient data and medication guidelines.",
    technologies: ["Android", "Java", "UI/UX Design"],
    impact: "Research published in ICKES 2022 (IEEE Xplore)."
  },
  {
    title: "SUIGEN",
    type: "Suspect Image Generator",
    description: "Generative AI system using Stable Diffusion and Transformer models to generate and modify suspect facial images for criminal identification. Enables high-accuracy facial reconstruction from descriptive or partial inputs.",
    technologies: ["Generative AI", "Stable Diffusion", "Transformers", "Deep Learning"],
    impact: "Reduces manual effort and boosts identification speed in forensic workflows."
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "BGS College of Engineering and Technology",
    year: "2022 - 2026",
    details: "Specialized in Artificial Intelligence and Data Science"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI Agents & LLMs",
    skills: ["Prompt Engineering", "Conversational Agent Design", "RAG", "Voice Agents", "Agent QA & Evaluation"]
  },
  {
    category: "Programming",
    skills: ["Java", "Python", "C"]
  },
  {
    category: "Databases & Core CS",
    skills: ["SQL", "DBMS", "DSA", "Data Structures"]
  },
  {
    category: "AI & ML",
    skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "NLTK", "Stable Diffusion", "Transformers"]
  },
  {
    category: "Development & Tools",
    skills: ["Android Studio", "Tableau", "Power BI", "Advanced Excel"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "ML for Engineers", provider: "NPTEL" },
  { name: "Data Science using Python", provider: "NPTEL" },
  { name: "Data Analytics using Python", provider: "NPTEL" },
  { name: "Gen AI Workshop", provider: "upGrad" },
  { name: "Intro to Snowflake", provider: "Coursera" },
  { name: "Prompt Design in Vertex AI", provider: "Google Cloud" },
  { name: "Machine Learning Foundations", provider: "Coursera" }
];

export const AWARDS: Award[] = [
  { title: "Hackathon Runner-up", description: "Secured Second Place in the Hackathon organized by SVIT College of Engineering." },
  { title: "FAER Qualified", description: "Project Qualified for the Foundation for Advancement of Education and Research." },
  { title: "Research Publication (Springer)", description: "Paper on SATURN accepted for ICIAH 2025." },
  { title: "Research Publication (IEEE)", description: "Paper on Pediatric Anesthesia Tool published in ICKES 2022." },
  { title: "Chess Representative", description: "Represented college in VTU South Zone level Chess." }
];