const Note = require('../models/note');

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, blocks, color, label, userId } = req.body;
    const note = new Note({ title, blocks, color, label, userId });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all notes for a user
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.params.userId }).sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.noteId, userId: req.params.userId });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const { title, blocks, color, label } = req.body;
    const note = await Note.findOneAndUpdate(
      { _id: req.params.noteId, userId: req.params.userId },
      { title, blocks, color, label },
      { new: true }
    );
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.noteId, userId: req.params.userId });
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all notes by label for a user
exports.getNotesByLabel = async (req, res) => {
  try {
    const { userId, label } = req.params;
    const notes = await Note.find({ userId, label }).sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
