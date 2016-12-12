'use strict';

var React = require('react');
var Router = require('react-router');

var Header = require('../header/mainNavComponent-react.js');
var Footer = require('../footer/footerComponent-react.js');

var Layout = React.createClass({

    render: function(){
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
});

module.exports = Layout;