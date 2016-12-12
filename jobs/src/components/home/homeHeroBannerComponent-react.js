'use strict';

var React = require('react');

var HomeHeroBanner = React.createClass({

    render: function(){
        return (
            <section className="section-no-padding">
              <div className="row">
                <div className="hero-text-box">
                    <h1>helping people build better lives. </h1>
                    <a href="#" className="cbtn cbtn-full">Working at UNOPS</a>
                    <a href="#" className="cbtn cbtn-ghost">Open positions</a>
                </div>
              </div>
            </section>
        );
    }
});

module.exports = HomeHeroBanner;