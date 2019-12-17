const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  id: String,
  title: String,
  cloudinaryImg: String,
  photographerId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photographer'}]
})

module.exports = mongoose.model('Photo', photoSchema)