import React, { useEffect } from 'react'; // ১. useEffect ইমপোর্ট করুন
import { Outlet, useLocation } from 'react-router'; // ২. useLocation ইমপোর্ট করুন
import myBgImage from '../../assets/Gemini_Generated_Image_ny0jm2ny0jm2ny0j.png'; 
import Navbar from '../../components/Header/Nabvar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    // ৩. স্ক্রল টু টপ লজিক এখানে লিখুন
    const { pathname } = useLocation();

    useEffect(() => {
        // প্রতিবার যখন pathname (পেজ) পরিবর্তন হবে, উইন্ডো স্ক্রল হয়ে উপরে যাবে
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative min-h-screen selection:bg-blue-500 selection:text-white bg-slate-950">
            {/* ব্যাকগ্রাউন্ড লেয়ার */}
            <div 
                className="fixed top-0 left-0 w-full h-screen pointer-events-none" 
                style={{
                    backgroundImage: `url(${myBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 20%',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(3px) brightness(0.25)', 
                    zIndex: 0,
                }}
            ></div>

            {/* মেইন কন্টেন্ট */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Root;