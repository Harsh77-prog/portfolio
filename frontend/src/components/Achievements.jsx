import "../App.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";
import Reveal, { RevealGroup, RevealItem, CREAM_SPRING } from "./Reveal";

const achievements = [
  {
    title: "Executive Member",
    subtitle: "Executive Member @ Tnp Cell GNE College",
    description:
      "Served as an Executive Member of the Training and Placement Cell, facilitating student placements and industry interactions.",
    icon: "🎓",
  },
  {
    title: "NSS Volunteer",
    subtitle: "NSS Volunteer @ GNE College",
    description:
      "Active member of the National Service Scheme, engaging in community service and social initiatives.",
    icon: "🤝",
  },
  {
    title: "Tech Hustle",
    subtitle: "Tech Hustle @ GNE",
    description:
      "Participated in Tech Hustle, a hackathon at GNE, showcasing skills in problem-solving and innovation.",
    icon: "💻",
  },
  {
    title: "Quiz phonics",
    subtitle: "Quiz phonics @ GNE",
    description:
      "Won the Quiz phonics competition at GNE, showcasing knowledge and quick thinking skills.",
    icon: "📚",
  },
  {
    title: "Smart India Hackathon 2024",
    subtitle: "Participating Team Member",
    description:
      "Participated in the Smart India Hackathon 2024, focusing on innovative solutions for real-world problems. Collaborated with a diverse team.",
    icon: "🏆",
  },
  {
    title: "Technical Engagement",
    subtitle: "Technical Engagement @ GNE",
    description:
      "Engaged in various technical events and workshops at GNE, enhancing skills in software development and teamwork.",
    icon: "📱",
  },
  {
    title: "Project & Hackathon",
    subtitle: "Project & Hackathon @ GNE",
    description:
      "Participated in numerous projects and hackathons at GNE, showcasing my ability to work collaboratively and develop innovative solutions.",
    icon: "🚀",
  },
];

export default function Achievements({ isDark }) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <section className={`fx-section ${isDark ? "text-white" : "text-slate-900"}`}>
      <div className="fx-grid" />
      <div className="fx-orb" style={{ top: "-120px", left: "10%" }} />
      <div className="fx-orb fx-orb-2" style={{ bottom: "-160px", right: "5%" }} />

      <div className="fx-shell relative z-10">
        <RevealGroup as="div" className="text-center">
          <RevealItem as="h1" className="fx-title inline-block" variant="tilt">
            Milestones of Excellence
          </RevealItem>
          <RevealItem as="p" className="fx-subtitle mt-3" variant="glide">
            Proof of momentum
          </RevealItem>
          <RevealItem
            as="p"
            variant="soft"
            className={`max-w-2xl mx-auto mt-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}
          >
            Discover the significant milestones and accolades that highlight my journey and contributions.
          </RevealItem>
        </RevealGroup>

        <Reveal
          as="div"
          className={`mt-12 achieve-marquee ${isInteracting ? "is-interacting" : ""}`}
          delay={0.1}
          variant="glide"
          onPointerDown={() => setIsInteracting(true)}
          onPointerUp={() => setIsInteracting(false)}
          onPointerLeave={() => setIsInteracting(false)}
          onPointerCancel={() => setIsInteracting(false)}
        >
          <div className="achieve-track scrolling-track">
            {[...achievements, ...achievements].map((a, i) => (
              <motion.article
                key={`${a.title}-${i}`}
                whileHover={{ scale: 1.015, y: -4 }}
                transition={CREAM_SPRING}
                className="fx-panel p-6 relative w-[260px] sm:w-[280px]"
              >
                <div className="fx-ring" />

                <div className="flex items-center justify-between">
                  <div className="text-3xl">{a.icon}</div>
                  <span className="fx-chip">Milestone</span>
                </div>

                <h4 className="mt-4 text-lg sm:text-xl font-bold">{a.title}</h4>
                <p className={`text-xs tracking-[0.2em] uppercase mt-2 ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                  {a.subtitle}
                </p>

                <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {a.description}
                </p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Achievements.propTypes = {
  isDark: PropTypes.bool.isRequired,
};








