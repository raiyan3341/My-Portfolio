// pages/Home/Home.jsx
import React from 'react';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Hero from './Hero';

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};

export default Home;