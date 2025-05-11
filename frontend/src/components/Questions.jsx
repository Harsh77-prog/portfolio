// AskQuestion.js
import { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log("Backend URL:", backendUrl);

export default function AskQuestion() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

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
  };

  return (
    <div className=" max-w-3xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
        Ask Me Anything
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] border border-gray-700 p-6 rounded-2xl shadow-lg mb-8"
      >
        <input
          className="bg-[#121212] text-white border border-gray-600 placeholder-gray-400 p-3 w-full mb-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <textarea
          className="bg-[#121212] text-white border border-gray-600 placeholder-gray-400 p-3 w-full mb-4 rounded-xl resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Your Question"
          required
        />
       <div className="relative group w-full">
  <button className="relative w-full px-4 py-3 font-semibold rounded-xl text-white backdrop-blur-md  border border-white/20 overflow-hidden z-10" style = {{background: "linear-gradient(to right,#17037B, #3B3B3B, #4F0053)", color: "white"}}> 
    ⚡ Ask Question
    {/* Glowing moving border */}
    <span className="absolute inset-0 rounded-xl pointer-events-none border-effect"></span>
  </button>
</div>


      </form>

      <div className="space-y-4 px-2 sm:px-4">
  {questions.map((q) => (
    <div
      key={q._id}
      className="bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl shadow-sm"
    >
      {/* Question Section */}
      <div className="flex gap-3">
        {/* User Avatar */}
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center shrink-0">
          {!q.userAvatar ? (
            <span className="text-white text-sm font-semibold">
              {q.name[0].toUpperCase()}
            </span>
          ) : (
            <img
              src={q.userAvatar}
              alt={q.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
        </div>

        {/* Question Text */}
        <div className="text-gray-300 text-left text-justify leading-relaxed w-full">
          <span className="font-semibold text-blue-400">{q.name}:</span>{" "}
          {q.question}
        </div>
      </div>

      {/* Reply Section */}
      {q.reply && (
        <div className="flex gap-3 mt-3">
          {/* Reply Avatar */}
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
            <img
              src="HarshImage.png"
              alt="Your Name"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {/* Reply Text */}
          <div className="text-green-400 text-left text-justify leading-relaxed w-full">
            <strong>Reply:</strong> {q.reply}
          </div>
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
}
