var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

// rota padrão para arquivos estáticos HTML site
app.use(express.static('public'));

// rota padrão para arquivos estáticos HTML noticias
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// configura o middeware do express-session
app.use(expressSession({
  secret:'ksjdisdkjfdsfsdfsdf9s8dfsdfsds9sd',
  resave: false,
  saveUninitialized: false
}));

consign()
    .include('app/routes')
    .then('config/dbConnectionMongo.js')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;