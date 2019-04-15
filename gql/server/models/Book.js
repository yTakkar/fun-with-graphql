const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
}, { versionKey: false })

module.exports = mongoose.model('Book', BookSchema)
