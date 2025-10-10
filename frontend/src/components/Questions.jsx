import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function AskQuestion({ isDark }) {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const fetchQuestions = async () => {
    const res = await axios.get(`${backendUrl}/api/questions`);
    setQuestions(res.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${backendUrl}/api/questions`, { name, question });
    setName("");
    setQuestion("");
    fetchQuestions();
    if (!showQuestions) setShowQuestions(true);
  };

  // Theme colors
  const colors = {
    cardBg: isDark ? "bg-black" : "bg-gradient-to-r from-gray-100 to-gray-300",
    cardShadow: isDark
      ? "shadow-[0_0_20px_#FFD700]/50"
      : "shadow-[0_0_20px_#000]/30",
    textColor: isDark ? "text-yellow-400" : "text-black",
    inputBg: isDark
      ? "bg-black text-yellow-400 border-yellow-400 placeholder-yellow-300"
      : "bg-gradient-to-r from-gray-100 to-gray-300 text-black border-black placeholder-gray-600",
    buttonBg: isDark
      ? "bg-yellow-400 text-black hover:bg-yellow-300"
      : "bg-black text-white hover:bg-gray-800",
    hoverShadow: isDark
      ? "hover:shadow-[0_0_25px_#FFD700]"
      : "hover:shadow-[0_0_25px_#000]",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Heading with moving animation */}
     

      {/* Ask Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative p-6 rounded-2xl border ${colors.cardBg} ${colors.cardShadow} mb-10 transition-all duration-300`}
      >
        <div className="relative z-10 flex flex-col gap-4">
          <motion.input
            whileFocus={{ scale: 1.02, boxShadow: isDark ? "0 0 15px #FFD700" : "0 0 15px #000" }}
            className={`p-3 w-full rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300 ${colors.inputBg}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02, boxShadow: isDark ? "0 0 15px #FFD700" : "0 0 15px #000" }}
            className={`p-3 w-full rounded-xl h-32 resize-none border focus:outline-none focus:ring-2 focus:ring-yellow-200 transition-all duration-300 ${colors.inputBg}`}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full p-3 font-bold rounded-xl transition-all duration-300 ${colors.buttonBg} ${colors.hoverShadow}`}
          >
            ⚡ Ask Question
          </motion.button>
        </div>
      </motion.form>

      {/* Toggle Questions Button */}
      <div className="text-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${colors.cardBg} border ${colors.textColor} ${colors.hoverShadow}`}
          onClick={() => setShowQuestions(!showQuestions)}
        >
          {showQuestions ? "Hide Questions ❌" : "Show Questions 📜"}
        </motion.button>
      </div>

      {/* Questions Container */}
      {showQuestions && (
        <div className="max-h-[400px] overflow-y-auto space-y-6">
          {questions.map((q) => (
            <motion.div
              key={q._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{ duration: 0.8 }}
              className={`rounded-2xl p-4 border ${colors.cardBg} ${colors.cardShadow} transition-transform duration-300 hover:scale-[1.01] ${colors.hoverShadow}`}
            >
              {/* Question */}
              <div className="flex items-center gap-4">
                <div
                  className={`min-w-[40px] h-10 w-10 rounded-full ${colors.textColor} flex items-center justify-center font-bold shadow-md`}
                >
                  {q.userAvatar ? (
                    <img
                      src={q.userAvatar}
                      alt={q.name}
                      className="rounded-full object-cover w-10 h-10"
                    />
                  ) : (
                    <span>{q.name[0].toUpperCase()}</span>
                  )}
                </div>
                <div className="items-center gap-2 text-sm">
                  <p className={`leading-snug text-justify ${colors.textColor}`}>
                    <strong className={`font-semibold ${colors.textColor}`}>
                      {q.name.charAt(0).toUpperCase() + q.name.slice(1)} :
                    </strong>{" "}
                    {q.question}
                  </p>
                </div>
              </div>

              {/* Reply */}
              {q.reply && (
                <div className="flex items-center gap-4 mt-4">
                  <div
                    className={`min-w-[36px] w-9 h-9 rounded-full ${colors.textColor} flex items-center justify-center shadow-md`}
                  >
                    <img
                      src="HarshImage.png"
                      alt="Admin"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                  </div>
                  <div className="items-center gap-2 text-sm">
                    <p className={`leading-snug text-justify ${colors.textColor}`}>
                      <strong className={`font-semibold ${colors.textColor}`}>
                        Reply :{" "}
                      </strong>
                      {q.reply}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

AskQuestion.propTypes = {
  isDark: PropTypes.bool.isRequired,
};
