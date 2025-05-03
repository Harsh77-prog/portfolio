const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  name: String,
  question: String,
  reply: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', questionSchema);
