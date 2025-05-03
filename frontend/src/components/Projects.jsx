import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../App.css";

export default function Projects() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const projectList = [
    {
      name: "E-Commerce Website",
      desc: "A full-stack shopping platform with filters, cart, and Stripe/Cashfree payments.",
      status: "🛠 Under Development",
      link: "#",
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
      link: "#",
      img: "https://static.vecteezy.com/system/resources/previews/006/584/407/non_2x/illustration-graphic-cartoon-character-of-newspaper-vector.jpg",
    },
    {
      name: "Job Portal",
      desc: "MERN-based platform to find/apply for tech jobs and manage job postings.",
      status: " ➡️ Coming Soon",
      link: "#",
      img: "https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-illustration-download-in-svg-png-gif-file-formats--hr-recruitment-company-business-activities-pack-people-illustrations-4032953.png",
    }
    
    // Add more projects here...
  ];

  // Auto-scroll effect
  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (!isHovered && scrollRef.current) {
        scrollRef.current.scrollLeft += 0.5;

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0; // Loop
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <section className="py-20  text-white relative z-10 overflow-hidden">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 tracking-tight"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            🚀 My Projects
          </span>
        </motion.h1>
      </div>

      {/* Scrollable Carousel for All Screen Sizes */}
      <div
  ref={scrollRef}
  className="scroll-container overflow-x-auto whitespace-nowrap scroll-smooth md:flex "
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {projectList.map((project, index) => (
    <motion.div
      key={index}
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-[#1c1c1c] inline-block align-top min-w-[250px] max-w-[260px]  rounded-xl shadow-md hover:shadow-blue-500/30 transition-all transform hover:-translate-y-2 hover:scale-105 overflow-hidden whitespace-normal break-words"
    >
      <img
        src={project.img}
        alt={project.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-blue-300">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-2  text-justify-center">
          {project.desc}
        </p>
        <p className="text-yellow-400 text-xs mb-2">{project.status}</p>
        <a
          href={project.link}
          className={`text-blue-400 hover:underline text-sm ${
            project.status !== "✅ Completed"
              ? "line-through cursor-not-allowed"
              : ""
          }`}
        >
          🔗 View Project
        </a>
      </div>
    </motion.div>
  ))}
</div>



    </section>
  );
}
