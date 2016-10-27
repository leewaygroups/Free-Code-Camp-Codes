'use strict';

var React = require('react');
var Router = require('react-router');

var Header = require('../header/headerComponent-react.js');
var Footer = require('../footer/footerComponent-react.js');

var Layout = React.createClass({

    isIndexPage: false,
    mixins: [Router.State],
    static: {
        willTransitionTo: function(transition, params, query, props){
            console.log(transition);
        }
    },

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