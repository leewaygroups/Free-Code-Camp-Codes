'use strict';

var React = require('react');

var HeaderBackground = React.createClass({
    render: function(){
        return (
            <div className="hero-text-box">
                <h1>Helping people build better lives. </h1>
                <a href="#" className="cbtn cbtn-full">Working at UNOPS</a>
                <a href="#" className="cbtn cbtn-ghost">Open positions</a>
            </div>
        );
    }
});

module.exports = HeaderBackground;