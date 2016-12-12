'use strict';

var React = require('react');
var VacancyClass = require('../vacancyClassComponent-react');
var WorkWithUs = require('../workWithUsComponent-react.js');
var VacanciesSection = require('../vacanciesSectionComponent-react.js');
var VoicesFromTheField = require('../voicesSectionComponent-react.js');
var VacancySubcription = require('../vacancySubscriptionComponent-react.js');
var HomeBanner = require('./homeHeroBannerComponent-react');

var Home = React.createClass({

    render: function(){
        return (
          <section>
            <div className="row">
               Home Page
            </div>
          </section>
        );
    }
});

module.exports = Home;