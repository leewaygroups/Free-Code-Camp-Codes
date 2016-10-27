'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

/**Route history */
var createBrowserHistory = require('history/lib/createBrowserHistory');
var history = createBrowserHistory();

/*Components*/
var Layout = require('./components/layout/layoutComponent-react.js');
var Home = require('./components/home/homePageComponent-react.js');
var Vacancies = require('./components/vacancy/vacancyListingComponent-react.js');

module.exports = (
     <Router history={history}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="vacancies" component={Vacancies}></Route>
        </Route>
    </Router>
);