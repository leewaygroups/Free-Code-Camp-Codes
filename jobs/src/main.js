'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var routes = require('./routes.js');
var app = document.getElementById('app');

// var UtilService = require('./utils/scripts.js');
// UtilService.toggleNavigationToDynamic();

ReactDOM.render(routes, app);