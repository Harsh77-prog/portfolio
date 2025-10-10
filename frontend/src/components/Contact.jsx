import "../App.css";
import Questions from "./Questions";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import PropTypes from "prop-types";

export default function Contact({ isDark }) {
  const colors = {
    heading: isDark ? "text-yellow-400" : "text-black",
    subheading: isDark ? "text-yellow-200" : "text-gray-800",
    cardBg: isDark ? "bg-black" : "bg",
    cardShadow: isDark
      ? "shadow-[0_0_25px_#FFD700]/40"
      : "shadow-[0_0_25px_#000]/30",
    hoverShadow: isDark
      ? "hover:shadow-[0_0_35px_#FFD700]"
      : "hover:shadow-[0_0_35px_#000]",
    socialHover: isDark ? "hover:text-yellow-300" : "hover:text-black",
  };

  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-14 tracking-tight ${colors.heading} drop-shadow-lg`}
          >
            📬 Get In Touch
          </motion.h1>

          {/* Questions Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl p-1 ${colors.cardBg} border border-white/10 ${colors.cardShadow} hover:scale-[1.01] transition-all duration-300`}
          >
            <Questions isDark={isDark} />
          </motion.section>

          <br />
          <h2 className={`text-2xl font-semibold mb-6 ${colors.subheading}`}>Or</h2>

          {/* Contact Info */}
          <div className="space-y-6 max-w-xl mx-auto w-full px-4">
            <div className="text-center px-4 py-10 md:py-16">
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                viewport={{ once: true }}
                className={`text-3xl md:text-3xl font-bold mb-6 ${colors.heading} drop-shadow-md`}
              >
                📞 Contact Me
              </motion.h3>

              <div className="space-y-4 px-2 sm:px-4">
                <div className="motion-div">
                  <h3 className={`text-lg sm:text-xl font-semibold ${colors.heading}`}>Email</h3>
                  <p className={`text-base sm:text-lg ${colors.subheading} break-all`}>
                    harsh.kumar1a9@gmail.com
                  </p>
                </div>

                <div>
                  <h3 className={`text-lg sm:text-xl font-semibold ${colors.heading}`}>Phone</h3>
                  <p className={`text-base sm:text-lg ${colors.subheading} break-all`}>
                    +91 81988 70725
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.facebook.com/profile.php?id=100093563294785"
                target="_blank"
                className={`${colors.socialHover} transition-all duration-300`}
              >
                <FaFacebookF size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://x.com/HarshKumar71157"
                target="_blank"
                className={`${colors.socialHover} transition-all duration-300`}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/harsh-kumar-116423316/"
                target="_blank"
                className={`${colors.socialHover} transition-all duration-300`}
              >
                <FaLinkedinIn size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.instagram.com/hars.hkumar4299/"
                className={`${colors.socialHover} transition-all duration-300`}
              >
                <FaInstagram size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Contact.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
