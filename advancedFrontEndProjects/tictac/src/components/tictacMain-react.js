 'use strict';

var React = require('react');
var _ = require('lodash');
var Game = require('../core/game.js');
var game = new Game();

window._ =  require('lodash');


var TictacPanel = React.createClass({

  makePlayerChoice: function(choiceName){
      if(!this.state.gameOn){
        game.setPlayers(choiceName);
        this.setState({
            gameOn: true,
            playerMe: game.playerMe
        });
      }

      //using " game.on = this.state.gameInfo.gameOn" makes the setplayer function lag
      //by requiring double click to make player choice. TODO: Find out why.
      game.on = true;
  },

  playerChoices: function(){
    if(this.state.gameOn){
      return(
          <div className="container-fluid col-md-12">
            <div className="infoBoard-container">
              <div className="col-md-8 col-md-offset-2 infoBoard">
                 <p className="fight-on">The fight is on! You're <b>{this.state.playerMe.name}</b></p>
                  {this.gameWonBanner()}
              </div>
            </div>
          </div>
      );
    }

    return (
      <div className="container-fluid col-md-12" ref="infoBoard">
        <div className="infoBoard-container">
            <div ref="choices" className="col-md-8 col-md-offset-2 infoBoard">
              <div className="col-md-4">
                  Who are you palying as?
              </div>
              <div className="col-md-8">
                <a className="btn btn-info col-md-3" onClick={this.makePlayerChoice.bind(null, 'X')}><b>Player X</b></a>
                <a className="btn btn-info col-md-3 col-md-offset-1" onClick={this.makePlayerChoice.bind(null, 'O')}><b>Player O</b></a>
              </div>
            </div>
          </div>
      </div>
    );
  },

  gameWonBanner: function(){
    if(this.state.gameOver){
      var childElement;
      if(this.state.winner.player){
         childElement = <div className="info">Game over: <b>player "{this.state.winner.player.name}</b>" won</div>;
      }else{
         childElement = <div className="info">Game over: Its a draw</div>;
      }
      return (
        <div className="winner-draw">
          {childElement}
          <div className="winner-draw-btn-container">
            <a className="btn btn-info win-draw-btn" onClick={this.startOverPlay}>New round</a>
            <a className="btn btn-info" onClick={this.resetGameToInitialState}>Stop game</a>
          </div>
        </div>
      );
    }
  },

  updateGameStatus: function () {
    !game.isWin(game.playerMe) ? game.isWin(game.opponent) : null;
    if(game.winner){
     game.isOver = true;
     this.setState({
        gameOn: true,
        gameOver: game.isOver,
        winner: game.winner
     });
    }else{
       game.availableMoves.length ? game.isOver = false : game.isOver = true;
    }
  },

  clearBoard : function(){
    for (var i = 0; i < game.allBoardMoves.length; i++) {
         this.refs[game.allBoardMoves[i]].children[0].innerHTML = null;
         game.availableMoves.push(game.allBoardMoves[i]);
    }
  },

  resetGameToInitialState : function(){
    game.isOver = false; game.winner = null;
    game.playerMe.reset(); game.opponent.reset();
    this.clearBoard();

    this.setState({
        gameOn: false,
        gameOver: false,
        winner: {},
        playerMe: {}
    });
  },

  startOverPlay: function(){
    if(game.winner){
      game.winner.player.name === game.playerMe.name ? game.updateWinCount(game.playerMe) : game.updateWinCount(game.opponent);
      game.winner = null;
    }

    game.over = false;
    game.playerMe.reset(); game.opponent.reset();
    this.clearBoard();

    this.setState({
        gameOn: true,
        gameOver: false,
        winner: {}
    });
  },

  onMePlay: function(key){
   var indexOfChoice = game.availableMoves.indexOf(key);
   if(this.state.gameOn && !this.state.gameOver && indexOfChoice !== -1){
     var move = game.play(game.playerMe, indexOfChoice);
     this.refs[move].children[0].innerHTML = game.playerMe.name;

     this.updateGameStatus();

     /**Opponent react to my move*/
     if(game.on && !game.isOver){
      this.opponentPlay();
      this.updateGameStatus();
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
      gameOn: false,
      gameOver: false,
      winner: {},
      playerMe: {}
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