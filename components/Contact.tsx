import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react'; // Send icon is now imported

const Contact: React.FC = () => {
    // Define the LinkedIn URL directly here
    const linkedinUrl = "https://www.linkedin.com/in/charan-sri-hari-p-2b2b4b229/"; 
    
    // Assuming you have a github property in PERSONAL_INFO
    // const githubUrl = PERSONAL_INFO.github; 

    return (
        <footer className="bg-secondary pt-10 border-t border-slate-800">
            <Section id="contact" className="pb-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                        I am currently looking for opportunities in AI, Machine Learning, and Data Science. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-accent group transition-all flex flex-col items-center">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-white font-medium mb-1">Email</h3>
                            <p className="text-slate-400 text-sm break-all">{PERSONAL_INFO.email}</p>
                        </a>

                        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-accent group transition-all flex flex-col items-center">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-white font-medium mb-1">Phone</h3>
                            <p className="text-slate-400 text-sm">{PERSONAL_INFO.phone}</p>
                        </div>

                        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-accent group transition-all flex flex-col items-center">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-white font-medium mb-1">Location</h3>
                            <p className="text-slate-400 text-sm">{PERSONAL_INFO.location}</p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        {/* 1. LinkedIn Link */}
                        <a 
                            href={linkedinUrl} 
                            className="text-slate-500 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin size={28} />
                        </a>
                        
                        {/* 2. Optional: GitHub Link */}
                        {/* Uncomment and ensure PERSONAL_INFO.github is defined */}
                        {/*
                        <a 
                            href={githubUrl} 
                            className="text-slate-500 hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Send size={28} /> 
                        </a>
                        */}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-800 text-slate-600 text-sm">
                        <p>&copy; {new Date().getFullYear()} Charan Sri Hari P. All rights reserved.</p>
                        <p className="mt-2 text-xs">Built with React & Tailwind CSS</p>
                    </div>
                </div>
            </Section>
        </footer>
    );
};

export default Contact;