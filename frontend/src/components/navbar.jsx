import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTrophy,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const location = useLocation(); // Get current route location
  const [activeLink, setActiveLink] = useState(location.pathname); // Keep track of active link

  const navItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "About", icon: <FaUser />, link: "/About" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "/Projects" },
    { name: "Achievements", icon: <FaTrophy />, link: "/Achievements" },
    { name: "Skills", icon: <FaCode />, link: "/Skills" },
    { name: "Contact", icon: <FaEnvelope />, link: "/Contact" },
  ];

  const handleClick = (link) => {
    setActiveLink(link); // Set the clicked item as active
  };

  return (
    <>
      {/* Fixed Vertical Navbar */}
      <div className="fixed top-2/3 right-2 bg-transparent sm:right-4 -translate-y-1/2 z-[999]">
        <nav className="backdrop-blur-md rounded-full p-3 sm:p-4 shadow-xl border border-white/20 flex flex-col items-center gap-4 sm:gap-6">

          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="HarshImage.png" // Replace with your image URL
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-cyan-400 hover:shadow-[0_0_12px_#00FFFF] transition-all duration-300"
            />
          </motion.div>

          {/* Navigation Items */}
          <div className="flex flex-col items-center text-white text-xs font-medium tracking-wide gap-4 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => handleClick(item.link)}
                className={`relative group text-lg sm:text-xl transition-colors ${
                  activeLink === item.link ? "text-cyan-300" : "text-white"
                } hover:text-cyan-300`}
              >
                {item.icon}

                {/* Tooltip */}
                <span className="absolute right-9 sm:right-10 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  {item.name.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
