import About from "./about";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Skills from "./skill";
import Contact from "./Contact";
import Hobies from "./Hobies";
import MyTunes from "./MYtunes";
import LocationMap from "./LocationMap";

import "../App.css";
export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <div className="space-y-2 px-2 md:px-8 lg:px-5 py-5">
        {/* About Section */}
        <section className="rounded-3xl overflow-hidden shadow-2xl   p-1 hover:shadow-blue-900 transition-shadow duration-300">
          <About />
        </section>

        {/* Projects Section */}
        <section className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm  p-1 hover:shadow-blue-900 transition-shadow duration-300">
          <Projects />
        </section>

        {/* Achievements Section */}
        <section className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm p-1 hover:shadow-blue-900 transition-shadow duration-300">
          <Achievements />
        </section>

        {/* Skills Section */}
        <section className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm  p-1 hover:shadow-blue-900 transition-shadow duration-300">
          <Skills />
        </section>
        <div className="min-h-screen mt-2  text-white  space-y-10">
          <div className="flex flex-col mt-2 md:flex-row justify-center items-stretch gap-6 ">
            <div className="flex-1 rounded-2xl shadow-xl p-6 transition hover:shadow-[0_0_30px_#00f7ff66]">
              <MyTunes />
            </div>
            <div className="flex-1  rounded-2xl shadow-xl p-6 transition hover:shadow-[0_0_30px_#00f7ff66]">
              <Hobies />
            </div>
          </div>

          <div className="flex-1 rounded-2xl shadow-xl p-6 transition duration-300 hover:shadow-[0_0_30px_#00f7ff66] hover:scale-[1.03]">
            <LocationMap />
          </div>
        </div>
        
        {/* Contact Section */}
        <section className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-1 hover:shadow-blue-900 transition-shadow duration-300">
          <Contact />
        </section>
       
      </div>
    </div>
  );
}
