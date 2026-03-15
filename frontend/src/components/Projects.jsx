import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const PROJECTS = [
  {
    name: "E-Commerce Website",
    desc: "A full-stack shopping platform with filters, cart, and Razorpay payments(Testing mode)",
    status: "Completed",
    link: "https://trendify-ecommerce-web.onrender.com",
    img: "/trendify.png",
    stack: ["Ejs", "Node", "Razorpay"],
  },
  {
    name: "Portfolio Website",
    desc: "Personal portfolio using React, Tailwind, and Framer Motion animations.",
    status: "Completed",
    link: "#",
    img: "/portfolio.png",
    stack: ["React", "Tailwind", "Framer"],
  },
  {
    name: "News Application",
    desc: "A news website using React and NewsAPI with category filtering.",
    status: "Completed",
    link: "https://news-v9gy.vercel.app/",
    img: "/tazakhabar.png",
    stack: ["React", "NewsAPI", "Node"],
  },
  {
    name: "Shatranj",
    desc: "Single-player chess game with AI (Minimax).",
    status: "Completed",
    link: "https://github.com/Harsh77-prog/Shatranj",
    img: "/shatranj.png",
    stack: ["Flutter", "Dart", "Minimax"],
  },
  {
    name: "FinanceIQ",
    desc: "Create and track your financial journey with intelligent analytics",
    status: "In Progress",
    link: "https://finance-iq-frontend.vercel.app",
    img: "/finance.png",
    stack: ["Next", "Node", "postgreSQL" , "AI/ML"],
  },
  {
    name: "NoteShelf",
    desc: "Flutter notes app with ChatGPT integration.",
    status: "Completed",
    link: "https://github.com/Harsh77-prog/Noteshelf",
    img: "startimg.png",
    stack: ["Flutter", "Open AI", "Local Storage"],
  },
];

function StatusPill({ status, isDark }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`text-[10px] sm:text-xs px-3 py-1 rounded-full font-semibold tracking-widest ${
        isCompleted
          ? isDark
            ? "bg-sky-200 text-black"
            : "bg-[#05060d] text-white"
          : "bg-gray-400 text-black"
      }`}
    >
      {isCompleted ? "LIVE" : "SOON"}
    </span>
  );
}

StatusPill.propTypes = {
  status: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
};

function HoloCard({ project, isDark, active }) {
  const isCompleted = project.status === "Completed";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`holo-card ${isDark ? "holo-dark" : "holo-light"} ${
        active ? "holo-active" : "holo-idle"
      }`}
    >
      <div className="holo-frame" />
      <div className="holo-corners" />
      <div className="holo-scan" />

      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden">
        <img
          src={project.img}
          alt={project.name}
          loading="lazy"
          decoding="async"
          width="1200"
          height="675"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${isDark ? "holo-overlay-dark" : "holo-overlay-light"}`} />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
            {project.name}
          </h3>
          <StatusPill status={project.status} isDark={isDark} />
        </div>

        <p className={`mt-3 text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          {project.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className={`text-[10px] sm:text-xs px-3 py-1 rounded-full border ${
                isDark ? "border-sky-200/40 text-sky-100" : "border-black/30 text-black/70"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className={`text-xs tracking-[0.3em] ${isDark ? "text-sky-200" : "text-black/60"}`}>
            {isCompleted ? "DEPLOYED" : "IN BUILD"}
          </span>

          <a
            href={isCompleted ? project.link : "#"}
            target={isCompleted ? "_blank" : undefined}
            rel={isCompleted ? "noopener noreferrer" : undefined}
            onClick={(event) => {
              if (!isCompleted) event.preventDefault();
            }}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all duration-500 ${
              !isCompleted
                ? "opacity-40 cursor-not-allowed line-through"
                : isDark
                ? "bg-gradient-to-r from-sky-200 via-cyan-200 to-sky-200 text-black hover:shadow-[0_0_30px_rgba(94,234,212,0.55)]"
                : "bg-[#05060d] text-white hover:shadow-[0_0_25px_rgba(0,0,0,0.4)]"
            }`}
            style={{ position: "relative", zIndex: 5 }}
          >
            Launch
            <span className="text-base">?</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

HoloCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isDark: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
};

function ProjectRail({ projects, isDark, activeIndex, onSelect }) {
  return (
    <div className="relative mt-10">
      <div className="rail-line" />
      <div className="rail-scroll hide-scrollbar">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`${project.name}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              className={`rail-item ${isActive ? "rail-active" : "rail-idle"} ${
                isDark ? "rail-dark" : "rail-light"
              }`}
            >
              <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
                className="rail-thumb"
              />
              <div className="rail-meta">
                <span className="rail-title">{project.name}</span>
                <span className="rail-sub">{project.status === "Completed" ? "LIVE" : "SOON"}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

ProjectRail.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  isDark: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default function Projects({ isDark }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const activeProject = useMemo(() => PROJECTS[activeIndex], [activeIndex]);

  return (
    <section className={`fx-section relative overflow-hidden ${isDark ? "text-white" : "text-black"}`}>
      <div className="fx-grid" />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="fx-title"
        >
          Projects Console
        </motion.h1>
        <p className="fx-subtitle mt-3">Build Command Center</p>
        <p className={`mt-4 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          A futuristic command center for my builds. Designed to feel smooth, fast, and adaptive.
        </p>
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`control-panel ${isDark ? "panel-dark" : "panel-light"}`}
          >
            <div className="holo-corners" />
            <div className="panel-header">
              <span className="panel-dot" />
              <span className="panel-dot" />
              <span className="panel-dot" />
              <p className="panel-title">SYSTEM STATUS</p>
            </div>
            <div className="panel-body">
              <div>
                <p className="panel-label">Active Project</p>
                <h3 className="panel-value">{activeProject.name}</h3>
              </div>
              <div>
                <p className="panel-label">Stage</p>
                <h4 className="panel-value-sm">{activeProject.status}</h4>
              </div>
              <div>
                <p className="panel-label">Stack</p>
                <div className="panel-tags">
                  {activeProject.stack.map((item) => (
                    <span key={item} className="panel-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="panel-label">Summary</p>
                <p className="panel-desc">{activeProject.desc}</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <HoloCard project={activeProject} isDark={isDark} active />
          </div>
        </div>

        <ProjectRail
          projects={PROJECTS}
          isDark={isDark}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
