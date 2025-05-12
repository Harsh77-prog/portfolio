import { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function AskQuestion() {
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

  return (
    <div className="max-w-3xl mx-auto  text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
        Ask Me Anything 💬
      </h2>

      {/* Ask Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#121212] border border-gray-700 p-6 rounded-2xl shadow-2xl mb-10 relative overflow-hidden"
      >
        <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl opacity-30 animate-pulse z-0" />
        <div className="relative z-10">
          <input
            className="bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 p-3 w-full mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <textarea
            className="bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 p-3 w-full mb-4 rounded-xl resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            required
          />
          <button
            className="w-full px-5 py-3 font-bold rounded-xl text-white border border-white/30 bg-gradient-to-r from-blue-800 to-purple-900 hover:from-purple-800 hover:to-pink-700 transition duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            ⚡ Ask Question
          </button>
        </div>
      </form>

      {/* Toggle Button */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowQuestions(!showQuestions)}
          className="px-6 py-3 rounded-full text-white font-semibold border border-gray-600 bg-[#1f1f1f] hover:bg-blue-900 transition-all duration-300"
        >
          {showQuestions ? "Hide Questions ❌" : "Show Questions 📜"}
        </button>
      </div>

      {/* Questions Container */}
     {showQuestions && (
  <div className="max-h-[400px] overflow-y-auto p-4 space-y-6 bg-gradient-to-br from-[#1a1a1a] via-[#111111cc] to-[#0f0f0f] border border-[#3a3a3a] rounded-2xl backdrop-blur-md shadow-inner transition-all duration-500 scrollbar-hide">
    {questions.map((q) => (
      <div
        key={q._id}
        className="rounded-2xl p-4 bg-black/40 backdrop-blur-xl border border-[#2e2e2e] shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-500/20"
      >
        {/* Question */}
        <div className="flex items-center gap-4">
          <div className="min-w-[40px] h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center font-bold text-white shadow-md">
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

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <h2 className="font-semibold text-blue-400">
              {q.name.charAt(0).toUpperCase() + q.name.slice(1)}:
            </h2>
            <p className="text-gray-300 leading-snug">{q.question}</p>
          </div>
        </div>

        {/* Reply */}
        {q.reply && (
          <div className="flex items-center gap-4 mt-4 pl-12 border-l-2 border-blue-700/50">
            <div className="min-w-[36px] w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
              <img
                src="HarshImage.png"
                alt="Admin"
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <h2 className="font-semibold text-green-400">Reply:</h2>
              <p className="text-gray-300 leading-snug">{q.reply}</p>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
)}

    </div>
  );
}
