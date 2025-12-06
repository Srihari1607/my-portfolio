import React from 'react';
import Section from './Section';
import { EDUCATION, AWARDS } from '../constants';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Education & Achievements">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-accent" /> Education
          </h3>
          <div className="space-y-8 relative border-l border-slate-700 ml-3 pl-8 pb-4">
             {EDUCATION.map((edu, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                 >
                    <span className="absolute -left-[41px] top-0 w-5 h-5 bg-secondary border-2 border-accent rounded-full"></span>
                    <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
                    <p className="text-accent mb-1">{edu.degree}</p>
                    <p className="text-slate-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-slate-300">{edu.details}</p>
                 </motion.div>
             ))}
          </div>
        </div>

        {/* Awards Column */}
        <div>
           <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Honors & Awards
          </h3>
           <div className="space-y-4">
              {AWARDS.map((award, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 bg-secondary border border-slate-700 rounded-xl hover:border-yellow-500/50 transition-colors"
                  >
                     <h4 className="text-lg font-medium text-slate-200 mb-1">{award.title}</h4>
                     <p className="text-slate-400 text-sm">{award.description}</p>
                  </motion.div>
              ))}
           </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;