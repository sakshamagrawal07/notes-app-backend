const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'checkbox', 'image'],
    required: true
  },
  content: {
    type: String // Text, checkbox label, or base64 image string
  },
  checked: {
    type: Boolean // Only used if type === 'checkbox'
  },
  order: {
    type: Number,
    required: true
  }
}, { _id: false });

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  blocks: [blockSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  color: {
    type: String,
    default: '#ffffff' // Default to white, like Google Keep
  },
  label: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
