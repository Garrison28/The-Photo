const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: String,
  title: String,
  img: String
})

module.exports = mongoose.model('Photo', photoSchema)