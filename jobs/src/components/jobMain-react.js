'use strict';

var React = require('react');
var Header = require('./headerComponent-react.js');
var VacancyClass = require('./vacancyClassComponent-react');
var WorkWithUs = require('./workWithUsComponent-react.js');
var VacanciesSection = require('./vacanciesSectionComponent-react.js');
var VoicesFromTheField = require('./voicesSectionComponent-react.js');
var VacancySubcription = require('./vacancySubscriptionComponent-react.js');
var Footer = require('./footerComponent-react.js');

var JobMain = React.createClass({

    render: function(){
        return (
            <div>
                <Header />
                <VacancyClass />
                <WorkWithUs />
                <VacanciesSection />
                <VoicesFromTheField />
                <VacancySubcription />
                <Footer />
            </div>
        );
    }
});

module.exports = JobMain;