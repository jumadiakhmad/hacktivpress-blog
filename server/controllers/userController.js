require('dotenv').config()
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY;

var signIn = (req,res) => {
  Users.findOne({username:req.body.username}, function(err,data){ //mencari data
    if (data) { // apabila menemukan
      if (data.password === req.body.password) { //apabila data password sama dengan user password

        var token = jwt.sign(data, 'jwtsecret', { // melakukan generate token di jwt
          algorithm: 'HS256'
        });
        res.json({message:'berhasil login', token: token});

      } else { //apabila salah password
        res.json({message:'password salah'});
      }
    } else { //apabila username tidak di temukan
      res.json({message:'username tidak di temukan'});
    }
  });
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
