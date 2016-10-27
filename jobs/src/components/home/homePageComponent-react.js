'use strict';

var React = require('react');
var VacancyClass = require('../vacancyClassComponent-react');
var WorkWithUs = require('../workWithUsComponent-react.js');
var VacanciesSection = require('../vacanciesSectionComponent-react.js');
var VoicesFromTheField = require('../voicesSectionComponent-react.js');
var VacancySubcription = require('../vacancySubscriptionComponent-react.js');

var Home = React.createClass({

    render: function(){
        return (
            <div>               
                <VacancyClass />
                <WorkWithUs />
                <VacanciesSection />
                <VoicesFromTheField />
                <VacancySubcription />               
            </div>
        );
    }
});

module.exports = Home;