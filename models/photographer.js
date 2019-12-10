const mongoose = require('mongoose');
const photoSchema = require('./photo');

const photographerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  bio: String,
  linkdin: String,
  url: String,
  categories:[{type: mongoose.Schema.Types.ObjectId, ref: 'Categories'}],
  photos:[{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
})

module.exports = mongoose.model('Photographer', photographerSchema)