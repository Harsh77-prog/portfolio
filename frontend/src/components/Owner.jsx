import { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const OwnerReply = memo(function OwnerReply({ isDark }) {
  const [questions, setQuestions] = useState([]);
  const [replies, setReplies] = useState({});

  const fetchQuestions = useCallback(async () => {
    const res = await axios.get(`${backendUrl}/api/questions`);
    setQuestions(res.data);
  }, [backendUrl]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleReply = useCallback(
    async (id) => {
      const reply = replies[id];
      if (!reply) return;
      await axios.post(`${backendUrl}/api/questions/reply/${id}`, {
        reply,
      });
      setReplies((prev) => ({ ...prev, [id]: "" }));
      fetchQuestions();
    },
    [backendUrl, fetchQuestions, replies]
  );

  const handleReplyChange = useCallback((event) => {
    const id = event.target.dataset.id;
    if (!id) return;
    const value = event.target.value;
    setReplies((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleReplyClick = useCallback(
    (event) => {
      const id = event.currentTarget.dataset.id;
      if (!id) return;
      handleReply(id);
    },
    [handleReply]
  );

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 max-w-4xl mx-auto fx-cream-trans ${
        isDark ? "text-white" : "text-slate-900"
      }`}
    >
      {/* 🏷️ Page Heading */}
      <h2
        className="fx-title text-center"
      >
        Reply to Questions{" "}
        <span
          className={`text-sm font-normal ${isDark ? "text-slate-300" : "text-slate-600"}`}
        >
          (Admin Only)
        </span>
      </h2>
      <div className="fx-holo-line mx-auto mt-4 mb-10" />

      {/* 🧠 All Questions */}
      {questions.length === 0 ? (
        <p
          className={`text-center mt-20 text-lg ${
            isDark ? "text-gray-500" : "text-gray-700"
          }`}
        >
          No questions found.
        </p>
      ) : (
        questions.map((q) => (
          <div
            key={q._id}
            className="fx-panel p-5 sm:p-6 mb-6"
          >
            <div className="fx-ring" />
            {/* 🧩 Question */}
            <p
              className={`mb-3 text-base leading-relaxed ${
                isDark
                  ? "text-slate-200"
                  : "text-slate-700"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-sky-200" : "text-slate-900"
                }`}
              >
                {q.name}:
              </span>{" "}
              {q.question}
            </p>

            {/* 💬 Reply or Input */}
            {q.reply ? (
              <p
                className={`mt-3 p-3 rounded-md ${isDark ? "bg-sky-200/10 text-sky-200" : "bg-slate-900/5 text-slate-700"}`}
              >
                <strong>Reply:</strong> {q.reply}
              </p>
            ) : (
              <>
                <input
                  className="fx-input mt-3"
                  placeholder="Type your reply..."
                  value={replies[q._id] || ""}
                  data-id={q._id}
                  onChange={handleReplyChange}
                />

                <button
                  data-id={q._id}
                  onClick={handleReplyClick}
                  className="fx-button mt-4"
                >
                  Send Reply
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
});

OwnerReply.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

OwnerReply.displayName = "OwnerReply";

export default OwnerReply;






