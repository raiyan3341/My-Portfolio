import React, { useRef, useState } from 'react'; // useRef এবং useState যোগ করা হয়েছে
import emailjs from '@emailjs/browser'; // emailjs ইমপোর্ট করুন
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Clock, Globe } from 'lucide-react';
import Swal from 'sweetalert2'; // মেসেজ পাঠানোর পর সুন্দর অ্যালার্ট দেওয়ার জন্য (ঐচ্ছিক)

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // আপনার EmailJS ড্যাশবোর্ড থেকে এই ৩টি আইডি পরিবর্তন করুন
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
                e.target.reset(); // ফর্ম খালি করে দেওয়া
            }, (error) => {
                console.log(error.text);
                setIsSending(false);
                alert("Something went wrong. Please try again.");
            });
    };

    const contactData = [
        { icon: <Mail size={24} />, title: "Email", value: "rayanbin13@gmail.com", detail: "Online 24/7", color: "blue" },
        { icon: <MessageCircle size={24} />, title: "WhatsApp", value: "+880 1871093089", detail: "Instant Reply", color: "emerald" },
        { icon: <Clock size={24} />, title: "Working Hours", value: "Mon - Fri", detail: "09:00 AM - 10:00 PM", color: "purple" }
    ];

    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
                            Let's Build <br /> 
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Something Epic</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side: Info (আগের মতোই থাকবে) */}
                    <div className="lg:col-span-5 space-y-4">
                        {contactData.map((item, index) => (
                            <motion.div key={index} whileHover={{ x: 10 }} className="p-6 bg-slate-900/30 backdrop-blur-2xl border border-white/5 rounded-[2rem]">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 bg-slate-800 rounded-2xl text-blue-400 shadow-xl`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-white font-bold text-lg mb-1">{item.value}</p>
                                        <p className="text-blue-400/70 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white">
                            <h3 className="text-2xl font-bold mb-2">Location</h3>
                            <p className="text-blue-100 mb-4 font-medium italic">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Right Side: Modern Glass Form */}
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 bg-white/[0.03] backdrop-blur-3xl p-8 md:p-12 rounded-[3rem] border border-white/10">
                        {/* form এ ref এবং onSubmit যোগ করা হয়েছে */}
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    {/* name প্রপার্টি EmailJS এর জন্য বাধ্যতামূলক */}
                                    <input type="text" name="user_name" required className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent" placeholder="Name" />
                                    <label className="absolute left-0 -top-6 text-slate-500 text-sm">Your Name</label>
                                </div>
                                <div className="relative">
                                    <input type="email" name="user_email" required className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent" placeholder="Email" />
                                    <label className="absolute left-0 -top-6 text-slate-500 text-sm">Your Email</label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea name="message" rows="4" required className="w-full bg-transparent border-b-2 border-slate-700 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors peer placeholder-transparent resize-none" placeholder="Message"></textarea>
                                <label className="absolute left-0 -top-6 text-slate-500 text-sm">Message</label>
                            </div>

                            <motion.button 
                                type="submit"
                                disabled={isSending}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-blue-500/60 shadow-[0_0_40px_rgba(37,99,235,0.3)]'}`}
                            >
                                <span className="relative flex items-center justify-center gap-3">
                                    {isSending ? "Sending..." : "Hit Me Up"} <Send size={20} />
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