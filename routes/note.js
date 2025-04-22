const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const { validateNote } = require('../middleware/noteValidators');
const { validationResult } = require('express-validator');

// Middleware to handle validation result
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

// Routes
router.post('/create', validateNote, handleValidation, noteController.createNote);
router.get('/user/:userId', noteController.getNotes);
router.get('/user/:userId/:noteId', noteController.getNoteById);
router.put('/user/:userId/:noteId', validateNote, handleValidation, noteController.updateNote);
router.delete('/user/:userId/:noteId', noteController.deleteNote);
router.get('/user/:userId/label/:label', noteController.getNotesByLabel);

module.exports = router;
