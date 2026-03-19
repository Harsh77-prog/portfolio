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
import Reveal, { RevealGroup, RevealItem, CREAM_EASE } from "./Reveal";

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
    <section className={`fx-section ${isDark ? "text-white" : "text-slate-900"}`}>
      <div className="fx-grid" />
      <div className="fx-orb" style={{ top: "-120px", left: "15%" }} />
      <div className="fx-orb fx-orb-2" style={{ bottom: "-140px", right: "10%" }} />

      <div className="fx-shell relative z-10 text-center">
        <RevealGroup as="div">
          <RevealItem as="h1" className="fx-title" variant="tilt">
            My Hobbies
          </RevealItem>
          <RevealItem as="p" className="fx-subtitle mt-3" variant="glide">
            After-hours signal
          </RevealItem>
          <RevealItem
            as="p"
            variant="soft"
            className={`mt-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            Explore the things I do when I am not coding.
          </RevealItem>
        </RevealGroup>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              animate={{
                y: [0, -2, 2, 0],
              }}
              transition={{
                default: { duration: 1.05, ease: CREAM_EASE },
                y: { repeat: Infinity, duration: 12 + index * 0.3, ease: "easeInOut", repeatType: "mirror" },
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: isDark
                  ? "0 0 30px rgba(56,189,248,0.45)"
                  : "0 0 30px rgba(30,64,175,0.2)",
              }}
              className="fx-panel w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center gap-2"
            >
              <div className="fx-ring" />
              <div className="text-3xl md:text-4xl">{hobby.icon}</div>
              <p className="text-xs sm:text-sm font-semibold">{hobby.label}</p>
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






