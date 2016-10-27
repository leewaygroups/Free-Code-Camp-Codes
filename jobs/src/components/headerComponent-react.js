'use strict';

var React = require('react');
var MainNav = require('./Header/mainNavComponent-react.js');
var HeaderBackground = require('./Header/headerBackgroundComponent-react.js');
var Header = React.createClass({
    render: function(){
        return (
            <header>
              <div className="row">
                  <MainNav />
                  <HeaderBackground />
                </div>
            </header>
        );
    }
});

module.exports = Header;