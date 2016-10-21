'use strict';

var React = require('react');
var Header = require('./headerComponent-react.js');
var WorkWithUs = require('./workWithUsComponent-react.js');
var Footer = require('./footerComponent-react.js');

var JobMain = React.createClass({

    render: function(){
        return (
            <div>
                <Header />
                <WorkWithUs />
                <Footer />
            </div>
        );
    }
});

module.exports = JobMain;