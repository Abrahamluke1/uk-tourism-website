const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  id: String,
  image: String,
  title: String,
  description: String,
  postcode: String,
});

module.exports = mongoose.model('Place', placeSchema);
