import { FaGithub, FaLinkedin,  FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
export default function About() {
  const text = "Hi, I am Harsh";

const [displayedText, setDisplayedText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [index, setIndex] = useState(0);

useEffect(() => {
  const typingSpeed = isDeleting ? 70 : 150;
  const pauseTime = 1000;

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setDisplayedText(text.slice(0, index + 1));
      setIndex(index + 1);
      if (index === text.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      setDisplayedText(text.slice(0, index - 1));
      setIndex(index - 1);
      if (index === 0) {
        setIsDeleting(false);
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timeout);
}, [index, isDeleting]);
  return (
    <div className="relative min-h-[70vh]  text-white flex items-center justify-center px-6 py-8 overflow-hidden">
      
  {/* Decorative Glows */}
  
  {/* Content */}
  <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
    
    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex-shrink-0"
    >
      <img
  id="profile-image"
  src="HarshImage.png" // Make sure this path is correct
  alt="Profile"
  style={{ objectFit: 'cover' }}
  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4  border-cyan-400 hover:shadow-[0_0_12px_#00FFFF] transition-all duration-300"/>

    </motion.div>

    {/* Text + Socials */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >
   <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-wide typewriter-glow h-16">
    <span>{displayedText}</span>
  </h1>

      <p className="text-gray-300 mb-6 text-lg md:text-xl leading-relaxed max-w-xl">
       I am a passionate B.Tech CSE student focused on full-stack web development, aiming to become a top software developer. I love building fast, clean, and user-friendly apps that solve real-world problems.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start gap-6 text-2xl">
        <a href="https://github.com/Harsh77-prog" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/harsh-kumar-116423316/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/hars.hkumar4299/" className="hover:text-blue-400 transition">
          <FaInstagram />
        </a>
      </div>
      <div className="flex justify-center md:justify-start mt-6">
  <a
    href="/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="relative group inline-flex items-center px-8 py-3 bg-[#110d3b] border-2 border-cyan-400 text-cyan-300 font-bold shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0d1b2a] hover:shadow-[0_0_20px_#22d3ee] overflow-hidden ribbon-shape"
  >
    {/* Glowing lightning blur */}
    <span className="absolute inset-0 bg-cyan-500 blur-lg opacity-10 group-hover:opacity-40 transition duration-300 z-0"></span>

    {/* Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2 animate-pulse z-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>

    <span className="z-10">View Resume</span>
  </a>
</div>

      

    </motion.div>
  </div>
</div>

  );
}
