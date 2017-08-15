const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

var Articles = mongoose.model('articles', articleSchema)
module.exports = Articles
