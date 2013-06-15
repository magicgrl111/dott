/**
 * Module dependencies.
 */

var express = require('express'),
  handlebars = require('express3-handlebars'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  passport = require('passport'),
  GoogleStrategy = require('passport-google').Strategy,
  mongoose = require('mongoose');
  
// models
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path + '/' + file);
});


var routes = require('./routes');
var app = express();

// Create an instance of Handlebars
var hb = handlebars.create({
  defaultLayout: 'main'
});

app.engine('handlebars', hb.engine);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://dott:dott@dharma.mongohq.com:10012/dott');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
// Routes
app.get('/', routes.index);
app.get('/mailbox', routes.mailbox);
// logic for passport
passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/mailbox',
    realm: 'http://localhost:3000'
  },
  function(identifier, profile, done) {
    User.findOrCreate({ openId: identifier }, function(err, user) {
      done(err, user);
    });
  }
));

// Redirect the user to Google for authentication.  When complete, Google
// will redirect the user back to the application at
//     /auth/google/return
app.get('/auth/google', passport.authenticate('google'));

// Google will redirect the user to this URL after authentication.  Finish
// the process by verifying the assertion.  If valid, the user will be
// logged in.  Otherwise, authentication has failed.
app.get('/auth/google/return',
passport.authenticate('google', { successRedirect: '/mailbox',
                                    failureRedirect: '/login' }));

// Initialize server
http.createServer(app).listen(app.get('port'), function(){
  console.log('dott server listening on port ' + app.get('port'));
});
