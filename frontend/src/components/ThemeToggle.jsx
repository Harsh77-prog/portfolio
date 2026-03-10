import { Moon, Sun } from "lucide-react";
import PropTypes from "prop-types"; // 📌 import PropTypes

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`relative inline-flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        isDark
          ? "bg-[#0b0f17]/80 border-sky-200/30 text-sky-200 shadow-[0_0_18px_rgba(34,197,94,0.35)]"
          : "bg-white/80 border-black/10 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.2)]"
      }`}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <Sun className="w-5 h-5 text-sky-200" /> : <Moon className="w-5 h-5 text-slate-900" />}
    </button>
  );
}

// 🔹 Add prop-types validation
ThemeToggle.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired,
};






