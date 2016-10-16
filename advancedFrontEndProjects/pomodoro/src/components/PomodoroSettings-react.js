'use strict';

var React = require('react');

var PomodoroSettings = React.createClass({

  propTypes: {
    increament: React.PropTypes.func.isRequired,
    decreament: React.PropTypes.func.isRequired,
    time: React.PropTypes.object.isRequired,
    breakDuration: React.PropTypes.number.isRequired,
    sessionDuration: React.PropTypes.number.isRequired
  },

  render: function () {
    return (
      <div className="col-xs-12">
        <div className="col-xs-12 settings-container">
          <div className="col-xs-6 session-settings">
            <div key="session-inc" className="settings-button"
              onClick={this.props.increament.bind(null, "session")}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div className="settings-Value"><p>{this.props.sessionDuration}</p></div>
            <div key="session-dec" className="settings-button"
              onClick={this.props.decreament.bind(null, "session")}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-xs-6 break-settings">
            <div key="break-inc" className="settings-button"
              onClick={this.props.increament.bind(null, "break")}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div key="session-dec" className="settings-Value"><p>{this.props.breakDuration}</p></div>
            <div className="settings-button"
              onClick={this.props.decreament.bind(null, "break")}>
              <i className="fa fa-minus" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PomodoroSettings;