import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types"; // 📌 import PropTypes

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`
        absolute top-5 right-5 z-[1000] p-3 rounded-full shadow-md 
        transition-all duration-300 transform hover:scale-110 active:scale-95
        ${isDark 
          ? "bg-black text-yellow-400 hover:bg-gray-800 hover:shadow-yellow-500/40" 
          : "bg-slate-200 text-gray-800 hover:bg-gray-100 hover:shadow-gray-950"}
      `}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-800" />}
    </button>
  );
}

// 🔹 Add prop-types validation
ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};
