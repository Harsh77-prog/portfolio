// OwnerReply.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function OwnerReply() {
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
    await axios.post(`${backendUrl}/api/questions/reply/${id}`, { reply: replies[id] });
    setReplies({ ...replies, [id]: '' });
    fetchQuestions();
  };

  return (
    <div className="p-4 sm:p-6 max-w-3xl mx-auto text-white">
    <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
      🛠️ Reply to Questions <span className="text-sm text-gray-400">(Admin Only)</span>
    </h2>
  
    {questions.map((q) => (
      <div
        key={q._id}
        className="bg-gray-800 border border-gray-700 p-4 sm:p-5 rounded-2xl shadow-md mb-5 transition hover:shadow-lg"
      >
        <p className="mb-2 text-base leading-relaxed">
          <span className="font-medium text-blue-400">{q.name}:</span> {q.question}
        </p>
  
        {q.reply ? (
          <p className="text-green-400 mt-3 bg-gray-900 p-3 rounded-md">
            <strong>Reply:</strong> {q.reply}
          </p>
        ) : (
          <>
            <input
              className="w-full mt-3 px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your reply..."
              value={replies[q._id] || ''}
              onChange={(e) =>
                setReplies({ ...replies, [q._id]: e.target.value })
              }
            />
  
            <button
              onClick={() => handleReply(q._id)}
              className="mt-3 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
            >
              Send Reply
            </button>
          </>
        )}
      </div>
    ))}
  </div>
  
  );
}
