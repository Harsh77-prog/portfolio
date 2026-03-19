import './App.css';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/skill';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import OwnerReply from './components/Owner';


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return null;
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark'); // persist
    return saved ? JSON.parse(saved) : true; // default dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('isDark', JSON.stringify(isDark));
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
  }, []);

  useEffect(() => {
    let timeoutId;
    const root = document.documentElement;

    const handleScroll = () => {
      root.classList.add("is-scrolling");
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.clearTimeout(timeoutId);
      root.classList.remove("is-scrolling");
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <ScrollToHash />
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

