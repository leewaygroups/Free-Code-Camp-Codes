'use strict';

var React = require('react');

var Footer = React.createClass({

    render: function(){
        return (
           <footer>
            <div className="row">
                <div className="col-xs-6">
                    <ul className="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div className="col-xs-6">
                    <ul className="social-links">
                        <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                        <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>
                    Copyright &copy; 2015. All rights reserved.
                </p>
            </div>
        </footer>
        );
    }
});

module.exports = Footer;