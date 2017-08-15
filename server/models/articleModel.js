const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var articleSchema = new Schema ({
  title: String,
  content: String,
  category: String,
  author: {[ type: Schema.Types.ObjectId, ref: 'books']}
})

var Articles = mongoose.model('articles', articleSchema)


module.exports = Articles;
