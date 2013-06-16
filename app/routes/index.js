var mongoose = require('mongoose'),
  User     = mongoose.model('User'),
  Message  = mongoose.model('Message');

exports.index = function(req, res){
  res.render('home');
};

exports.mailbox = function(req, res){
  res.render('mailbox');
};

exports.auth_google_callback = function(req, res) {
  res.redirect('/');
};
