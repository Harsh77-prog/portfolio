import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../App.css";
import PropTypes from "prop-types";

export default function Projects({ isDark }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const projectList = [
    {
      name: "E-Commerce Website",
      desc: "A full-stack shopping platform with filters, cart, and Stripe/Cashfree payments.",
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
      desc: "A news Website using React and NewsAPI, with search functionalities.",
      status: "✅ Completed",
      link: "https://news-v9gy.vercel.app/",
      img: "https://static.vecteezy.com/system/resources/previews/006/584/407/non_2x/illustration-graphic-cartoon-character-of-newspaper-vector.jpg",
    },
    {
      name: "Job Portal",
      desc: "MERN-based platform to find/apply for tech jobs and manage job postings.",
      status: "➡️ Coming Soon",
      link: "#",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-illustration-download-in-svg-png-gif-file-formats--hr-recruitment-company-business-activities-pack-people-illustrations-4032953.png",
    },
  ];

  // Smooth scroll
  useEffect(() => {
    let animationFrameId;
    const scrollSpeed = 1.2;

    const smoothScroll = () => {
      if (scrollRef.current && !isHovered) {
        const el = scrollRef.current;
        el.scrollLeft += scrollSpeed;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScrollLeft) el.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(smoothScroll);
    };

    animationFrameId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section
      className={`py-20 relative z-10 overflow-hidden ${
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
          ? "bg-gradient-to-r from-yellow-600 via-yellow-100 to-black animate-gold-twinkle"
          : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
      }`}
    >
      🚀 My Projects
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
    className={`h-1 w-32 mx-auto rounded-full mb-6 ${
      isDark
        ? "bg-gradient-to-r from-yellow-600 via-yellow-100 to-black animate-gold-twinkle"
        : "bg-gradient-to-r from-black via-gray-500 to-white animate-bw-twinkle"
    }`}
  ></div>
</div>



      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        className="scroll-container flex gap-6 px-4 overflow-x-auto scroll-smooth whitespace-nowrap scroll-snap-x mandatory transition-all duration-200 ease-linear"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative inline-block scroll-snap-align-start transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer"
          >
            <div
              className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-black border border-yellow-500 shadow-[0_4px_20px_rgba(255,215,0,0.5)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.8)]"
                  : " border border-black shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:bg-slate-200"
              }`}
              style={{ width: "260px", height: "350px" }} // fixed width and height
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      isDark ? "text-yellow-400" : "text-black"
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm mb-2 leading-relaxed break-words whitespace-normal ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.desc}
                  </p>
                </div>
                <div>
                  <p
                    className={`text-xs mb-2 font-semibold ${
                      isDark ? "text-yellow-300" : "text-gray-800"
                    }`}
                  >
                    {project.status}
                  </p>
                  <a
                    href={project.link}
                    className={`text-sm hover:underline font-medium ${
                      isDark ? "text-yellow-400" : "text-black"
                    } ${
                      project.status !== "✅ Completed"
                        ? "line-through cursor-not-allowed"
                        : ""
                    }`}
                  >
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
