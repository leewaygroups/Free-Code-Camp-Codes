'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var $ = require("jquery");

/**Route history */
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

/*Components*/
var Layout = require('./components/layout/layoutComponent-react.js');
var Home = require('./components/home/homePageComponent-react.js');
var Vacancies = require('./components/vacancy/vacancyListingComponent-react.js');

function onTransition (){
 //TODO: detect route transition and handle route transition related tasks
}

module.exports = (
     <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} onLeave={onTransition}/>
            <Route path="vacancies" component={Vacancies}></Route>
        </Route>
    </Router>
);