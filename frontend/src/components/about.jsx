import { FaGithub, FaLinkedin,  FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../App.css';
export default function About() {
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
  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
/>

    </motion.div>

    {/* Text + Socials */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-wide">Hii, I am Harsh</h1>
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
    </motion.div>
  </div>
</div>

  );
}
