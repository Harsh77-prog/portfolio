// AskQuestion.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log('Backend URL:', backendUrl);

export default function AskQuestion() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
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
    setName('');
    setQuestion('');
    fetchQuestions();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Ask Me Anything</h2>
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
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-4 py-3 rounded-xl font-semibold shadow-md"
      >
        Ask Question
      </button>
    </form>
  
    <div className="space-y-4">
  {questions.map((q) => (
    <div
      key={q._id}
      className="bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl shadow-sm"
    >
      <div className="flex items-center space-x-3">
        {/* User Avatar */}
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
          {!q.userAvatar ? (
            <span className="text-white text-sm font-semibold">
              {q.name[0].toUpperCase()}
            </span>
          ) : (
            <img
              src={q.userAvatar} // Use avatar URL if available
              alt={q.name}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
        </div>
        <p className="text-gray-300">
          <span className="font-semibold text-blue-400">{q.name}:</span> {q.question}
        </p>
      </div>

      {q.reply && (
        <div className="flex items-center space-x-3 mt-3">
          {/* Your Image in Reply */}
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <img
              src="HarshImage.png" // Replace with your image URL
              alt="Your Name"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
          <p className="text-green-400">
            <strong>Reply:</strong> {q.reply}
          </p>
        </div>
      )}
    </div>
  ))}
</div>

  </div>
  
  );
}
