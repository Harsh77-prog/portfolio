import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../App.css"; // Custom styles here

const achievements = [
  {
    title: "Executive Member",
    subtitle: "Executive Member @ Tnp Cell GNE College",
    description:
      "Served as an Executive Member of the Training and Placement Cell, facilitating student placements and industry interactions.",
    icon: "🎓",
  },
  {
    title: "Nss Volunteer",
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
    title: "Smart India Hackthon 2024",
    subtitle: "Participating Team Member",
    description:"Participated in the Smart India Hackathon 2024, focusing on innovative solutions for real-world problems. Collaborated with a diverse team.",
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

export default function Achievements() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (!isHovered && containerRef.current) {
        containerRef.current.scrollLeft += 0.5;

        if (
          containerRef.current.scrollLeft + containerRef.current.clientWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollLeft = 0; // Loop
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className=" py-10 px-1 text-white relative z-10 overflow-hidden">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-white"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            💥 Milestones of Excellence
          </span>
        </motion.h1>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Discover the significant milestones and accolades that highlight my
          journey and contributions.
        </p>

        <div
          ref={containerRef}
          className="scroll-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="achievement-card"
            >
              <div className="text-4xl mb-3">{a.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {a.title}
              </h4>
              <p className="text-sm text-teal-300 mb-2">{a.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
