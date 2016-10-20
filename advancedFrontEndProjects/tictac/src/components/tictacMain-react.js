 'use strict';

var React = require('react');
//var PomodoroDisplay = require('./pomodoroDisplay-react.js');
//var PomodoroSettings = require('./pomodoroSettings-react.js');
var _ = require('lodash');

var TictacPanel = React.createClass({

  render: function(){
    return (
      <div className="container-fluid col-md-12">
        <div className="tictac-main">
          <div className="col-md-6 col-md-offset-4">
            <div className="col-md-2 col-bar">
            P1
            </div>
            <div className="col-md-2 col-bar">
            P2
            </div>
            <div className="col-md-2 col-bar">
            P3
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TictacPanel;