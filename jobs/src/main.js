'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = require('./routes.js');
var app = document.getElementById('app');

require('./utils/scripts.js')();

ReactDOM.render(routes, app);