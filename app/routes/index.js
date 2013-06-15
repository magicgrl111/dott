var mongoose = require('mongoose'),
    User     = mongoose.model('User'),
    Message  = mongoose.model('Message'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy;

exports.index = function(req, res){
  res.render('home');
};

exports.mailbox = function(req, res){
  res.render('main', { user: user });
};
