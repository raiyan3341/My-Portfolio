import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';

const projects = [
    { 
        id: 1, 
        name: "Course Enrollment Platform", 
        image: "https://static.vecteezy.com/system/resources/previews/000/271/024/non_2x/vector-web-development-web-banner.jpg", 
        tech: ["React", "Node.js", "MongoDB", "Stripe"],
        description: "Comprehensive platform for course enrollment with secure payment integration."
    },
    { 
        id: 2, 
        name: "Library Management System", 
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", 
        tech: ["React", "Firebase", "Tailwind"],
        description: "Comprehensive library management system for books, members, and borrowing records."
    },
    { 
        id: 3, 
        name: "Car Shop", 
        image: "https://media.wired.com/photos/68513f04fb13a197f20e6254/master/w_2560%2Cc_limit/061725_Nissan-Leaf-2025-01.jpg", 
        tech: ["Socket.io", "Node", "Express"],
        description: "Real-time car dealership application with live inventory updates and customer chat support."
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
                        A selection of my recent works where I combine design thinking with technical expertise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={window.innerWidth > 768 ? { y: -10 } : {}}
                            className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[1.75rem] sm:rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl w-full"
                        >
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                                
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/20 backdrop-blur-sm">
                                    <Link to={`/project/${project.id}`} className="bg-white text-slate-950 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold flex items-center gap-2 shadow-xl text-xs sm:text-sm">
                                        View Case Study <ArrowUpRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-5 sm:p-8">
                                <div className="flex gap-2 mb-4 flex-wrap">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[9px] sm:text-[10px] uppercase tracking-widest bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-lg border border-blue-500/20 font-bold">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors truncate sm:whitespace-normal">{project.name}</h3>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                <div className="flex justify-between items-center pt-2">
                                    <div className="flex gap-4">
                                        <Github size={18} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                                        <ExternalLink size={18} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
                                    </div>
                                    <Link to={`/project/${project.id}`} className="text-blue-400 font-bold text-[11px] sm:text-xs flex items-center gap-1 group/link">
                                        LEARN MORE <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;