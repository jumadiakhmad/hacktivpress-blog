require('dotenv').config()
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY;

var signIn = (req,res) => {
  var password = req.body.password
  Users.findOne({username: req.body.password}, (err,response) => {
    if(err) {
        res.send(err)
    } else {
        if(bcrypt.compareSync(password, response.password) {
          let token = jwt.sign({
            id: response._id,
            username: resonse.username,
            email: response.email
          }, secret, {expires: '1d'})
          res.json({
            username: response._id,
            email: response.email,
            token
          })
        }
    } else {
      res.send(err)
    }
  })
}

var signUp = (req,res) => {
  var password = req.body.password
  var newUser = new Users({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  newUser.save( (err,user) => {
    if(err) res.send(err)
    console.log(user);
    res.send(user)
  })
}

var getAllUsers = (req,res) => {
  Users.find({}, (err,users) => {
    if(err) res.send(err)
    res.send(users)
  })
}

module.exports = {
  signIn, signUp, getAllUsers
}
