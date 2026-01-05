import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Heart, MapPin, Briefcase, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                
                {/* Section Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        About <span className="text-blue-500">Me</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Story & Bio (7 Columns) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl relative group">
                            <div className="absolute -top-4 -left-4 bg-blue-600 p-3 rounded-2xl shadow-lg">
                                <User className="text-white" size={28} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mt-2 mb-4 italic">"Solving problems through clean code."</h3>
                            
                            <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                My journey into the world of programming started back in <span className="text-blue-400 font-bold">2025</span>. What began as a curiosity about how websites work quickly evolved into a career passion. I specialize in the <span className="text-white font-semibold">MERN Stack</span>, where I build robust backends and pixel-perfect frontends.
                            </p>
                            
                            <p className="text-slate-300 leading-relaxed text-lg">
                                I don't just write code; I build digital solutions that prioritize <span className="text-cyan-400">User Experience (UX)</span> and <span className="text-cyan-400">Performance</span>. My goal is to bridge the gap between complex backend logic and beautiful, intuitive interfaces.
                            </p>
                        </div>

                        {/* Education Card */}
                        <div className="bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400 border border-cyan-500/20">
                                    <GraduationCap size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:shadow-[0_0_10px_rgba(37,99,235,1)] after:absolute after:left-[5px] after:top-6 after:w-[2px] after:h-full after:bg-white/10">
                                    <h4 className="text-lg font-bold text-white">B.Sc in Computer Science & Engineering</h4>
                                    <p className="text-blue-400 font-medium">Northern University Bangladesh(NUB)</p>
                                    <p className="text-slate-500 text-sm">2024 - 2028</p>
                                </div>
                                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-slate-600 before:rounded-full">
                                    <h4 className="text-lg font-bold text-white">Higher Secondary Certificate</h4>
                                    <p className="text-slate-400">Science Group</p>
                                    <p className="text-slate-500 text-sm">Graduated: 2023</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Quick Info & Hobbies (5 Columns) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Quick Info Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: Briefcase, label: "Role", value: "Junior Full Stack Developer", color: "text-blue-400" },
                                { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", color: "text-red-400" },
                                { icon: Code2, label: "Interests", value: "Full Stack & System Design", color: "text-emerald-400" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 bg-white/5 backdrop-blur-md rounded-[1.5rem] border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 group">
                                    <div className={`p-3 rounded-xl bg-slate-800 ${item.color} group-hover:scale-110 transition-transform`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase tracking-widest">{item.label}</p>
                                        <p className="text-white font-bold">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hobbies Section */}
                        <div className="p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl">
                            <div className="flex items-center gap-4 mb-6">
                                <Heart className="text-pink-500 fill-pink-500/20" size={24} />
                                <h3 className="text-2xl font-bold text-white">Beyond Coding</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {['Football', 'Photography', 'Gaming', 'Traveling', 'Open Source'].map((hobby) => (
                                    <span key={hobby} className="px-4 py-2 bg-slate-900/60 text-slate-200 rounded-xl text-sm border border-white/5 hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                                        {hobby}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-slate-400 text-sm italic">
                                "I believe a balanced life with outdoor hobbies makes for a more creative and focused mind."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;