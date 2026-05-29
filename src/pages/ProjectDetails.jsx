import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { Github, Globe, CheckCircle2, AlertTriangle, Lightbulb, ChevronLeft } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();

    const projectsData = {
        "1": {
            name: "Course Enrollment Platform",
            image: "https://static.vecteezy.com/system/resources/previews/000/271/024/non_2x/vector-web-development-web-banner.jpg",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Redux Toolkit", "Stripe API"],
            description: "A comprehensive course enrollment platform that allows users to browse, select, and enroll in courses with secure payment integration.",
            liveLink: "https://course-enrollment-frontend-5abi.vercel.app",
            githubLink: "https://github.com/raiyan3341/Course-Enrollment-frontend",
            challenges: "Ensuring data consistency during high traffic and implementing secure payment processing with Stripe.",
            futurePlans: "Adding AI-driven product recommendations and expanding payment options."
        },
        "2": {
            name: "Library Management System",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
            techStack: ["React", "Firebase", "Tailwind CSS", "Context API"],
            description: "A comprehensive library management system that allows librarians to manage books, members, and borrowing records.",
            liveLink: "https://library-management-system-frontend-pi.vercel.app",
            githubLink: "https://github.com/raiyan3341/Library-management-system-Frontend",
            challenges: " Designing an intuitive UI for complex data management and ensuring real-time updates with Firebase.",
            futurePlans: " Implementing advanced search and filtering options for books and members."
        },
        "3": {
            name: "Car Shop",
            image: "https://media.wired.com/photos/68513f04fb13a197f20e6254/master/w_2560%2Cc_limit/061725_Nissan-Leaf-2025-01.jpg",
            techStack: ["Socket.io", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            description: "A real-time car dealership application that provides live inventory updates and customer chat support to enhance the buying experience.",
            liveLink: "https://assignment-10-bb401.web.app",
            githubLink: "https://github.com/raiyan3341/Car-Shop-Frontend",
            challenges: "Managing real-time data synchronization and ensuring low latency for chat functionality.",
            futurePlans: "Adding AI-powered car recommendations and a virtual showroom experience."
        }
    };

    const project = projectsData[id];

    if (!project) {
        return (
            <div className="text-white text-center py-20 px-4">
                <h2 className="text-2xl font-bold">Project Not Found!</h2>
                <Link to="/" className="text-blue-400 mt-4 inline-block hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8 md:mb-12 group text-sm sm:text-base">
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" size={18} /> Back to Showcase
                </Link>

                <header className="mb-12 md:mb-16">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 break-words leading-tight"
                    >
                        {project.name}
                    </motion.h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
                        <div className="lg:col-span-2 w-full">
                            <img src={project.image} alt={project.name} className="w-full h-auto rounded-[1.5rem] sm:rounded-[2.5rem] shadow-3xl border border-white/5 object-cover" />
                        </div>
                        <div className="space-y-6 md:space-y-8 bg-white/[0.02] p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 w-full">
                            <div>
                                <h4 className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border border-blue-500/20">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pt-2">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-lg shadow-blue-600/20 hover:scale-[1.01] transition-transform">
                                    <Globe size={16} sm:size={18} /> Live Preview
                                </a>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/5 text-white py-3.5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base border border-white/10 hover:bg-white/10 transition-colors">
                                    <Github size={16} sm:size={18} /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
                    <div className="md:col-span-2 space-y-6 md:space-y-8 w-full">
                        <div className="min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500 shrink-0" size={22} /> Project Overview
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed break-words">{project.description}</p>
                        </div>

                        <div className="p-5 sm:p-8 bg-amber-500/5 border border-amber-500/20 rounded-2xl sm:rounded-3xl w-full">
                            <h3 className="text-lg sm:text-xl font-bold text-amber-500 mb-2 sm:mb-3 flex items-center gap-2">
                                <AlertTriangle size={18} sm:size={20} className="shrink-0" /> Challenges Faced
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base italic break-words">"{project.challenges}"</p>
                        </div>
                    </div>

                    <div className="space-y-6 w-full">
                        <div className="p-5 sm:p-8 bg-blue-600/5 border border-blue-600/20 rounded-2xl sm:rounded-3xl h-full w-full">
                            <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 sm:mb-3 flex items-center gap-2">
                                <Lightbulb size={18} sm:size={20} className="shrink-0" /> Future Roadmap
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed break-words">{project.futurePlans}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;