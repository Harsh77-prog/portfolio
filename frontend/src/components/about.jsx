import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import "../App.css";
import PropTypes from "prop-types";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const HERO_TEXT = "Hi, I am Harsh";

const About = memo(function About({ isDark }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbDrift = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const orbDriftAlt = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.6, 0.25]);
  const heroFloat = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const heroImage = useMemo(
    () =>
      "image-set(url('/HarshImage.avif') type('image/avif'), url('/HarshImage.webp') type('image/webp'), url('/HarshImage.png') type('image/png'))",
    []
  );

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 150;
    const pauseTime = 1000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(HERO_TEXT.slice(0, index + 1));
        setIndex(index + 1);
        if (index === HERO_TEXT.length) setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setDisplayedText(HERO_TEXT.slice(0, index - 1));
        setIndex(index - 1);
        if (index === 0) setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section
      ref={sectionRef}
      className={`fx-section about-cinematic ${isDark ? "text-white" : "text-slate-900"}`}
    >
      <div className="fx-grid" />
      <motion.div
        className="fx-orb"
        style={{
          top: "-80px",
          left: "-40px",
          y: reduceMotion ? 0 : orbDrift,
          opacity: reduceMotion ? 1 : orbOpacity,
        }}
      />
      <motion.div
        className="fx-orb fx-orb-2"
        style={{
          bottom: "-140px",
          right: "-60px",
          y: reduceMotion ? 0 : orbDriftAlt,
          opacity: reduceMotion ? 1 : orbOpacity,
        }}
      />

      <div className="fx-shell relative z-10">
        <div className="fx-panel about-hero-card p-8 sm:p-10 md:p-12">
          <div className="fx-ring" />

          <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] items-center">
            <RevealGroup as="div" className="text-center md:text-left order-2 md:order-1">
              <RevealItem as="p" className="about-eyebrow" variant="glide" direction="left">
                HARSH KUMAR
              </RevealItem>
              <RevealItem as="h1" className="fx-title typewriter-glow mt-3 h-16" variant="tilt">
                <span>{displayedText}</span>
              </RevealItem>
              <RevealItem as="div" className="fx-holo-line mt-4 mx-auto md:mx-0" variant="glide" />

              <RevealItem
                as="p"
                variant="soft"
                className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-slate-200/90" : "text-slate-700"
                }`}
              >
                I am a passionate B.Tech CSE student focused on full-stack web development,
                aiming to become a top software developer. I love building fast, clean, and
                user-friendly apps that solve real-world problems.
              </RevealItem>

              <RevealItem
                as="div"
                variant="glide"
                className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-lg"
              >
                <a
                  href="https://github.com/Harsh77-prog"
                  target="_blank"
                  rel="noreferrer"
                  className="fx-button"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-kumar-116423316/"
                  target="_blank"
                  rel="noreferrer"
                  className="fx-button"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/hars.hkumar4299/"
                  target="_blank"
                  rel="noreferrer"
                  className="fx-button"
                >
                  <FaInstagram /> Instagram
                </a>
              </RevealItem>

              <RevealItem
                as="div"
                variant="glide"
                className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
              >
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fx-button"
                >
                  <span className="fx-badge">Resume</span>
                  View Resume
                </a>
              </RevealItem>
            </RevealGroup>

            <Reveal
              as="div"
              direction="right"
              duration={0.9}
              variant="glide"
              className="relative order-1 md:order-2"
            >
              <motion.div
                className="fx-panel about-hero-media overflow-hidden"
                style={{ backgroundImage: heroImage, y: reduceMotion ? 0 : heroFloat }}
              >
                <div className="about-hero-frame" />
                <div className="relative h-[320px] sm:h-[420px] md:h-[460px]">
                  <div className="about-hero-overlay" />
                </div>
                <div className="about-hero-badge">Available</div>
                <div className="about-hero-stats">
                  <div className="about-hero-stat">
                    <p className="about-hero-stat-label">Projects</p>
                    <p className="about-hero-stat-value">10+</p>
                  </div>
                  <div className="about-hero-stat">
                    <p className="about-hero-stat-label">Focus</p>
                    <p className="about-hero-stat-value">Full-Stack</p>
                  </div>
                  <div className="about-hero-stat">
                    <p className="about-hero-stat-label">Based In</p>
                    <p className="about-hero-stat-value">India</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
});

// Add prop-types validation
About.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

About.displayName = "About";

export default About;





