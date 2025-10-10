
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTrophy,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";
import "../App.css";
import PropTypes from "prop-types";

export default function Navbar({ isDark, setIsDark }) {
  const location = useLocation();
  const [setClickedLink] = useState(null);

  const navItems = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "About", icon: <FaUser />, link: "/about" },
    { name: "Projects", icon: <FaProjectDiagram />, link: "/projects" },
    { name: "Achievements", icon: <FaTrophy />, link: "/achievements" },
    { name: "Skills", icon: <FaCode />, link: "/skills" },
    { name: "Contact", icon: <FaEnvelope />, link: "/contact" },
  ];

  const colors = {
    linkColor: isDark ? "text-yellow-200" : "text-black",
    hoverShadow: isDark
      ? "hover:shadow-[0_0_15px_#FFD700] hover:scale-110 transition-all duration-300"
      : "hover:shadow-[0_0_10px_#000] hover:scale-110 transition-all duration-300",
    tooltipBg: isDark ? "bg-black/80" : "bg-white/80",
    tooltipText: isDark ? "text-[#FFD700]" : "text-black",
  };

  const handleClick = (link) => {
    setClickedLink(link);
    setTimeout(() => setClickedLink(null), 300);
  };

  return (
    <div className="fixed top-2/3 right-2 sm:right-4 -translate-y-1/2 z-[999]">
      <nav
        className={`backdrop-blur-md rounded-full p-2 sm:p-2 shadow-xl border flex flex-col items-center gap-5 sm:gap-6 bg-transparent ${
          isDark ? "border-[#FFD700]/20" : "border-black/20"
        }`}
      >
        {/* ✅ Theme Toggle fixed top center (no animation, aligned) */}
       {/* ✅ Theme Toggle fixed at top, aligned with nav links */}
<div className="flex items-center justify-center mb-4 ml-5 w-12 h-12 rounded-full bg-transparent">
  <button
    onClick={() => setIsDark((prev) => !prev)}
    aria-label="Toggle theme"
    className="w-full h-full flex items-center justify-center text-lg"
  >
    <ThemeToggle isDark={isDark} />
  </button>
</div>


        {/* ✅ Navigation Items */}
        <div className="flex flex-col items-center text-xs font-medium tracking-wide gap-4 sm:gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <div key={item.name}>
                <Link
                  to={item.link}
                  onClick={() => handleClick(item.link)}
                  className={`relative group text-lg sm:text-xl transition-all duration-300 ${colors.linkColor} ${colors.hoverShadow} ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                  {/* Tooltip */}
                  <span
                    className={`absolute right-9 sm:right-10 top-1/2 -translate-y-1/2 ${colors.tooltipBg} ${colors.tooltipText} text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50`}
                  >
                    {item.name.toUpperCase()}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};
