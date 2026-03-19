import About from "./about";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Skills from "./skill";
import Contact from "./Contact";
import Hobies from "./Hobies";
import Expertise from "./Expertise";
import LocationMap from "./LocationMap";
import Reveal from "./Reveal";

import "../App.css";
import PropTypes from "prop-types";

export default function Home({ isDark }) {
  // Hover shadow based on mode
  const shadowHover = isDark
    ? "hover:shadow-[0_0_25px_#22c55e]/60"
    : "hover:shadow-[0_0_25px_#000000]/60";

  return (
    <div
      id="home"
      className={`relative min-h-screen ${isDark ? "text-white" : "text-slate-900"}`}
    >
      {/* Main content */}
      <div className="space-y-6  lg:py-5 relative z-10">
        {/* About Section */}
        <div id="about" className="section-anchor">
          <Reveal
            as="section"
            className={`rounded-3xl bg-transparent shadow-none fx-cream-trans ${shadowHover}`}
          >
            <About isDark={isDark} />
          </Reveal>
        </div>

        {/* Projects Section */}
        <div id="projects-section" className="section-anchor">
          <Reveal
            as="section"
            className={`rounded-3xl bg-transparent shadow-none fx-cream-trans ${shadowHover}`}
          >
            <Projects isDark={isDark} />
          </Reveal>
        </div>

        {/* Achievements Section */}
        <div id="achievements" className="section-anchor">
          <Reveal
            as="section"
            className={`rounded-3xl bg-transparent shadow-none fx-cream-trans ${shadowHover}`}
          >
            <Achievements isDark={isDark} />
          </Reveal>
        </div>

        {/* Skills Section */}
        <div id="skills" className="section-anchor">
          <Reveal
            as="section"
            className={`rounded-3xl bg-transparent shadow-none fx-cream-trans ${shadowHover}`}
          >
            <Skills isDark={isDark} />
          </Reveal>
        </div>

        {/* Music + Hobbies Section */}
        <div className="min-h-screen mt-2 space-y-10">
          <div className="min-h-screen mt-2 space-y-10">
            <div className="flex flex-col md:flex-row  gap-6">
              {/* Expertise Section */}
              <Reveal
                as="div"
                className={`flex-1 rounded-2xl bg-transparent shadow-none p-0 fx-cream-trans ${shadowHover} hover:scale-[1.03] flex justify-center mt-4 md:mt-6`}
              >
                <Expertise isDark={isDark} />
              </Reveal>

              {/* Hobies Section */}
              <Reveal
                as="div"
                className={`flex-1 rounded-2xl bg-transparent shadow-none fx-cream-trans ${shadowHover} hover:scale-[1.03] flex justify-center`}
              >
                <Hobies isDark={isDark} />
              </Reveal>
            </div>
          </div>

          {/* Location Map */}
          <Reveal
            as="div"
            className={`flex-1 rounded-2xl bg-transparent shadow-none fx-cream-trans ${shadowHover} hover:scale-[1.03]`}
          >
            <LocationMap isDark={isDark} />
          </Reveal>
        </div>

        {/* Contact Section */}
        <div id="contact" className="section-anchor">
          <Reveal
            as="section"
            className={`rounded-3xl bg-transparent shadow-none fx-cream-trans ${shadowHover}`}
          >
            <Contact isDark={isDark} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  isDark: PropTypes.bool.isRequired,
};




