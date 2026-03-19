
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
    { name: "Home", icon: <FaHome />, hash: "home" },
    { name: "About", icon: <FaUser />, hash: "about" },
    { name: "Projects", icon: <FaProjectDiagram />, hash: "projects-section" },
    { name: "Achievements", icon: <FaTrophy />, hash: "achievements" },
    { name: "Skills", icon: <FaCode />, hash: "skills" },
    { name: "Contact", icon: <FaEnvelope />, hash: "contact" },
  ];

  const colors = {
    linkColor: isDark ? "text-sky-200" : "text-slate-900",
    hoverShadow: isDark
      ? "hover:shadow-[0_0_18px_rgba(34,197,94,0.6)] hover:scale-105"
      : "hover:shadow-[0_0_12px_rgba(15,23,42,0.35)] hover:scale-105",
    tooltipBg: isDark ? "bg-[#0b0f17]/80" : "bg-white/90",
    tooltipText: isDark ? "text-sky-200" : "text-slate-900",
  };

  const handleClick = (hash) => {
    setClickedLink(hash);
    setTimeout(() => setClickedLink(null), 300);
  };

  return (
    <div className="fixed top-1/2 right-2 sm:right-4 -translate-y-1/2 z-[999] fx-nav">
      <nav
        className={`relative fx-panel px-3 py-4 flex flex-col items-center gap-5 sm:gap-6 fx-nav-panel ${
          isDark ? "text-sky-200" : "text-slate-900"
        }`}
      >
        <div className="fx-ring" />

        <div className="flex items-center justify-center">
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>

        <div className="flex flex-col items-center text-xs font-medium tracking-wide gap-4 sm:gap-6 fx-nav-items">
          {navItems.map((item) => {
            const isActive = location.pathname === "/" && location.hash === `#${item.hash}`;
            return (
              <div key={item.name}>
                <Link
                  to={`/#${item.hash}`}
                  onClick={() => handleClick(item.hash)}
                  className={`relative group text-lg sm:text-xl fx-cream-trans fx-nav-link ${colors.linkColor} ${colors.hoverShadow} ${
                    isActive ? "scale-110" : ""
                  }`}
                >
                  {item.icon}
                  {/* Tooltip */}
                  <span
                    className={`absolute right-9 sm:right-10 top-1/2 -translate-y-1/2 fx-nav-tooltip ${colors.tooltipBg} ${colors.tooltipText} text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50`}
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






