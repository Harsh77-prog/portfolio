import './App.css';
import Home from './components/Home';
import About from './components/about';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/skill';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import OwnerReply from './components/Owner';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
 function App() {
  return (
    <>
     <div className="app-container">
      {/* Global Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/magic-BG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional: Dark overlay */}
      <div className="video-overlay" />

      {/* Main App Content */}
      <div className="content">
        
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/owner" element={<OwnerReply />} />
        </Routes>
        
      </Router>
      </div>
    </div>
    </>
  );
}
export default App;