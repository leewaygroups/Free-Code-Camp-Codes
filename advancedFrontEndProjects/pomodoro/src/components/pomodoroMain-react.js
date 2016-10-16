 'use strict';

var React = require('react');
var PomodoroDisplay = require('./pomodoroDisplay-react.js');
var PomodoroSettings = require('./pomodoroSettings-react.js');
var _ = require('lodash');

var PomodoroPanel = React.createClass({
  increament: function(target){
    if(target === "session"){
      this.setState({
        sessionDuration: ++this.state.sessionDuration
      });
    }

    if(target === "break"){
       this.setState({
        breakDuration: ++this.state.breakDuration
      });
    }
  },

  decreament: function(target){
    if(target === "session"){
      this.setState({
        sessionDuration: this.state.sessionDuration > 1 ? --this.state.sessionDuration : 1
      });
    }

    if(target === "break"){
       this.setState({
        breakDuration: this.state.breakDuration > 1 ? --this.state.breakDuration : 1
      });
    }
  },

  pomodoro: function(){

    /**Update pomodoro state */
      switch (this.state.pomodoroState.name) {
        case "OFF":
          this.setState({
            pomodoroState: {
              name: "ON",
              label: "Stop"
            }
          });
          break;

        default:
        this.setState({
          pomodoroState: {
            name: "OFF",
            label: "Start"
          }
        });
        break;
      }
  },

  getInitialState: function(){
      return {
        time: {
          min: 25,
          sec: 0
        },
        sessionDuration: 25,
        breakDuration: 5,
        pomodoroState: {
          name: "OFF",
          label: "Start"
        }
      };
    },

  render: function(){
    return (
      <div className="container-fluid col-md-12">
        <div className="col-md-4 col-md-offset-4">
          <div className="pomo-panel">
            <div className="col-xs-12 pomodoro-header">
              <h1>Pomodoro</h1>
            </div>
            <PomodoroDisplay />
            <PomodoroSettings
                increament={this.increament}
                decreament={this.decreament}
                time={this.state.time}
                breakDuration={this.state.breakDuration}
                sessionDuration={this.state.sessionDuration}/>
            <div className="col-xs-12">
              <div className="col-xs-6 col-xs-offset-3">
                 <button
                 className="button-start-stop" onClick={this.pomodoro}>{this.state.pomodoroState.label}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PomodoroPanel;