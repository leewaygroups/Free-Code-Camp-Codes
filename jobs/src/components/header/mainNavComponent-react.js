'use strict';

var React = require('react');

var MainNav = React.createClass({
    render: function(){
        return (
            <nav>
                <div className="nav-container">
                <img src="../images/logo.png" alt="logo" className="logo" />
                <img src="../images/logo-white.jpg" alt="logo" className="logo-white" />
                <ul className="main-nav">
                    <li><a href="#"><i className="ion-ios-person-outline large-icon"></i></a></li>
                    <li><a href="#"><i className="ion-ios-home-outline large-icon"></i></a></li>
                </ul>
                </div>
            </nav>
        );
    }
});

module.exports = MainNav;