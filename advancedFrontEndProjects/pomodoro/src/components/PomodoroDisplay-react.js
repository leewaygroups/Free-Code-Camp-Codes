'use strict';

var React = require('react');

var PomodoroDisplay = React.createClass({
  render: function () {
    return (
      <div className="col-xs-12">
        <div className="time-container">
          <div className="minutes">
            <span id="minutes" className="col-xs-6 minutes">00</span>
          </div>
          <div className="seconds" className="col-xs-6">
            <span id="seconds">00</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PomodoroDisplay;