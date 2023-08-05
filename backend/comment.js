const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
