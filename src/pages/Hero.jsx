import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Facebook, Download, Sparkles } from 'lucide-react';
import myProfileImage from '../assets/Gemini_Generated_Image_jaueo7jaueo7jaue.png';

const Hero = () => {
    // আপনার SocialLinks.jsx ফাইল থেকে ডাটাগুলো এখানে ইন্টিগ্রেট করা হয়েছে
    const socialLinks = [
        { Icon: Github, color: 'hover:bg-slate-700', url: 'https://github.com/raiyan3341' },
        { Icon: Linkedin, color: 'hover:bg-blue-700', url: 'https://www.linkedin.com/in/rayan-bin-rafin-99857a363' },
        { Icon: Twitter, color: 'hover:bg-sky-600', url: '' },
        { Icon: Facebook, color: 'hover:bg-blue-800', url: 'https://www.facebook.com/md.rayan.526875' }
    ];

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-16 mt-10 relative overflow-hidden">
            
            {/* Background Decorative Light Effect */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
            
            <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 space-y-8 z-10"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm">
                    <Sparkles size={16} />
                    <span>Available for Projects</span>
                </div>

                <div className="space-y-4">
                    <h2 className="text-slate-400 font-medium text-xl tracking-widest uppercase">Hi, I am</h2>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
                        Professional <br />
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Full Stack Developer
                            </span>
                            <motion.span 
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="absolute -bottom-2 left-0 h-1.5 bg-blue-600/30 rounded-full"
                            />
                        </span>
                    </h1>
                </div>

                <p className="text-slate-400 text-xl max-w-xl leading-relaxed">
                    Crafting <span className="text-white font-medium">high-performance</span> digital experiences with precision. I turn complex problems into elegant, scalable solutions.
                </p>

                {/* Social Links Section - Fixed with actual URLs */}
                <div className="flex gap-5">
                    {socialLinks.map(({ Icon, color, url }, index) => (
                        <motion.a
                            key={index}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * index }}
                            whileHover={{ y: -8, scale: 1.1 }}
                            className={`p-4 bg-slate-800/40 backdrop-blur-md rounded-2xl text-slate-300 border border-white/5 shadow-xl transition-all ${color} hover:text-white hover:border-white/20`}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-wrap gap-6 pt-4">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl transition-all group"
                    >
                        <Download size={22} className="group-hover:animate-bounce" /> 
                        Get Resume
                    </motion.button>
                </div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2 }}
                className="relative flex-1 flex justify-center items-center"
            >
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] border-2 border-dashed border-blue-500/30 rounded-full"
                />
                <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-[80px] rounded-full animate-pulse"></div>
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 p-3 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="overflow-hidden rounded-full w-64 h-64 md:w-100 md:h-100 border-4 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        <img 
                            src={myProfileImage} 
                            alt="Professional Me" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                    <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-4 right-10 bg-slate-900 border border-blue-500 px-6 py-2 rounded-full shadow-lg"
                    >
                        <p className="text-blue-400 font-bold text-sm">2+ Years Exp.</p>
                    </motion.div>
                </motion.div>
                <div className="absolute top-10 right-20 w-4 h-4 bg-cyan-400 rounded-full blur-sm animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-pulse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;