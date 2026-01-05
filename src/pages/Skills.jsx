import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillList = [
        { name: "React", level: "90%", color: "from-blue-400 to-blue-600", icon: "⚛️" },
        { name: "Node.js", level: "85%", color: "from-green-400 to-green-600", icon: "🟢" },
        { name: "MongoDB", level: "80%", color: "from-emerald-500 to-green-700", icon: "🍃" },
        { name: "Tailwind CSS", level: "95%", color: "from-cyan-400 to-blue-500", icon: "🎨" },
        { name: "JavaScript", level: "92%", color: "from-yellow-400 to-orange-500", icon: "🟨" },
        { name: "Express.js", level: "85%", color: "from-gray-400 to-slate-600", icon: "🚀" },
        { name: "Firebase", level: "75%", color: "from-orange-400 to-red-500", icon: "🔥" },
        { name: "GitHub", level: "88%", color: "from-purple-400 to-indigo-600", icon: "🐙" }
    ];

    const otherTools = [
        { name: "Redux", color: "hover:text-purple-400" },
        { name: "JWT", color: "hover:text-pink-400" },
        { name: "Axios", color: "hover:text-blue-400" },
        { name: "Next.js", color: "hover:text-white" },
        { name: "Vite", color: "hover:text-yellow-400" },
        { name: "Netlify", color: "hover:text-cyan-400" },
        { name: "Figma", color: "hover:text-orange-400" },
        { name: "Prisma", color: "hover:text-emerald-400" },
        { name: "Postman", color: "hover:text-orange-500" },
        { name: "React Query", color: "hover:text-red-400" },
        { name: "TypeScript", color: "hover:text-blue-500" },
        { name: "Vercel", color: "hover:text-white" }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Heading */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Technical <span className="text-blue-500">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        I specialize in modern web technologies, building scalable and maintainable applications using the latest tools.
                    </p>
                </motion.div>

                {/* Skills Progress Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillList.map((skill, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all shadow-xl group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-3xl p-3 bg-slate-800 rounded-2xl group-hover:rotate-12 transition-transform shadow-inner">
                                    {skill.icon}
                                </div>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-end mb-2">
                                        <h3 className="text-xl font-bold text-white tracking-tight">{skill.name}</h3>
                                        <span className="text-blue-400 font-mono text-sm font-bold">{skill.level}</span>
                                    </div>
                                    <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden p-[2px] border border-white/5">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Enhanced Infinite Marquee Section --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-32 relative"
                >
                    {/* Background Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-blue-600/5 blur-[100px] pointer-events-none"></div>

                    {/* Section Label */}
                    <div className="flex flex-col items-center justify-center gap-4 mb-12">
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "80px" }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        />
                        <h3 className="text-slate-300 uppercase tracking-[0.4em] text-xs md:text-sm font-bold bg-slate-900/50 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                            Stack <span className="text-blue-500">&</span> Ecosystem
                        </h3>
                    </div>

                    {/* Infinite Marquee Slider */}
                    <div className="relative flex overflow-x-hidden group">
                        <motion.div 
                            animate={{ x: ['0%', '-50%'] }}
                            transition={{ 
                                ease: "linear", 
                                duration: 20, 
                                repeat: Infinity 
                            }}
                            className="flex gap-6 pr-6 whitespace-nowrap py-10"
                        >
                            {/* Double the array for seamless looping */}
                            {[...otherTools, ...otherTools].map((tool, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ 
                                        y: -8,
                                        scale: 1.05,
                                        backgroundColor: "rgba(30, 41, 59, 0.8)",
                                        borderColor: "rgba(59, 130, 246, 0.5)"
                                    }}
                                    className={`px-8 py-4 bg-slate-900/40 backdrop-blur-md border border-white/5 text-slate-300 rounded-2xl text-base font-bold transition-all cursor-pointer shadow-xl flex items-center gap-3 ${tool.color}`}
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                                    {tool.name}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Edge Fading Gradients */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
                    </div>

                    <p className="text-center text-slate-500 text-sm mt-8 font-mono italic">
                        Exploring new technologies every day...
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;