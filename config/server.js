//var express = require('express')(); //chama uma função e ja retorna ela.
var express = require('express');

var app = express();
//motor de geração de views
app.set('view engine', 'ejs');
//busca o diretorio de views
app.set('views', './app/views');

module.exports = app;