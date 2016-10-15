 'use strict';

var React = require('react');
var PomodoroDisplay = require('./pomodoroDisplay-react.js');
var PomodoroSettings = require('./pomodoroSettings-react.js');
var _ = require('lodash');

var PomodoroPanel = React.createClass({

  render: function(){
    return (
      <div className=" container-fluid col-md-12">
        <div><h1>Pomodoro Header</h1></div>
        <PomodoroDisplay />
        <PomodoroSettings />
      </div>
    );
  }
});

module.exports = PomodoroPanel;