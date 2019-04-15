const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  id: String
}, { versionKey: false })

module.exports = mongoose.model('Author', AuthorSchema)