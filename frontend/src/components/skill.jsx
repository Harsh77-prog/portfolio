import "../App.css";
import { motion } from "framer-motion";
import { memo, useCallback, useMemo, useState } from "react";
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
import Reveal, { RevealGroup, RevealItem, CREAM_SPRING } from "./Reveal";

const SKILLS = [
  { name: "C", icon: <SiC className="text-sky-500 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-sky-300 text-4xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-sky-500 text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-sky-400 text-4xl" /> },
  { name: "React", icon: <SiReact className="text-sky-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-sky-400 text-4xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-sky-500 text-4xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400 text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-cyan-500 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-orange-600 text-4xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-sky-400 text-4xl" /> },
  { name: "Dart", icon: <SiDart className="text-sky-600 text-4xl" /> },
];

const Skills = memo(function Skills({ isDark }) {
  const [isInteracting, setIsInteracting] = useState(false);
  const { topRow, bottomRow } = useMemo(() => {
    const loopedSkills = [...SKILLS, ...SKILLS];
    const mid = Math.ceil(loopedSkills.length / 2);
    return {
      topRow: loopedSkills.slice(0, mid),
      bottomRow: loopedSkills.slice(mid),
    };
  }, []);
  const handlePointerDown = useCallback(() => setIsInteracting(true), []);
  const handlePointerUp = useCallback(() => setIsInteracting(false), []);

  return (
    <section className={`fx-section stack-section ${isDark ? "text-white" : "text-slate-900"}`}>
      <div className="fx-grid" />
      <div className="fx-orb" style={{ top: "-120px", left: "8%" }} />
      <div className="fx-orb fx-orb-2" style={{ bottom: "-140px", right: "12%" }} />

      <div className="fx-shell relative z-10 text-center">
        <RevealGroup as="div">
          <RevealItem as="h2" className="fx-title" variant="tilt">
            My Tech Stack
          </RevealItem>
          <RevealItem as="p" className="fx-subtitle mt-3" variant="glide">
            Core systems
          </RevealItem>
          <RevealItem as="div" className="stack-divider" variant="soft" />
        </RevealGroup>

        <Reveal
          as="div"
          className={`mt-8 stack-marquee stack-marquee-rows ${isInteracting ? "is-interacting" : ""}`}
          delay={0.1}
          variant="glide"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="stack-track stack-track-top">
            {topRow.map((skill, index) => (
              <motion.div
                key={`top-${skill.name}-${index}`}
                className="stack-chip"
                whileHover={{ y: -3, scale: 1.015 }}
                transition={CREAM_SPRING}
              >
                <span className="stack-chip-ring" />
                <span className="stack-chip-icon">{skill.icon}</span>
                <span className={`stack-label ${isDark ? "text-sky-200" : "text-slate-800"}`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="stack-track stack-track-bottom">
            {bottomRow.map((skill, index) => (
              <motion.div
                key={`bottom-${skill.name}-${index}`}
                className="stack-chip"
                whileHover={{ y: -3, scale: 1.015 }}
                transition={CREAM_SPRING}
              >
                <span className="stack-chip-ring" />
                <span className="stack-chip-icon">{skill.icon}</span>
                <span className={`stack-label ${isDark ? "text-sky-200" : "text-slate-800"}`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
});

Skills.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

Skills.displayName = "Skills";

export default Skills;






