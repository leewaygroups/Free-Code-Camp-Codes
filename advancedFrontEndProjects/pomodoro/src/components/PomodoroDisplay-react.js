'use strict';

var React = require('react');

var PomodoroDisplay = React.createClass({
  propTypes: {
    minutes: React.PropTypes.string.isRequired,
    seconds: React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <div className="col-xs-12">
        <div className="time-container">
          <div className="minutes">
            <span id="minutes" className="col-xs-6 minutes">{this.props.minutes}</span>
          </div>
          <div className="seconds" className="col-xs-6">
            <span id="seconds">{this.props.seconds}</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PomodoroDisplay;