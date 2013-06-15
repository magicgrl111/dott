var mongoose = require('mongoose'),
    User     = mongoose.model('User'),
    Message  = mongoose.model('Message'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy;

exports.index = function(req, res){
  res.render('home');
};

exports.mailbox = function(req, res){
  var user = new User();
  console.log(req.query);
  res.render('mailbox', { openid: req.query });
};
