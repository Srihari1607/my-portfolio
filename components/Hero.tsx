import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mt-4 mb-4 leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 mb-6 font-light">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-accent hover:bg-accentHover text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="px-6 py-3 border border-slate-600 hover:border-accent text-slate-300 hover:text-accent rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-accent" />
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent" />
              {PERSONAL_INFO.phone}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-600 rounded-2xl rotate-6 opacity-20 animate-pulse"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex items-center justify-center">
              {/* Placeholder for Profile Image */}
              <img 
                src={`https://picsum.photos/800/800?grayscale&blur=2`} 
                alt="Profile Placeholder" 
                className="w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                  <span className="text-6xl font-thin mb-4">CS</span>
                  <span className="uppercase tracking-widest text-xs">AI Engineer</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;