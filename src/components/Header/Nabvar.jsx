import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Download } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname === '/') {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.location.href = `/#${id}`;
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled 
                ? 'bg-slate-950/40 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between h-20 items-center">
                    
                    {/* Logo Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl group-hover:rotate-[360deg] transition-transform duration-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                            <Code2 className="text-slate-950 w-6 h-6 font-bold" />
                        </div>
                        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
                            DEV<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">PORTFOLIO</span>
                        </Link>
                    </motion.div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.button 
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.id)}
                                className="relative px-5 py-2 text-slate-400 font-semibold transition-all hover:text-blue-400 group"
                            >
                                {link.name}
                                {/* Professional Hover Underline */}
                                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </motion.button>
                        ))}
                        
                        {/* Download Resume Button */}
                        <motion.a
                            href="/your-resume.pdf"
                            download
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(37, 99, 235, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="ml-6 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)]"
                        >
                            <Download size={18} />
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-3xl border-b border-white/10"
                    >
                        <div className="px-6 py-10 space-y-6">
                            {navLinks.map((link) => (
                                <button 
                                    key={link.name} 
                                    onClick={() => scrollToSection(link.id)}
                                    className="block w-full text-left text-2xl font-bold text-slate-300 hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <a 
                                href="/your-resume.pdf" 
                                download 
                                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold"
                            >
                                <Download size={20} /> Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;