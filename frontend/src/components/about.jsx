import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../App.css';
import PropTypes from 'prop-types';

export default function About({ isDark }) {
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
        if (index === text.length) setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index === 0) setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div
      className={`relative min-h-[70vh] flex items-center justify-center px-6 py-8 overflow-hidden ${
        isDark ? ' text-yellow-200' : ' text-black'
      }`}
    >
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
            src="HarshImage.png"
            alt="Profile"
            style={{ objectFit: 'cover' }}
            className={`rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 transition-all duration-300 ${
              isDark
                ? 'border-yellow-200 hover:shadow-[0_0_12px_#FFD700]'
                : 'border-black hover:shadow-[0_0_12px_#000000]'
            }`}
          />
        </motion.div>

        {/* Text + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-4 tracking-wide h-16 typewriter-glow transition-colors duration-300 ${
              isDark ? 'text-black glow-light' : 'text-black glow-light'
            }`}
          >
            <span>{displayedText}</span>
          </h1>

         <p
  className={`mb-6 text-lg md:text-xl leading-relaxed max-w-xl text-justify font-medium tracking-wide 
  transition-all duration-700 ease-in-out 
  ${
    isDark
      ? "text-black animate-goldPulse"
      : "text-black animate-softFade"
  }`}
>
  I am a passionate B.Tech CSE student focused on full-stack web development, aiming to become a top software developer. 
  I love building fast, clean, and user-friendly apps that solve real-world problems.
</p>


          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="https://github.com/Harsh77-prog"
              target="_blank"
              rel="noreferrer"
              className={`hover:scale-110 transition ${
                isDark ? 'hover:text-yellow-200' : 'hover:text-black'
              }`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-kumar-116423316/"
              target="_blank"
              rel="noreferrer"
              className={`hover:scale-110 transition ${
                isDark ? 'hover:text-yellow-200' : 'hover:text-black'
              }`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/hars.hkumar4299/"
              className={`hover:scale-110 transition ${
                isDark ? 'hover:text-yellow-200' : 'hover:text-black'
              }`}
            >
              <FaInstagram />
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group inline-flex items-center px-8 py-3 font-bold shadow-lg transition-all duration-300 overflow-hidden ribbon-shape ${
                isDark
                  ? 'bg-black border-2 border-yellow-200 text-yellow-100 hover:bg-yellow-200 hover:text-black hover:shadow-[0_0_20px_#FFD700]'
                  : 'bg-slate-300 border-2 border-black text-black hover:bg-black hover:text-white hover:shadow-[0_0_20px_#000000]'
              }`}
            >
              <span className="absolute inset-0 blur-lg opacity-10 group-hover:opacity-40 transition duration-300 z-0"></span>
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

// 🔹 Add prop-types validation
About.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
