import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    // এখানে আপনার স্কিলগুলো আইকন এবং ক্যাটাগরি সহ সাজানো হয়েছে
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

    return (
        <section id="skills" className="py-24 relative">
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
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        I specialize in modern web technologies, building scalable and maintainable applications using the latest tools.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                                        <span className="text-blue-400 font-mono text-sm">{skill.level}</span>
                                    </div>
                                    
                                    {/* Professional Progress Bar */}
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

                {/* Optional: Skills Tag Cloud Effect */}
                <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mt-20"
>
    {/* সেকশন ডিভাইডার বা সাব-টাইটেল (ঐচ্ছিক) */}
    <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blue-500"></div>
        <span className="text-slate-500 uppercase tracking-[0.3em] text-4xl font-bold">Other Tools & Tech</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blue-500"></div>
    </div>

    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {[
            { name: "Redux", color: "hover:text-purple-400 hover:border-purple-500/50" },
            { name: "JWT", color: "hover:text-pink-400 hover:border-pink-500/50" },
            { name: "Axios", color: "hover:text-blue-400 hover:border-blue-500/50" },
            { name: "Next.js", color: "hover:text-white hover:border-white/50" },
            { name: "Vite", color: "hover:text-yellow-400 hover:border-yellow-500/50" },
            { name: "Netlify", color: "hover:text-cyan-400 hover:border-cyan-500/50" },
            { name: "Figma", color: "hover:text-orange-400 hover:border-orange-500/50" },
            { name: "Prisma", color: "hover:text-emerald-400 hover:border-emerald-500/50" },
            { name: "Postman", color: "hover:text-orange-500 hover:border-orange-600/50" }
        ].map((tool, index) => (
            <motion.span 
                key={tool.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                }}
                whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                className={`px-6 py-3 bg-slate-900/40 backdrop-blur-md border border-white/5 text-slate-400 rounded-2xl text-sm font-semibold transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${tool.color}`}
            >
                <span className="opacity-50 mr-1 font-mono">#</span>
                {tool.name}
            </motion.span>
        ))}
    </div>
</motion.div>
            </div>
        </section>
    );
};

export default Skills;