const Articles = require('../models/articleModel');
const Users = require('../models/userModel');

var createArticle = (req, res) => {
  let newArticle = new Articles({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  })

  newArticle.save((error, response) => {
    if (error) res.send(err)
    else {
      Articles.findById(response._id)
      .populate('author')
      .then((error, response) => {
        if (error) res.send(err)
        else {
          console.log(response);
          res.send(response)
        }
      })
    }
  })
}

var getAllArticles = (req,res) => {
  Articles.find((err,articles) => {
    if(err) res.send(err)
    console.log(articles);
    res.send(articles)
  })
}

var getArticleByAuthor = (req,res) => {
  Articles.find()
  .populate('author')
  .then( (err,response) => {
    var push
    articlePush = []
    response.forEach( article => {
      if(article._id == req.params.id) {
        articlePush.push(article)
      }
    })
    res.send(articlePush)
  })
}

var updateArticle = (req,res) => {
  Articles.update({
    _id : req.params.id
  }, {
    $set: {
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      author: req.body.author
    }
  })
  .then((err,result) => {
    if(err) {
      res.send(err)
    } else {
      Articles.findById(result._id)
      .populate('author')
      .then( (err,article) => {
        if(err) res.send(err)
        res.send(article)
      })
    }
  })
}

var deleteArticle = (req,res) => {
  let id = req.params.id;
  Articles.findOneAndRemove(id, (err,result) => {
    if(err) res.send(err)
    console.log('delete article success', result);
    res.send(result)
  })
}

module.exports = {
  createArticle, getAllArticles, getArticleByAuthor,
  updateArticle, deleteArticle
}
