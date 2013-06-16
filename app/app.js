/**
 * Module Dependencies
 */
var express = require('express'),
  handlebars = require('express3-handlebars'),
  http = require('http'),
  path = require('path'),
  fs = require('fs'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var db = mongoose.connect('mongodb://localhost:17017/dott');

// Secrets for Google authentication
var clientID = process.env.DTT_GOOGLE_CLIENT_ID,
  clientSecret = process.env.DTT_GOOGLE_CLIENT_SECRET;

/**
 * Project Files
 */
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path + '/' + file);
});
var routes = require('./routes');
var helpers = require('./views/lib/helpers');
var User = require('./models/user');

// TODO: Sort
passport.serializeUser(function(user, done) {
  debugger;
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  debugger;
  User.findOne({ _id: id }, function (err, user) {
    done(err, user)
  });
});

passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback"
  }, function(accessToken, refreshToken, profile, done) {
    User.findById(profile.id).exec(function(err, user) {
      if (!user) {
        var user = new User({
          _id: profile.id,
          provider: 'google',
          email: profile.emails[0].value,
          display_name: profile.displayName,
          name: {
            first: profile.givenName,
            last: profile.familyName
          }
        });
        return user.save(function(err) {
          if (err) { throw err; }
          return done(err, user);
        });
      }
      return done(err, user);
    }, function(err, user) {
      if (err) {throw err;}
      done(null, user._id);
    });
  }
));

/**
 * Initialize app
 */
var app = express();

/**
 * Handlebars Configuration
 */
app.engine('handlebars', handlebars({
  // Set the partials and layouts directories relative to this file's path
  partialsDir: path.join(__dirname, 'views'),
  layoutsDir: path.join(__dirname, 'views', 'layouts'),

  // Set the default layout to views/layouts/main.handlebars
  defaultLayout: 'main',

  helpers: helpers
}));

/**
 * Server Configuration
 */
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Development Settings
  */
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * Routes
 */
app.get('/', routes.index);
app.get('/mailbox', routes.mailbox);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile',
                                            'https://www.googleapis.com/auth/userinfo.email'] }),
    function(req, res) {
    // The request will be redirected to Google for authentication, so this
    // function will not be called.
  });

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), routes.auth_google_callback);

/**
 * Initialize server
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('dott server listening on port ' + app.get('port'));
});
