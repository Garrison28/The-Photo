const mongoose = require('mongoose');
const photoSchema = require('./photo');

const categorySchema = new mongoose.Schema({
  id: String,
  name: String,
  content: String,
  photos: [photoSchema]
})

module.exports = mongoose.model('Category', categorySchema)