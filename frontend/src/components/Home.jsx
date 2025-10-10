import About from "./about";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Skills from "./skill";
import Contact from "./Contact";
import Hobies from "./Hobies";
import MyTunes from "./MYtunes";
import LocationMap from "./LocationMap";

import "../App.css";
import PropTypes from "prop-types";

export default function Home({ isDark }) {
  // Hover shadow based on mode
  const shadowHover = isDark
    ? "hover:shadow-[0_0_25px_#FFD700]/60"
    : "hover:shadow-[0_0_25px_#000000]/60";

  return (
    <div className="relative min-h-screen text-white">
      {/* Main content */}
      <div className="space-y-6  lg:py-5 relative z-10">
        {/* About Section */}
        <section
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <About isDark={isDark} />
        </section>

        {/* Projects Section */}
        <section
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Projects isDark={isDark} />
        </section>

        {/* Achievements Section */}
        <section
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Achievements isDark={isDark} />
        </section>

        {/* Skills Section */}
        <section
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Skills isDark={isDark} />
        </section>

        {/* Music + Hobbies Section */}
        <div className="min-h-screen mt-2 space-y-10">
          <div className="min-h-screen mt-2 space-y-10">
            <div className="flex flex-col md:flex-row  gap-6">
              {/* MyTunes Section */}
              <div
                className={`flex-1 rounded-2xl bg-transparent shadow-none p-0 transition duration-300 ${shadowHover} hover:scale-[1.03] flex justify-center`}
              >
                <MyTunes isDark={isDark} />
              </div>

              {/* Hobies Section */}
              <div
                className={`flex-1 rounded-2xl bg-transparent shadow-none  transition duration-300 ${shadowHover} hover:scale-[1.03] flex justify-center`}
              >
                <Hobies isDark={isDark} />
              </div>
            </div>
          </div>

          {/* Location Map */}
          <div
            className={`flex-1 rounded-2xl bg-transparent shadow-none transition duration-300 ${shadowHover} hover:scale-[1.03]`}
          >
            <LocationMap isDark={isDark} />
          </div>
        </div>

        {/* Contact Section */}
        <section
          className={`rounded-3xl bg-transparent shadow-none transition duration-300 ${shadowHover}`}
        >
          <Contact isDark={isDark} />
        </section>
      </div>
    </div>
  );
}

Home.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
