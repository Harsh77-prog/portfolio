import { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import PropTypes from "prop-types";

export default function Projects({ isDark }) {
  const [isHovered, setIsHovered] = useState(false);

  const projectList = [
    {
      name: "E-Commerce Website",
      desc: "A full-stack shopping platform with filters, cart, and Razorpay payments.",
      status: "✅ Completed",
      link: "https://trendify-ecommerce-web.onrender.com",
      img: "https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg",
    },
    {
      name: "Portfolio Website",
      desc: "My personal portfolio using React, Tailwind, and Framer Motion animations.",
      status: "✅ Completed",
      link: "#",
      img: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
    },
    {
      name: "News Application",
      desc: "A news Website using React and NewsAPI.",
      status: "✅ Completed",
      link: "https://news-v9gy.vercel.app/",
      img: "https://static.vecteezy.com/system/resources/previews/006/584/407/non_2x/illustration-graphic-cartoon-character-of-newspaper-vector.jpg",
    },
    {
      name: "Job Portal",
      desc: "MERN-based job search & hiring platform.",
      status: "➡️ Coming Soon",
      link: "#",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-4032953.png",
    },
    {
      name: "NoteShelf",
      desc: "Flutter notes app with ChatGPT integration.",
      status: "✅ Completed",
      link: "https://github.com/Harsh77-prog/Noteshelf",
      img: "startimg.png",
    },
    {
      name: "Shatranj",
      desc: "Single-player chess game with AI (Minimax).",
      status: "✅ Completed",
      link: "https://harshkumar2003.github.io/Shatranj/",
      img: "https://img.freepik.com/premium-vector/chess-game-concept-illustration_114360-1050.jpg",
    },
  ];

  // Duplicate for seamless loop
  const loopedProjects = [...projectList, ...projectList];

  return (
    <section
      className={`py-20 relative overflow-hidden ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 tracking-tight relative inline-block"
        >
          <span
            className={`relative inline-block text-transparent bg-clip-text ${
              isDark
                ? "bg-gradient-to-r from-yellow-200 via-yellow-100 to-black animate-gold-twinkle"
                : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
            }`}
          >
            🚀 My Projects
          </span>

          {/* Glow behind text */}
          <span
            className={`absolute inset-0 blur-xl opacity-30 rounded-lg ${
              isDark ? "bg-yellow-200" : "bg-black/20"
            }`}
          />
        </motion.h1>

        {/* Animated underline */}
        <div
          className={`h-1 w-32 mx-auto rounded-full mb-6 ${
            isDark
              ? "bg-gradient-to-r from-yellow-200 via-yellow-100 to-black animate-gold-twinkle"
              : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
          }`}
        />
      </div>

      {/* Auto-scrolling track */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 px-6 w-max"
          animate={{
            x: isHovered ? undefined : ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {loopedProjects.map((project, index) => (
            <div key={index} className="shrink-0">
              <div
                className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                  isDark
                    ? "bg-black border border-yellow-200 shadow-[0_4px_20px_rgba(255,215,0,0.4)]"
                    : "bg-white border border-black shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                }`}
                style={{ width: "260px", height: "350px" }}
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-36 object-cover"
                />

                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{project.name}</h3>

                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold mb-2">
                      {project.status}
                    </p>
                    <a
                      href={project.link}
                      className={`text-sm font-medium hover:underline ${
                        project.status !== "✅ Completed"
                          ? "line-through opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      🔗 View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
