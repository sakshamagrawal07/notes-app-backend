const mongoose = require('mongoose');

const checkboxSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  }
}, { _id: false });

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },
  textData: {
    type: String,
    default: ''
  },
  checkboxes: [checkboxSchema],
  images: [String], // Array of base64-encoded image strings
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  color: {
    type: String,
    default: '#ffffff'
  },
  label: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
