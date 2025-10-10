import { motion } from "framer-motion";
import "../App.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiC,
  SiCplusplus,
  SiExpress,
  SiBootstrap,
  SiFigma,
  SiPostman,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import PropTypes from "prop-types";

export default function Skills({ isDark }) {
  const skills = [
    { name: "C", icon: <SiC className="text-blue-500 text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-300 text-4xl" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400 text-4xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-4xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
    { name: "Git", icon: <SiGit className="text-orange-600 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-4xl" /> },
    { name: "Dart", icon: <SiDart className="text-blue-600 text-4xl" /> },
  ];

  return (
    <section className={`relative py-20 px-6 overflow-hidden z-10 ${isDark ? "text-white" : "text-black"}`}>
      {/* Animated Particle Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? "bg-yellow-200" : "bg-black"} opacity-20`}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, 50, -50, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 20 + i,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 50 + 20,
              height: Math.random() * 50 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-14 tracking-tight relative inline-block"
  >
    <span
      className={`relative inline-block text-transparent bg-clip-text ${
        isDark
          ?"bg-gradient-to-r from-yellow-200 via-yellow-100 to-black animate-gold-twinkle"
          : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
      }`}
    >
      💻 My Tech Stack
    </span>

    {/* Glow behind text */}
    <span
      className={`absolute inset-0 blur-xl opacity-30 rounded-lg ${
        isDark ? "bg-yellow-200" : "bg-black/20"
      }`}
    ></span>
  </motion.h2>

  {/* Animated underline */}
  <div
    className={`h-1 w-32 mx-auto rounded-full ${
      isDark
        ? "bg-gradient-to-r from-yellow-200 via-yellow-100 to-black animate-gold-twinkle"
        : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
    }`}
  ></div>
  <br />
       <div className="max-w-6xl mx-auto text-center relative z-10">
  

  {/* Centered Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 justify-items-center">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        className={`relative flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer transition-all ${
          isDark
            ? "bg-black border-2 border-yellow-200"
            : " border-2 border-black hover:bg-slate-200 hover:text-white"
        } w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44`}
        initial={{ rotate: 0, y: 0 }}
        animate={{
          rotate: [0, 5, -5, 5, 0],
          y: [0, -5, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 6 + index * 0.1,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: [0, 10, -10, 0],
          boxShadow: isDark
            ? "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,215,0,0.6)"
            : "0 0 25px rgba(0,0,0,0.8), 0 0 50px rgba(0,0,0,0.5)",
        }}
      >
        {skill.icon}
        <motion.p
          className={`mt-2 text-xs sm:text-sm md:text-sm font-semibold ${
            isDark ? "text-yellow-200" : "text-black"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          {skill.name}
        </motion.p>

        {/* Glowing border ring */}
        <motion.div
          className={`absolute inset-0 rounded-xl pointer-events-none ${
            isDark ? "border border-yellow-200" : "border border-black"
          }`}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10 + index * 0.2, ease: "linear" }}
        />
      </motion.div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}

Skills.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
