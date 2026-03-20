import "../App.css";
import { memo } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import PropTypes from "prop-types";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

import Questions from "./Questions";

const Contact = memo(function Contact({ isDark }) {
  return (
    <section className={`fx-section ${isDark ? "text-white" : "text-slate-900"}`}>
      <div className="fx-grid" />
      <div className="fx-orb" style={{ top: "-140px", right: "10%" }} />
      <div className="fx-orb fx-orb-2" style={{ bottom: "-160px", left: "8%" }} />

      <div className="fx-shell relative z-10">
        <RevealGroup as="div" className="text-center">
          <RevealItem as="h1" className="fx-title" variant="tilt">
            Get In Touch
          </RevealItem>
          <RevealItem as="p" className="fx-subtitle mt-3" variant="glide">
            Signal channel open
          </RevealItem>
        </RevealGroup>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
          <Reveal as="section" className="fx-panel p-6 sm:p-8" duration={0.8} variant="glide">
            <div className="fx-ring" />
            <Questions isDark={isDark} />
          </Reveal>

          <div className="fx-panel p-6 sm:p-8">
            <div className="fx-ring" />
            <RevealGroup as="div">
              <RevealItem as="h3" className="text-2xl sm:text-3xl font-bold" variant="tilt">
                Contact Me
              </RevealItem>
              <RevealItem
                as="p"
                variant="soft"
                className={`mt-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                Prefer direct contact? Reach me instantly.
              </RevealItem>
            </RevealGroup>

            <div className="mt-6 space-y-4">
              <div>
                <p className="fx-subtitle">Email</p>
                <p className="text-base sm:text-lg font-semibold">harsh.kumar1a9@gmail.com</p>
              </div>
              <div>
                <p className="fx-subtitle">Phone</p>
                <p className="text-base sm:text-lg font-semibold">+91 81988 70725</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100093563294785"
                target="_blank"
                rel="noreferrer"
                className="fx-button"
              >
                <FaFacebookF size={18} /> Facebook
              </a>
              <a
                href="https://x.com/HarshKumar71157"
                target="_blank"
                rel="noreferrer"
                className="fx-button"
              >
                <FaTwitter size={18} /> X
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-kumar-116423316/"
                target="_blank"
                rel="noreferrer"
                className="fx-button"
              >
                <FaLinkedinIn size={18} /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/hars.hkumar4299/"
                target="_blank"
                rel="noreferrer"
                className="fx-button"
              >
                <FaInstagram size={18} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Contact.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

Contact.displayName = "Contact";

export default Contact;






