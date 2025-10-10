import '../App.css';
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaSpotify } from "react-icons/fa";

export default function MyTunes({ isDark }) {
  const shadowHover = isDark
    ? "hover:shadow-[0_0_30px_#FFD700]/80"
    : "hover:shadow-[0_0_25px_#000000]/60";

  const bgGlow = isDark
    ? "bg-gradient-to-br from-black/40 via-black/20 to-black/30"
    : "bg-gradient-to-br from-white/30 via-white/20 to-white/10";

  // Multiple Spotify tracks
  const tracks = [
    "3A6W2pP8OVyuRNNIgrkleZ",
    "7AAap8D4C4pTyNoMkM9vjG",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className={`w-full max-w-full rounded-2xl ${bgGlow} p-6 shadow-none overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${shadowHover} hover:scale-105`}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-10 tracking-tight text-center`}
      >
        <span
          className={`bg-gradient-to-r ${
            isDark ? "from-yellow-400 to-yellow-600" : "from-black to-gray-700"
          } text-transparent bg-clip-text animate-pulse flex items-center justify-center gap-2`}
        >
          <FaSpotify /> ✦ My Tunes
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "mirror" }}
        className={`mb-6 text-center text-sm sm:text-base font-medium transition-colors duration-300 ${
          isDark ? "text-yellow-200" : "text-gray-800"
        }`}
      >
        Explore the tracks shaping my vibe
      </motion.p>

      {/* Playlist */}
      <div className="flex flex-col gap-4">
        {tracks.map((track, index) => (
          <motion.div
            key={track}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 + index * 0.2 }}
            className={`relative w-full rounded-xl overflow-hidden border-0 p-1 ${
              isDark
                ? "bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-yellow-500/20"
                : "bg-gradient-to-r from-blue-200/40 via-pink-100/20 to-purple-200/30"
            }`}
          >
            <iframe
              src={`https://open.spotify.com/embed/track/${track}?utm_source=generator`}
              width="100%"
              height="180"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-lg w-full max-w-full relative z-10"
            ></iframe>
            {/* Optional animated glow overlay */}
            <motion.div
              className={`absolute inset-0 rounded-lg pointer-events-none ${
                isDark ? "bg-yellow-500/10" : "bg-purple-300/10"
              }`}
              animate={{ opacity: [0.2, 0.05, 0.2] }}
              transition={{ repeat: Infinity, duration: 2 + index * 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

MyTunes.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
