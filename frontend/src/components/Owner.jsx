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
      className={`min-h-screen p-4 sm:p-6 max-w-3xl mx-auto transition-all duration-700 ease-in-out ${
        isDark
          ? " text-yellow-200"
          : " text-white"
      }`}
    >
      {/* 🏷️ Page Heading */}
      <h2
        className={`text-3xl font-semibold mb-8 pb-2 border-b-2 text-center tracking-wide ${
          isDark
            ? "border-[#FFD700]/40 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-200 animate-goldFlow"
            : "border-black/40 text-black"
        }`}
      >
        🛠️ Reply to Questions{" "}
        <span
          className={`text-sm font-normal ${
            isDark ? "text-yellow-200" : "text-gray-600"
          }`}
        >
          (Admin Only)
        </span>
      </h2>

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
            className={`p-5 sm:p-6 rounded-2xl mb-6 border transition-all duration-500 shadow-md hover:shadow-lg ${
              isDark
                ? "bg-[#121212] border-[#FFD700]/20 hover:border-[#FFD700]/40"
                : "bg-white border-gray-300 hover:border-black/30"
            }`}
          >
            {/* 🧩 Question */}
            <p
              className={`mb-3 text-base leading-relaxed ${
                isDark
                  ? "text-black bg-gradient-to-r from-yellow-100 to-yellow-200 bg-clip-text text-transparent"
                  : "text-gray-800"
              }`}
            >
              <span
                className={`font-semibold ${
                  isDark ? "text-yellow-200" : "text-blue-700"
                }`}
              >
                {q.name}:
              </span>{" "}
              {q.question}
            </p>

            {/* 💬 Reply or Input */}
            {q.reply ? (
              <p
                className={`mt-3 p-3 rounded-md ${
                  isDark
                    ? "bg-black/20 text-[#32CD32] font-medium"
                    : "bg-gray-100 text-green-700"
                }`}
              >
                <strong>Reply:</strong> {q.reply}
              </p>
            ) : (
              <>
                <input
                  className={`w-full mt-3 px-4 py-2 rounded-lg border outline-none transition-all duration-300 ${
                    isDark
                      ? "bg-black/20 border-[#FFD700]/20 text-yellow-600 placeholder-[#b8860b] focus:border-yellow-200"
                      : "bg-gray-100 border-gray-400 text-black placeholder-gray-500 focus:border-black"
                  }`}
                  placeholder="Type your reply..."
                  value={replies[q._id] || ""}
                  onChange={(e) =>
                    setReplies({ ...replies, [q._id]: e.target.value })
                  }
                />

                <button
                  onClick={() => handleReply(q._id)}
                  className={`mt-4 px-5 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isDark
                      ? "bg-gradient-to-r from-yellow-100 to-yellow-200 text-black hover:scale-105"
                      : "bg-black text-white hover:scale-105"
                  }`}
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
