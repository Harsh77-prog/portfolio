import "../App.css";
import Questions from "./Questions";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function Contact() {
  return (
    <div>
      <section className=" py-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-14 tracking-tight  text-white"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              📬 Get In Touch
            </span>
          </motion.h1>
          {/* Questions Section */}
          <section className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5 p-1 hover:shadow-blue-900 transition-shadow duration-300">
            <Questions />
          </section>
          <br></br>
          <h2 className="text-2xl text-gray-300 font-semibold">Or</h2>
          <div className="space-y-6 max-w-xl mx-auto w-full px-4">
            <div className="text-center px-4 py-10 md:py-16">
              <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-3xl font-bold mb-3 tracking-tight text-white"
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  📞 Contact Me
                </span>
              </motion.h3>

              <div className="space-y-3">
                <p className="text-gray-300 text-lg md:text-xl">
                  <strong>Email:</strong> harsh.kumar1a9@gmail.com
                </p>
                <p className="text-gray-300 text-lg md:text-xl">
                  <strong>Phone:</strong> +91 81988 70725
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100093563294785"
                target="_blank"
                className="text-blue-600 hover:text-blue-700"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com/HarshKumar71157"
                target="_blank"
                className="text-blue-400 hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="text-blue-700 hover:text-blue-800"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/hars.hkumar4299/"
                className="text-gray-300 hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Glow Effects */}
      </section>
    </div>
  );
}
