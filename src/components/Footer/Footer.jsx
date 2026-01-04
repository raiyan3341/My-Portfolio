import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Facebook, ArrowUp, Heart, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { Icon: Github, href: "https://github.com/raiyan3341", color: "hover:text-white" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/rayan-bin-rafin-99857a363", color: "hover:text-blue-400" },
        { Icon: Twitter, href: "", color: "hover:text-sky-400" },
        { Icon: Facebook, href: "https://www.facebook.com/md.rayan.526875", color: "hover:text-blue-600" }
    ];

    return (
        <footer className="relative mt-20 pb-10 overflow-hidden">
            {/* Decorative Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 pt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-black text-white tracking-tighter">
                            DEV<span className="text-blue-500">PORTFOLIO</span>
                        </h2>
                        <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
                            Building digital experiences that matter. Focused on clean code, modern UI, and user-centric solutions.
                        </p>
                    </div>

                    {/* Quick Links / Socials */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="flex gap-6">
                            {socialLinks.map(({ Icon, href, color }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className={`text-slate-500 transition-colors ${color}`}
                                >
                                    <Icon size={24} />
                                </motion.a>
                            ))}
                        </div>
                        <div className="flex gap-8 text-slate-400 text-sm font-medium uppercase tracking-widest">
                            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                        </div>
                    </div>

                    {/* Back to Top Section */}
                    <div className="flex flex-col items-center md:items-end space-y-4">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-blue-500/10"
                        >
                            <ArrowUp size={24} />
                        </motion.button>
                        <p className="text-slate-500 text-xs tracking-widest uppercase">Back to Top</p>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© 2024 All Rights Reserved. Built with React & Tailwind.</p>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <Heart size={14} className="text-red-500 fill-red-500" />
                        <span>by <span className="text-white font-medium">RAIYAN SHK</span></span>
                    </div>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/10 blur-[100px] -z-10 rounded-full"></div>
        </footer>
    );
};

export default Footer;