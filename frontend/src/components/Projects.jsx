import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

/* ===================== PROJECT CARD COMPONENT ===================== */
function ProjectCard({ project, isDark }) {
  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden backdrop-blur-xl
      transition-all duration-500 flex flex-col
      min-h-[420px] sm:min-h-0 sm:h-[480px]
      ${
        isDark
          ? "bg-black/85 border border-yellow-200/30 shadow-[0_0_70px_rgba(255,215,0,0.3)]"
          : "bg-white/95 border border-black/20 shadow-[0_25px_70px_rgba(0,0,0,0.2)]"
      }`}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-t from-black/90 to-transparent"
              : "bg-gradient-to-t from-white/80 to-transparent"
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3 tracking-wide">
          {project.name}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {project.desc}
        </p>
      </div>

      {/* Status */}
      <span
        className={`absolute top-4 left-4 text-xs px-4 py-1.5 rounded-full font-semibold backdrop-blur-lg ${
          project.status.includes("Completed")
            ? isDark
              ? "bg-yellow-200 text-black"
              : "bg-black text-white"
            : "bg-gray-400 text-black"
        }`}
      >
        {project.status}
      </span>

      {/* Visit Project */}
      <div className={`px-5 pb-5 sm:px-6 sm:pb-6 ${isDark ? "bg-black/90" : "bg-white"}`}>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 rounded-xl font-bold tracking-wide
          transition-all duration-500
          ${
            project.status !== "✅ Completed"
              ? "opacity-40 cursor-not-allowed line-through"
              : isDark
              ? "bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 text-black hover:shadow-[0_0_30px_rgba(255,215,0,0.7)] hover:-translate-y-1"
              : "bg-black text-white hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:-translate-y-1"
          }`}
        >
          🔗 Visit Project
        </a>
      </div>
    </div>
  );
}


/* ========== PROP TYPES FOR PROJECT CARD ========== */
ProjectCard.propTypes = {
  isDark: PropTypes.bool.isRequired,
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

/* ===================== STACK ANIMATION COMPONENT ===================== */
function AnimatedProjectStack({ projects, isDark }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = left→right, -1 = right→left
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = prev + direction;
        if (nextIndex >= projects.length) {
          setDirection(-1);
          return prev - 1;
        } else if (nextIndex < 0) {
          setDirection(1);
          return prev + 1;
        } else return nextIndex;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, [paused, direction, projects.length]);

  // Detect window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardWidth = windowWidth < 640 ? 0.9 * windowWidth : 380; // 90% on mobile
  const gap = 20;

  return (
    <div className="relative h-[520px] flex items-center justify-center overflow-hidden perspective">
      {projects.map((project, index) => {
        let position = "off";
        if (direction === 1) {
          if (index < activeIndex) position = "left";
          else if (index === activeIndex) position = "center";
          else if (index > activeIndex) position = "right";
        } else {
          if (index > activeIndex) position = "right";
          else if (index === activeIndex) position = "center";
          else if (index < activeIndex) position = "left";
        }

        const variants = {
          left: { x: -cardWidth - gap, scale: 0.82, rotate: -12, opacity: 0.55, zIndex: 1 },
          center: { x: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 10 },
          right: { x: cardWidth + gap, scale: 0.82, rotate: 12, opacity: 0.55, zIndex: 1 },
          off: { x: direction * cardWidth * 2, scale: 0.7, rotate: 0, opacity: 0, zIndex: 0 },
        };

        return (
          <motion.div
            key={index}
            animate={variants[position]}
            transition={{ type: "spring", stiffness: 25, damping: 30, mass: 0.5 }}
            className="absolute cursor-pointer w-[90vw] sm:w-[380px]"
            onClick={() => {
              setPaused(true);
              setTimeout(() => setPaused(false), 2600);
            }}
            whileHover={{ scale: position === "center" ? 1.03 : undefined }}
          >
            <ProjectCard project={project} isDark={isDark} />
          </motion.div>
        );
      })}
    </div>
  );
}

AnimatedProjectStack.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  isDark: PropTypes.bool.isRequired,
};

/* ===================== MAIN PROJECTS ===================== */
export default function Projects({ isDark }) {
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

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? "text-white" : "text-black"}`}>
      {/* TITLE */}
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
          <span className={`absolute inset-0 blur-xl opacity-30 rounded-lg ${isDark ? "bg-yellow-200" : "bg-black/20"}`} />
        </motion.h1>

        <div
          className={`h-1 w-32 mx-auto rounded-full mb-6 ${
            isDark
              ? "bg-gradient-to-r from-yellow-200 via-yellow-100 to-black animate-gold-twinkle"
              : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
          }`}
        />
      </div>

      {/* STACK */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <AnimatedProjectStack projects={projectList} isDark={isDark} />
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
