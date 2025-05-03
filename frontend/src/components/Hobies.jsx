
import { FaGamepad, FaCameraRetro,
  FaPlaneDeparture,
  FaCamera,
  FaCode,
  FaPaintBrush,
  FaPuzzlePiece,
  FaMusic,  } from "react-icons/fa";
import '../App.css';
import { motion } from "framer-motion";
export default function Hobbies() {
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
    <div className=" rounded-2xl shadow-xl w-full md:w-[90%] mx-auto">

<motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 tracking-tight  text-white"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          ✦ My Hobbies
          </span>
        </motion.h1>
      
      <p className="text-gray-400 mb-4">Explore the things I do when I am not coding</p>
      <div className="flex flex-wrap gap-4">
        {hobbies.map((hobby, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold shadow-md hover:scale-105 transition"
          >
            {hobby.label} {hobby.icon}
          </span>
        ))}
      </div>
    </div>
  );
}
