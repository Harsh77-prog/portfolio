import { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Reveal, { CREAM_EASE } from "./Reveal";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const ADMIN_IMAGE_BASE = "/HarshImage";

const AskQuestion = memo(function AskQuestion({ isDark }) {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  const fetchQuestions = useCallback(async () => {
    const res = await axios.get(`${backendUrl}/api/questions`);
    setQuestions(res.data);
  }, [backendUrl]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await axios.post(`${backendUrl}/api/questions`, { name, question });
      setName("");
      setQuestion("");
      fetchQuestions();
      setShowQuestions(true);
    },
    [backendUrl, fetchQuestions, name, question]
  );

  const handleNameChange = useCallback((event) => setName(event.target.value), []);
  const handleQuestionChange = useCallback((event) => setQuestion(event.target.value), []);
  const handleToggleQuestions = useCallback(
    () => setShowQuestions((prev) => !prev),
    []
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Ask Form */}
      <Reveal
        as="form"
        onSubmit={handleSubmit}
        className="relative mb-10"
      >
        <div className="relative z-10 flex flex-col gap-4">
          <p className="fx-subtitle">Send a question</p>
          <motion.input
            whileFocus={{ scale: 1.02, boxShadow: isDark ? "0 0 15px #000" : "0 0 15px #000" }}
            transition={{ duration: 0.45, ease: CREAM_EASE }}
            className="fx-input"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02, boxShadow: isDark ? "0 0 15px #000" : "0 0 15px #000" }}
            transition={{ duration: 0.45, ease: CREAM_EASE }}
            className="fx-input h-32 resize-none"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.45, ease: CREAM_EASE }}
            className="fx-button justify-center"
          >
            Ask Question
          </motion.button>
        </div>
      </Reveal>

      {/* Toggle Questions Button */}
      <div className="text-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45, ease: CREAM_EASE }}
          className="fx-button"
          onClick={handleToggleQuestions}
        >
          {showQuestions ? "Hide Questions" : "Show Questions"}
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
              transition={{ duration: 1.2, ease: CREAM_EASE }}
              className="fx-panel p-4"
            >
              <div className="fx-ring" />
              {/* Question */}
              <div className="flex items-center gap-4">
                <div
                  className={`min-w-[40px] h-10 w-10 rounded-full flex items-center justify-center font-bold shadow-md ${
                    isDark ? "bg-sky-200/20 text-sky-200" : "bg-slate-900/10 text-slate-900"
                  }`}
                >
                  {q.userAvatar ? (
                    <img
                      src={q.userAvatar}
                      alt={q.name}
                      loading="lazy"
                      decoding="async"
                      width="40"
                      height="40"
                      className="rounded-full object-cover w-10 h-10"
                    />
                  ) : (
                    <span>{q.name[0].toUpperCase()}</span>
                  )}
                </div>
                <div className="items-center gap-2 text-sm">
                  <p className={`leading-snug text-justify ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    <strong className={`font-semibold ${isDark ? "text-sky-200" : "text-slate-900"}`}>
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
                    className={`min-w-[36px] w-9 h-9 rounded-full flex items-center justify-center shadow-md ${
                      isDark ? "bg-sky-200/20 text-sky-200" : "bg-slate-900/10 text-slate-900"
                    }`}
                  >
                    <picture>
                      <source srcSet={`${ADMIN_IMAGE_BASE}.avif`} type="image/avif" />
                      <source srcSet={`${ADMIN_IMAGE_BASE}.webp`} type="image/webp" />
                      <img
                        src={`${ADMIN_IMAGE_BASE}.png`}
                        alt="Admin"
                        loading="lazy"
                        decoding="async"
                        width="36"
                        height="36"
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    </picture>
                  </div>
                  <div className="items-center gap-2 text-sm">
                    <p className={`leading-snug text-justify ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                      <strong className={`font-semibold ${isDark ? "text-sky-200" : "text-slate-900"}`}>
                        Reply:
                      </strong>{" "}
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
});

AskQuestion.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

AskQuestion.displayName = "AskQuestion";

export default AskQuestion;





