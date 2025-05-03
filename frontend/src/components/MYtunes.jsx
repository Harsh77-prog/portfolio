
import '../App.css';
import { motion } from "framer-motion";
export default function MyTunes() {
  return (
    <div className="w-full max-w-full px-4 sm:px-6 md:px-8 rounded-2xl shadow-xl mx-auto overflow-hidden">
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-14 tracking-tight text-white text-center"
  >
    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      ✦ My Tunes
    </span>
  </motion.h1>

  <p className="text-gray-400 mb-4 text-center text-sm sm:text-base">
    Explore the tracks shaping my vibe
  </p>

  <div className="w-full">
    <iframe
      src="https://open.spotify.com/embed/track/2jEf6dXLaPI8yAZg7Vbeb4?utm_source=generator"
      width="100%"
      height="7%"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      className="rounded-lg w-full max-w-full"
    ></iframe>
  </div>
</div>

  );
}
