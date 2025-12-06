import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layers, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-secondary border border-slate-700 rounded-xl overflow-hidden hover:border-accent transition-colors duration-300 flex flex-col"
          >
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {index === 0 ? <Zap className="text-accent" size={24} /> : 
                   index === 1 ? <Layers className="text-blue-400" size={24} /> : 
                   <Code className="text-purple-400" size={24} />}
                </div>
                {/* Mock Links since not provided in resume */}
                <div className="flex gap-2">
                   <a href="#" className="text-slate-500 hover:text-white transition-colors" title="View Code (Mock)">
                     <Github size={20} />
                   </a>
                   <a href="#" className="text-slate-500 hover:text-white transition-colors" title="View Project (Mock)">
                     <ExternalLink size={20} />
                   </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-accent uppercase tracking-wider mb-3 font-semibold">
                {project.type}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {project.impact && (
                <div className="mb-4 p-3 bg-slate-900/50 rounded border-l-2 border-accent">
                    <p className="text-slate-300 text-xs italic">"{project.impact}"</p>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-slate-900/30 border-t border-slate-700">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-2 py-1 bg-slate-800 text-slate-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;