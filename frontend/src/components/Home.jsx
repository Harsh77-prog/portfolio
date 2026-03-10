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
    <div className={`relative min-h-screen ${isDark ? "text-white" : "text-slate-900"}`}>
      {/* Main content */}
      <div className="space-y-6  lg:py-5 relative z-10">
        {/* About Section */}
        <Reveal
          as="section"
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <About isDark={isDark} />
        </Reveal>

        {/* Projects Section */}
        <Reveal
          as="section"
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Projects isDark={isDark} />
        </Reveal>

        {/* Achievements Section */}
        <Reveal
          as="section"
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Achievements isDark={isDark} />
        </Reveal>

        {/* Skills Section */}
        <Reveal
          as="section"
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Skills isDark={isDark} />
        </Reveal>

        {/* Music + Hobbies Section */}
        <div className="min-h-screen mt-2 space-y-10">
          <div className="min-h-screen mt-2 space-y-10">
            <div className="flex flex-col md:flex-row  gap-6">
              {/* Expertise Section */}
              <Reveal
                as="div"
                className={`flex-1 rounded-2xl bg-transparent shadow-none p-0 transition duration-300 ${shadowHover} hover:scale-[1.03] flex justify-center mt-4 md:mt-6`}
              >
                <Expertise isDark={isDark} />
              </Reveal>

              {/* Hobies Section */}
              <Reveal
                as="div"
                className={`flex-1 rounded-2xl bg-transparent shadow-none  transition duration-300 ${shadowHover} hover:scale-[1.03] flex justify-center`}
              >
                <Hobies isDark={isDark} />
              </Reveal>
            </div>
          </div>

          {/* Location Map */}
          <Reveal
            as="div"
            className={`flex-1 rounded-2xl bg-transparent shadow-none transition duration-300 ${shadowHover} hover:scale-[1.03]`}
          >
            <LocationMap isDark={isDark} />
          </Reveal>
        </div>

        {/* Contact Section */}
        <Reveal
          as="section"
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Contact isDark={isDark} />
        </Reveal>
      </div>
    </div>
  );
}

Home.propTypes = {
  isDark: PropTypes.bool.isRequired,
};




