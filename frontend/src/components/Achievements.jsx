import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import PropTypes from "prop-types";

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
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth scroll
  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (!isHovered && containerRef.current) {
        const el = containerRef.current;
        el.scrollLeft += 0.5;

        if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
          el.scrollLeft = 0; // loop
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section
      className={`py-10 px-2 relative z-10 overflow-hidden ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div className="text-center max-w-6xl mx-auto px-4">
  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 tracking-tight relative inline-block"
  >
    <span
      className={`relative inline-block text-transparent bg-clip-text ${
        isDark
          ? "bg-gradient-to-r from-yellow-600 via-yellow-100 to-black animate-gold-twinkle"
          : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
      }`}
    >
      💥 Milestones of Excellence
    </span>

    {/* Glow behind text */}
    <span
      className={`absolute inset-0 blur-xl opacity-30 rounded-lg ${
        isDark ? "bg-yellow-500/30" : "bg-black/20"
      }`}
    ></span>
  </motion.h1>

  {/* Animated underline */}
  <div
    className={`h-1 w-32 mx-auto rounded-full mb-12 ${
      isDark
        ? "bg-gradient-to-r from-yellow-600 via-yellow-100 to-black animate-gold-twinkle"
        : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
    }`}
  ></div>

  {/* Description */}
  <p
    className={`max-w-xl mx-auto mb-12 text-center transition-colors duration-300 ${
      isDark ? "text-gray-300" : "text-gray-700"
    }`}
  >
    Discover the significant milestones and accolades that highlight my
    journey and contributions.
  </p>

  {/* Achievements scroll container */}
  <div
    ref={containerRef}
    className="scroll-container flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap scroll-snap-x mandatory"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {achievements.map((a, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="relative inline-block scroll-snap-align-start transform transition-all duration-300 cursor-pointer"
      >
        <div
          className={`flex flex-col rounded-2xl overflow-hidden p-4 transition-all duration-300 justify-between shadow-lg ${
            isDark
              ? "bg-black border border-yellow-500 shadow-[0_4px_20px_rgba(255,215,0,0.5)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.8)]"
              : "bg-white border border-black shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-slate-200"
          }`}
          style={{ width: "260px", height: "360px" }}
        >
          <div className="flex flex-col justify-start flex-1">
            <div className="text-4xl mb-3">{a.icon}</div>
            <h4
              className={`text-lg font-bold mb-1 ${
                isDark ? "text-yellow-400" : "text-black"
              }`}
            >
              {a.title}
            </h4>
            <p
              className={`text-sm mb-2 font-medium ${
                isDark ? "text-yellow-300" : "text-gray-800"
              }`}
            >
              {a.subtitle}
            </p>
            <p
              className={`text-sm leading-relaxed break-words whitespace-normal flex-1 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {a.description}
            </p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </section>
  );
}

Achievements.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
