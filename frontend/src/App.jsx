import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import useLenis from "./hooks/useLenis";
import PropTypes from "prop-types";
import Home from "./components/Home";
import About from "./components/about";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/skill";
import Contact from "./components/Contact";
import OwnerReply from "./components/Owner";

const EASE_OUT_CUBIC = (t) => 1 - Math.pow(1 - t, 3);
const SCROLL_TO_OPTIONS = {
  offset: -12,
  duration: 1.15,
  easing: EASE_OUT_CUBIC,
  lerp: 0.08,
};

function ScrollToHash({ lenisRef, enableSmooth }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    let rafId = 0;
    let attempts = 0;
    const maxAttempts = 120;

    const runScroll = () => {
      if (!location.hash) {
        if (lenisRef?.current) {
          lenisRef.current.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: enableSmooth ? "smooth" : "auto" });
        }
        return;
      }

      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);

      if (!target && attempts < maxAttempts) {
        attempts += 1;
        rafId = requestAnimationFrame(runScroll);
        return;
      }

      if (target) {
        if (lenisRef?.current) {
          lenisRef.current.scrollTo(target, SCROLL_TO_OPTIONS);
        } else {
          target.scrollIntoView({
            behavior: enableSmooth ? "smooth" : "auto",
            block: "start",
          });
        }
      }
    };

    rafId = requestAnimationFrame(runScroll);
    return () => cancelAnimationFrame(rafId);
  }, [location, lenisRef, enableSmooth]);

  return null;
}

ScrollToHash.propTypes = {
  lenisRef: PropTypes.shape({ current: PropTypes.any }),
  enableSmooth: PropTypes.bool.isRequired,
};

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("isDark"); // persist
    return saved ? JSON.parse(saved) : true; // default dark
  });
  const [lenisEnabled, setLenisEnabled] = useState(true);

  const lenisOptions = useMemo(
    () => ({
      duration: 1.15,
      easing: EASE_OUT_CUBIC,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
      touchInertiaExponent: 1.25,
      touchMultiplier: 1.02,
      wheelMultiplier: 0.9,
      overscroll: false,
      stopInertiaOnNavigate: true,
    }),
    []
  );
  const lenisConfig = useMemo(
    () => ({ enabled: lenisEnabled, options: lenisOptions }),
    [lenisEnabled, lenisOptions]
  );
  const lenisRef = useLenis(lenisConfig);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const memory = navigator.deviceMemory ?? 8;
    const cores = navigator.hardwareConcurrency ?? 8;
    const connection = navigator.connection;
    const saveData = connection?.saveData ?? false;
    const effectiveType = connection?.effectiveType ?? "";
    const slowConnection = typeof effectiveType === "string" && effectiveType.includes("2g");

    const isLowEnd = prefersReduced || saveData || slowConnection || memory <= 4 || cores <= 4;
    document.documentElement.classList.toggle("perf-lite", isLowEnd);
    setLenisEnabled((prev) => (prev === !isLowEnd ? prev : !isLowEnd));
  }, []);

  useEffect(() => {
    let timeoutId;
    let rafId = 0;
    const root = document.documentElement;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        root.classList.add("is-scrolling");
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          root.classList.remove("is-scrolling");
        }, 140);
        rafId = 0;
      });
    };

    const lenisInstance = lenisRef.current;
    if (lenisInstance) {
      lenisInstance.on("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("touchmove", handleScroll, { passive: true });
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.off("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
      }
      window.clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
      root.classList.remove("is-scrolling");
    };
  }, [lenisRef, lenisEnabled]);

  return (
    <Router>
      <div className="app-container">
        <ScrollToHash lenisRef={lenisRef} enableSmooth={lenisEnabled} />
        {/* Background */}
        {isDark ? (
          <div className="dark-bg">
            <div className="dark-bg-grid" />
            <div className="dark-bg-flow" />
            <div className="dark-bg-orbs" />
            <div className="dark-bg-stars" />
            <div className="dark-bg-glow" />
          </div>
        ) : (
          <div className="light-bg">
            <div className="light-bg-grid" />
            <div className="light-bg-flow" />
            <div className="light-bg-orbs" />
            <div className="light-bg-stars" />
            <div className="light-bg-glow" />
          </div>
        )}

        {/* Navbar */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
            <Route path="/projects" element={<Projects isDark={isDark} />} />
            <Route path="/contact" element={<Contact isDark={isDark} />} />
            <Route path="/achievements" element={<Achievements isDark={isDark} />} />
            <Route path="/skills" element={<Skills isDark={isDark} />} />
            <Route path="/owner" element={<OwnerReply isDark={isDark} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

