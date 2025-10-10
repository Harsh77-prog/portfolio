import { FaGamepad, FaCameraRetro,
  FaPlaneDeparture,
  FaCamera,
  FaCode,
  FaPaintBrush,
  FaPuzzlePiece,
  FaMusic,  } from "react-icons/fa";
import '../App.css';
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Hobbies({ isDark }) {
  const hobbies = [
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaMusic />, label: "Music" },
    { icon: <FaCameraRetro />, label: "Photo Editing" },
    { icon: <FaPlaneDeparture />, label: "Traveling" },
    { icon: <FaCamera />, label: "Photography" },
    { icon: <FaCode />, label: "Coding" },
    { icon: <FaPaintBrush />, label: "Crafting" },
    { icon: <FaPuzzlePiece />, label: "Puzzles" },
  ];

  return (
    <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "text-white" : "text-black"}`}>
      {/* Floating Background Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDark ? "bg-yellow-200" : "bg-black"} opacity-20`}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 25 + i,
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 60 + 30,
              height: Math.random() * 60 + 30,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold mb-14 tracking-tight ${
            isDark
              ? "bg-gradient-to-r from-yellow-200 to-yellow-300 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text"
          }`}
        >
          ✦ My Hobbies
        </motion.h1>

        <p className={`text-sm mb-10 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Explore the things I do when I am not coding
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 50, scale: 0.8 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  animate={{
    y: [0, -5, 5, 0],
    x: [0, 5, -5, 0],
    rotate: [0, 3, -3, 0],
  }}
  transition={{
    y: { repeat: Infinity, duration: 6 + index * 0.1, ease: "easeInOut", repeatType: "loop" },
    x: { repeat: Infinity, duration: 6 + index * 0.1, ease: "easeInOut", repeatType: "loop" },
    rotate: { repeat: Infinity, duration: 8 + index * 0.1, ease: "easeInOut", repeatType: "loop" },
  }}
  whileHover={{
    scale: 1.2,
    rotate: 0,
    boxShadow: isDark
      ? "0 0 20px rgba(255,215,0,0.6), 0 0 40px rgba(255,215,0,0.4)"
      : "0 0 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.4)",
  }}
  className={`relative flex flex-col items-center justify-center gap-2 p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
    isDark ? "bg-black border-yellow-200 text-white" : "bg-white border-black text-black"
  }`}
>
  <div className="text-3xl md:text-4xl">{hobby.icon}</div>
  <p className="text-sm font-semibold">{hobby.label}</p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

Hobbies.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
