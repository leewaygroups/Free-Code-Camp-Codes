 'use strict';

var React = require('react');
var _ = require('lodash');
var Game = require('../core/game.js');
var game = new Game();

window._ =  require('lodash');


var TictacPanel = React.createClass({

  makePlayerChoice: function(choiceName){
      if(!game.on){
        game.setPlayers(choiceName);
        this.setState({
          gameInfo: {
            gameOn: true,
            playerMe: game.playerMe
          }
        });
      }

      //using " game.on = this.state.gameInfo.gameOn" makes the setplayer function lag
      //by requiring double click to make player choice. TODO: Find out why.
      game.on = true;
  },

  playerChoices: function(){
    if(game.on){
       <div className="col-md-4">
            The fight is on! You're <b>{this.state.gameInfo.playerMe.name}</b>
        </div>
    }

    return (
      <div className="container-fluid col-md-12" ref="infoBoard">
        <div ref="choices">
          <div className="col-md-4">
              Who would you like to play as <b>Player X</b> or <b>Player O</b> ?
          </div>
          <div className="col-md-8">
            <a className="btn btn-info col-md-2" onClick={this.makePlayerChoice.bind(null, 'X')}><b>X</b></a>
            <a className="btn btn-info col-md-2 col-md-offset-1" onClick={this.makePlayerChoice.bind(null, 'O')}><b>O</b></a>
          </div>
        </div>
      </div>
    );
  },

  onMePlay: function(key){
   var indexOfChoice = game.availableMoves.indexOf(key);
   if(game.on && !game.isOver && indexOfChoice !== -1){
     var move = game.play(game.playerMe, indexOfChoice);
     this.refs[move].children[0].innerHTML = game.playerMe.name;

     /**Opponent react to my move*/
     if(!game.isOver){
      this.opponentPlay();
     }else{
       //my last move ended the game.
       //TODO: handle gameOver.
     }
   }
  },

  opponentPlay: function(){
    game.activeTurn = game.opponent;
    game.nextTurn = game.playerMe;
    var optimalMoveIndex = game.getOptimalMoveIndex( game.activeTurn, 'max');
    var move = game.play(game.opponent, optimalMoveIndex);
    this.refs[move].children[0].innerHTML = game.opponent.name;
  },

  getInitialState: function(){
    return {
      gameInfo: {
        gameOn: false,
        playerMe: {}
      }
    }
  },
  render: function(){
    return (
      <div className="container-fluid col-md-12">
        {this.playerChoices()}
        <div className="container-fluid col-md-12">
          <div className="container-fluid col-md-12">
            <div className="tictac-main">
              <div className="tictac-main-container col-md-6 col-md-offset-4">
                <div className="col-md-2 col-bar">
                  <div className="cell-box" key="11" ref="11" onClick={this.onMePlay.bind(null, '11')}><p></p></div>
                  <div className="cell-box" key="21" ref="21" onClick={this.onMePlay.bind(null, '21')}><p></p></div>
                  <div className="cell-box" key="31" ref="31" onClick={this.onMePlay.bind(null, '31')}><p></p></div>
                </div>
                <div className="col-md-2 col-bar">
                  <div className="cell-box" key="12" ref="12" onClick={this.onMePlay.bind(null, '12')}><p></p></div>
                  <div className="cell-box" key="22" ref="22" onClick={this.onMePlay.bind(null, '22')}><p></p></div>
                  <div className="cell-box" key="32" ref="32" onClick={this.onMePlay.bind(null, '32')}><p></p></div>
                </div>
                <div className="col-md-2 col-bar">
                  <div className="cell-box" key="13" ref="13" onClick={this.onMePlay.bind(null, '13')}><p></p></div>
                  <div className="cell-box" key="23" ref="23" onClick={this.onMePlay.bind(null, '23')}><p></p></div>
                  <div className="cell-box" key="33" ref="33" onClick={this.onMePlay.bind(null, '33')}><p></p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TictacPanel;