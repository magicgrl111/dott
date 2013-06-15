/**
 * Module dependencies.
 */

var express = require('express'),
  handlebars = require('express3-handlebars'),
  routes = require('./routes'),
  http = require('http'),
  path = require('path');

var app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

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

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes
app.get('/', routes.index);

// Initialize server
http.createServer(app).listen(app.get('port'), function(){
  console.log('dott server listening on port ' + app.get('port'));
});
