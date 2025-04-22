const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// CRUD operations
router.post('/', noteController.createNote);
router.get('/:userId', noteController.getNotes);
router.get('/:userId/:noteId', noteController.getNoteById);
router.put('/:userId/:noteId', noteController.updateNote);
router.delete('/:userId/:noteId', noteController.deleteNote);
router.get('/:userId/label/:label', noteController.getNotesByLabel);

module.exports = router;
