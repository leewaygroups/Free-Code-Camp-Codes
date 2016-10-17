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
          this.countdown();
          break;

        default:
        clearInterval(this.timer);
        this.setState({
          pomodoroState: {
            name: "OFF",
            label: "Start"
          },
          pomodoroMinutes: "00",
          pomodoroSeconds: "00"
        });
        break;
      }

      //this.countdown();
  },

  checkNextCountDown: function(){
    if(this.state.sessionDuration && this.state.breakDuration){
       this.countdown();
    }else{
      this.setState({
         pomodoroState: {
          name: "OFF",
          label: "Start"
        },
        pomodoroMinutes: "00",
        pomodoroSeconds: "00"
      });
    }
  },

  countdown: function(){
    var min = this.state.sessionDuration;
    var sec = 0;
    var setState = this.setState.bind(this);
    var checkNextCountDown = this.checkNextCountDown.bind(null);
    var breakDuration = this.state.breakDuration;

    function pad(val) {
        return val > 9 ? val : "0" + val;
    }

    var timer = this.timer = setInterval(function () {
        if(min > 0 && sec === 0){
          min -= 1;
          sec = 60;
        }else if(sec > 0){
          sec -= 1;
        }else {
           clearInterval(timer);
            setTimeout(function () {
                checkNextCountDown();
            }, breakDuration * 60 * 1000);
        }
        setState({
          pomodoroMinutes: pad(min),
          pomodoroSeconds: pad(sec)
        });
    }, 1000);
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
        },
        pomodoroMinutes: "00",
        pomodoroSeconds: "00"
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
            <PomodoroDisplay minutes={this.state.pomodoroMinutes} seconds={this.state.pomodoroSeconds} />
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