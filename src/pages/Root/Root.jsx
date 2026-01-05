import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import myBgImage from '../../assets/Gemini_Generated_Image_ny0jm2ny0jm2ny0j.png'; 
import Navbar from '../../components/Header/Nabvar';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="relative min-h-screen selection:bg-blue-500 selection:text-white bg-slate-950">
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