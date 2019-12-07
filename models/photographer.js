const mongoose = require('mongoose');
const photoSchema = require('./photo');

const photographerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  linkdin: String,
  photos:[{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
})

module.exports = mongoose.model('Photographer', photographerSchema)