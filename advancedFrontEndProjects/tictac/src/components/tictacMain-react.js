 'use strict';

var React = require('react');
//var PomodoroDisplay = require('./pomodoroDisplay-react.js');
//var PomodoroSettings = require('./pomodoroSettings-react.js');
var _ = require('lodash');

var TictacPanel = React.createClass({
  onPlayerPlay: function(key){
    console.info(key);
  },

  render: function(){
    return (
      <div className="container-fluid col-md-12">
        <div className="tictac-main">
          <div className="tictac-main-container col-md-6 col-md-offset-4">
            <div className="col-md-2 col-bar">
              <div className="cell-box" key="11" onClick={this.onPlayerPlay.bind(null, '11')}><p>A1</p></div>
              <div className="cell-box" key="21" onClick={this.onPlayerPlay.bind(null, '21')}><p>A2</p></div>
              <div className="cell-box" key="31" onClick={this.onPlayerPlay.bind(null, '31')}><p>A3</p></div>
            </div>
            <div className="col-md-2 col-bar">
              <div className="cell-box" key="12" onClick={this.onPlayerPlay.bind(null, '12')}><p>B1</p></div>
              <div className="cell-box" key="22" onClick={this.onPlayerPlay.bind(null, '22')}><p>B2</p></div>
              <div className="cell-box" key="32" onClick={this.onPlayerPlay.bind(null, '32')}><p>B3</p></div>
            </div>
            <div className="col-md-2 col-bar">
              <div className="cell-box" key="13" onClick={this.onPlayerPlay.bind(null, '13')}><p>C1</p></div>
              <div className="cell-box" key="23" onClick={this.onPlayerPlay.bind(null, '23')}><p>C2</p></div>
              <div className="cell-box" key="33" onClick={this.onPlayerPlay.bind(null, '33')}><p>C3</p></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TictacPanel;