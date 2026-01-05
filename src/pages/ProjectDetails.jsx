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
            <div className="text-white text-center py-20">
                <h2 className="text-2xl">Project Not Found!</h2>
                <Link to="/" className="text-blue-400 mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-12 group">
                    <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Showcase
                </Link>

                <header className="mb-16">
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-8"
                    >
                        {project.name}
                    </motion.h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2">
                            <img src={project.image} alt={project.name} className="w-full rounded-[2.5rem] shadow-3xl border border-white/5" />
                        </div>
                        <div className="space-y-8 bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 ">
                            <div>
                                <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[11px] font-bold border border-blue-500/20">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href={project.liveLink} target="_blank" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 hover:scale-[1.02] transition-transform">
                                    <Globe size={18} /> Live Preview
                                </a>
                                <a href={project.githubLink} target="_blank" className="flex items-center justify-center gap-2 bg-white/5 text-white py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition-colors">
                                    <Github size={18} /> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500" /> Project Overview
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
                        </div>

                        <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
                            <h3 className="text-xl font-bold text-amber-500 mb-3 flex items-center gap-2">
                                <AlertTriangle size={20} /> Challenges Faced
                            </h3>
                            <p className="text-slate-300 italic">"{project.challenges}"</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 bg-blue-600/5 border border-blue-600/20 rounded-3xl h-full">
                            <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                                <Lightbulb size={20} /> Future Roadmap
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{project.futurePlans}</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;