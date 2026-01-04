// components/SocialLinks/SocialLinks.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'; // react-icons install thakle

const SocialLinks = () => {
    const socials = [
        { name: 'GitHub', url: 'https://github.com/raiyan3341', icon: <FaGithub />, color: 'hover:text-black' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/your-username', icon: <FaLinkedin />, color: 'hover:text-blue-700' },
        { name: 'Twitter', url: 'https://twitter.com/your-username', icon: <FaTwitter />, color: 'hover:text-blue-400' },
        { name: 'Facebook', url: 'https://facebook.com/your-username', icon: <FaFacebook />, color: 'hover:text-blue-600' },
    ];

    return (
        <div className="flex gap-5 text-2xl">
            {socials.map((social) => (
                <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`transition-colors duration-300 ${social.color}`}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;