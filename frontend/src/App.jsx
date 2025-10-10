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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark'); // persist
    return saved ? JSON.parse(saved) : true; // default dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  return (
    <Router>
      <div className="app-container">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          key={isDark ? 'dark' : 'light'} // force reload when switching
          className="background-video"
        >
          <source
            src={isDark ? '/magic-bg2.mp4' : '/light-BG.mp4'}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay only for dark mode */}
        {isDark && <div className="video-overlay" />}

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
