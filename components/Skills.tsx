import React from 'react';
import Section from './Section';
import { SKILLS, CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="bg-secondary/30">
        <Section id="skills" title="Skills & Certifications">
        <div className="grid md:grid-cols-2 gap-12">
            
            {/* Technical Skills */}
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    Technical Expertise
                </h3>
                <div className="space-y-6">
                    {SKILLS.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-secondary p-5 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
                        >
                            <h4 className="text-accent font-medium mb-3">{category.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded border border-slate-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certifications */}
            <div>
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                    Certifications
                </h3>
                <div className="grid gap-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-colors"
                        >
                            <div className="mt-1">
                                <Award className="text-yellow-500" size={18} />
                            </div>
                            <div>
                                <h4 className="text-slate-200 font-medium">{cert.name}</h4>
                                <p className="text-slate-500 text-sm">{cert.provider}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </Section>
    </div>
  );
};

export default Skills;