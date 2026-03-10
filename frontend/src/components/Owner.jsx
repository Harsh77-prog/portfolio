import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function OwnerReply({ isDark }) {
  const [questions, setQuestions] = useState([]);
  const [replies, setReplies] = useState({});

  const fetchQuestions = async () => {
    const res = await axios.get(`${backendUrl}/api/questions`);
    setQuestions(res.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleReply = async (id) => {
    await axios.post(`${backendUrl}/api/questions/reply/${id}`, {
      reply: replies[id],
    });
    setReplies({ ...replies, [id]: "" });
    fetchQuestions();
  };

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 max-w-4xl mx-auto transition-all duration-700 ease-in-out ${
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
                  onChange={(e) =>
                    setReplies({ ...replies, [q._id]: e.target.value })
                  }
                />

                <button
                  onClick={() => handleReply(q._id)}
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
}

OwnerReply.propTypes = {
  isDark: PropTypes.bool.isRequired,
};






