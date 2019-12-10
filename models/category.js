const mongoose = require('mongoose');
const photoSchema = require('./photo');

const categorySchema = new mongoose.Schema({
  id: String,
  name: String,
  content: String,
  photographers:[{type: mongoose.Schema.Types.ObjectId, ref: 'Photographers'}],
  photos: [{type: mongoose.Schema.Types.ObjectId, ref: 'Photo'}]
})

module.exports = mongoose.model('Category', categorySchema)