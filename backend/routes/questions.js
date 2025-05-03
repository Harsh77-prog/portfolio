const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Submit question
router.post('/', async (req, res) => {
  const { name, question } = req.body;
  const newQ = new Question({ name, question });
  await newQ.save();
  res.json({ success: true });
});

// Get all questions
router.get('/', async (req, res) => {
  const questions = await Question.find().sort({ createdAt: -1 });
  res.json(questions);
});

// Admin reply
router.post('/reply/:id', async (req, res) => {
  const { id } = req.params;
  const { reply } = req.body;
  await Question.findByIdAndUpdate(id, { reply });
  res.json({ success: true });
});

module.exports = router;
