requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'firebase': '../lib/bower_components/firebase/firebase',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'lodash': '../lib/bower_components/lodash/lodash'
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

define(function(require) {
  var $ = require("jquery");
  var bootstrap = require("bootstrap");
  var hbs = require("hbs");
  var _ = require("lodash");
  var fb = require("firebase");
  var start = require("start-game");

  start();

});//end require 