import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Facebook, Download, Sparkles } from 'lucide-react';
import myProfileImage from '../assets/Gemini_Generated_Image_jaueo7jaueo7jaue.png';

const Hero = () => {
    const socialLinks = [
        { Icon: Github, color: 'hover:bg-slate-700/60 hover:text-white', url: 'https://github.com/raiyan3341' },
        { Icon: Twitter, color: 'hover:bg-sky-600/60 hover:text-white', url: '' },
        { Icon: Facebook, color: 'hover:bg-blue-600/60 hover:text-white', url: 'https://www.facebook.com/md.rayan.526875' },
        { Icon: Linkedin, color: 'hover:bg-blue-700/60 hover:text-white', url: 'https://www.linkedin.com/in/rayan-bin-rafin-99857a363' }
    ];

    const techBadges = [
        { name: "Node.js", color: "border-green-500/40 text-green-400 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]" },
        { name: "React", color: "border-cyan-500/40 text-cyan-400 bg-cyan-500/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]" },
        { name: "MongoDB", color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]" },
        { name: "Express", color: "border-teal-500/40 text-teal-300 bg-teal-500/5 shadow-[0_0_15px_rgba(20,184,166,0.1)]" },
        { name: "GraphQL", color: "border-pink-500/40 text-pink-400 bg-pink-500/5 shadow-[0_0_15px_rgba(236,72,153,0.1)]" },
        { name: "SQL", color: "border-blue-500/40 text-blue-400 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]" }
    ];

    const words = ["Professional Full Stack Developer", "Problem Solver", "Innovative Creator", "Technology Enthusiast"];
    const [index, setIndex] = useState(0);
    const [subText, setSubText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter core logic matching image text
    useEffect(() => {
        let timer;
        const currentFullWord = words[index];
        
        if (!isDeleting && subText === currentFullWord) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && subText === '') {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
        } else {
            timer = setTimeout(() => {
                setSubText(currentFullWord.substring(0, isDeleting ? subText.length - 1 : subText.length + 1));
            }, isDeleting ? 40 : 85);
        }
        return () => clearTimeout(timer);
    }, [subText, isDeleting, index]);

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 pt-20 pb-12 px-6 max-w-7xl mx-auto relative overflow-hidden select-none">
            
            {/* Ambient Background Glow System */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

            {/* Left Column: Data Grid Wrapper */}
            <div className="flex-1 space-y-8 z-10 w-full text-center md:text-left flex flex-col items-center md:items-start">
                
                <div className="space-y-4 w-full">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
                        Hi, I am <br />
                        <span className="text-slate-200 block mt-1 font-black">Professional Full Stack Developer</span>
                        <span className="text-slate-400 block font-bold text-2xl sm:text-3xl md:text-4xl mt-2">Problem Solver</span>
                        <span className="text-slate-500 block font-semibold text-xl sm:text-2xl md:text-3xl mt-1">Innovative Creator</span>
                        <span className="text-slate-600 block font-medium text-lg sm:text-xl md:text-2xl mt-1">Technology Enthusiast</span>
                    </h2>
                </div>

                {/* Sub Dynamic Bracket Terminal Line from Demo */}
                <div className="font-mono text-xs sm:text-sm tracking-widest uppercase text-slate-500 flex items-center gap-2">
                    I AM A <span className="text-cyan-400 font-bold bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 animate-pulse">[{subText || "LOADING..."}]</span>
                </div>

                {/* Available for Projects Badge Layout */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                    <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                    Available for Projects
                    <Sparkles size={12} className="text-cyan-400 animate-spin-slow" />
                </div>

                {/* Matrix Glowing Badges Block */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2.5 max-w-xl">
                    {techBadges.map((badge, idx) => (
                        <span 
                            key={idx} 
                            className={`px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide font-sans backdrop-blur-md cursor-default transition-all duration-300 hover:scale-105 ${badge.color}`}
                        >
                            {badge.name}
                        </span>
                    ))}
                </div>

                {/* Floating Social Control Icons (Image Glass Effect) */}
                <div className="flex gap-4 pt-2">
                    {socialLinks.map(({ Icon, color, url }, i) => (
                        <div key={i} className="relative group">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 flex items-center justify-center bg-slate-900/40 backdrop-blur-md text-slate-400 rounded-xl border border-white/5 transition-all duration-300 shadow-xl ${color} group-hover:-translate-y-1`}
                            >
                                <Icon size={20} />
                            </a>
                            {/* Reflection Mirror effect under links */}
                            <div className="w-12 h-8 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity blur-xs pointer-events-none transform scale-y-[-1]" />
                        </div>
                    ))}
                </div>

                {/* Bottom Main Action CTA Trigger Frame */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 w-full">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(37,99,235,0.25)] hover:shadow-[0_0_35px_rgba(37,99,235,0.45)] border border-white/10 transition-all duration-300 transform active:scale-95">
                        Let's Connect
                    </button>
                    <button className="px-6 py-3 bg-slate-900/60 hover:bg-slate-900 text-slate-300 rounded-xl text-xs font-bold uppercase tracking-wider border border-slate-800 shadow-xl transition-all duration-300 transform active:scale-95">
                        Explore Projects
                    </button>
                </div>
            </div>

            {/* Right Column: Holographic Glass Orb Profile Matrix */}
            <div className="flex-1 flex justify-center items-center w-full relative pt-8 md:pt-0">
                
                {/* Tech Constellation Structural Rings Layout */}
                <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] border border-cyan-500/15 rounded-full animate-spin-[50s] linear infinity pointer-events-none" />
                <div className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[420px] lg:h-[420px] border border-dashed border-blue-500/10 rounded-full animate-spin-[30s] linear infinity pointer-events-none" />

                {/* Main Dynamic Glowing Orb Canvas */}
                <div className="relative z-10 p-4 bg-gradient-to-b from-white/[0.08] to-transparent backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    
                    {/* Rainbow Spectral Gradient Halo Edge Ring from image */}
                    <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500/40 to-purple-500 opacity-60 animate-pulse pointer-events-none -z-10" />
                    
                    <div className="overflow-hidden rounded-full w-56 h-56 sm:w-68 sm:h-68 lg:w-[360px] lg:h-[360px] bg-slate-950 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] border border-slate-800">
                        <img 
                            src={myProfileImage} 
                            alt="Professional Me" 
                            className="w-full h-full object-cover mix-blend-lighten opacity-90 transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>

                {/* Spark Node Flashes */}
                <div className="absolute top-1/4 right-12 w-2 h-2 bg-cyan-400 rounded-full blur-[1px] animate-ping" />
                <div className="absolute bottom-1/4 left-10 w-1.5 h-1.5 bg-blue-500 rounded-full blur-[1px] animate-pulse" />
            </div>

        </section>
    );
};

export default Hero;