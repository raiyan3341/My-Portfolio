import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Clock, Globe } from 'lucide-react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const SERVICE_ID = "service_wc3396e"; 
        const TEMPLATE_ID = "template_vwc136f";
        const PUBLIC_KEY = "g0TSIATaEi3KGGOu3";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsSending(false);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonColor: '#2563eb'
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                alert("Something went wrong. Please try again.");
            });
    };

    const contactData = [
        { icon: <Mail size={22} />, title: "Email", value: "rayanbin13@gmail.com", detail: "Online 24/7" },
        { icon: <MessageCircle size={22} />, title: "WhatsApp", value: "+880 1871093089", detail: "Instant Reply" },
        { icon: <Clock size={22} />, title: "Working Hours", value: "Mon - Fri", detail: "09:00 AM - 10:00 PM" }
    ];

    return (
        <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
                            Let's Build <br /> 
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Something Epic</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <div className="lg:col-span-5 space-y-4 w-full">
                        {contactData.map((item, index) => (
                            <motion.div 
                                key={index} 
                                whileHover={{ x: window.innerWidth > 768 ? 10 : 0 }} 
                                className="p-5 sm:p-6 bg-slate-900/30 backdrop-blur-2xl border border-white/5 rounded-[1.5rem] sm:rounded-[2rem] w-full min-w-0"
                            >
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="p-3.5 sm:p-4 bg-slate-800 rounded-xl sm:rounded-2xl text-blue-400 shadow-xl shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0 break-words">
                                        <h4 className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-white font-bold text-base sm:text-lg mb-1 truncate sm:whitespace-normal">{item.value}</p>
                                        <p className="text-blue-400/70 text-xs sm:text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[1.75rem] sm:rounded-[2.5rem] text-white w-full">
                            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Location</h3>
                            <p className="text-blue-100 text-sm sm:text-base font-medium italic">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Right Side: Modern Glass Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        className="lg:col-span-7 bg-white/[0.03] backdrop-blur-3xl p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/10 w-full"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-8 md:space-y-10 pt-4 md:pt-0">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                                <div className="relative">
                                    <input type="text" name="user_name" required className="w-full bg-transparent border-b-2 border-slate-700 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent text-sm sm:text-base" placeholder="Name" />
                                    <label className="absolute left-0 -top-5 text-slate-500 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-500">Your Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" name="user_email" required className="w-full bg-transparent border-b-2 border-slate-700 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent text-sm sm:text-base" placeholder="Email" />
                                    <label className="absolute left-0 -top-5 text-slate-500 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-500">Your Email</label>
                                </div>
                            </div>
                            <div className="relative pt-2">
                                <textarea name="message" rows="4" required className="w-full bg-transparent border-b-2 border-slate-700 py-2.5 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent resize-none text-sm sm:text-base" placeholder="Message"></textarea>
                                <label className="absolute left-0 -top-4 text-slate-500 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-500">Message</label>
                            </div>

                            <motion.button 
                                type="submit"
                                disabled={isSending}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`w-full rounded-xl sm:rounded-2xl bg-blue-600 px-6 py-4 sm:px-8 sm:py-5 font-bold text-white text-sm sm:text-base transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-blue-500/60 shadow-[0_0_40px_rgba(37,99,235,0.3)]'}`}
                            >
                                <span className="relative flex items-center justify-center gap-3">
                                    {isSending ? "Sending..." : "Hit Me Up"} <Send size={18} />
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;