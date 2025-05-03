import { motion } from "framer-motion";
import '../App.css';
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
} from "react-icons/si";

export default function Skills() {
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
  ];

  return (
    <section className="py-20 px-6 text-white relative overflow-hidden z-10">
      {/* Glowing background effects */}
     
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-14 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          💻 My Tech Stack
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#401967] via-[#000043] to-[#464646] p-6 rounded-xl shadow-lg hover:shadow-blue-500/40 transform transition duration-300 hover:-translate-y-2 flex flex-col items-center gap-2"

            >
              {skill.icon}
              <p className="mt-2 text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
