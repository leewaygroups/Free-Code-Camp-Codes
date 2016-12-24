var $ = require("jquery");

function Player(name) {
  this.name = name,
    this.moves = [];
}

function minimax() {
  return this.availableMoves.length - 1;
};

function Game() {
  this.availableMoves = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];
  this.possibleWinningMoves = [
    ['11', '12', '13'],
    ['21', '22', '23'],
    ['31', '32', '33'],

    ['11', '21', '31'],
    ['12', '22', '32'],
    ['13', '23', '33'],

    ['11', '22', '33'],
    ['13', '22', '31']
  ];

  this.setPlayers = function (me) {
    switch (me) {
      case 'O':
        this.playerMe = new Player('O');
        this.opponent = new Player('X');
        break;

      default:
        this.playerMe = new Player('X');
        this.opponent = new Player('O');
        break;
    }

    this.setPlayerTurn();
  };

  this.setPlayerTurn = function () {
    if (this.activeTurn == null) {
      this.activeTurn = this.playerMe;
    }

    if (this.activeTurn.name === this.playerMe.name) {
      this.nextTurn = this.opponent;
    } else {
      this.nextTurn = this.playerMe;
    }
  };

  this.updateGameStatus = function () {
    this.availableMoves.length ? this.isOver = false : this.isOver = true;
  };

  this.isWin = function (player) {
    for (var i = 0; i < this.possibleWinningMoves.length; i++) {
      if (_.difference(this.possibleWinningMoves[i], player.moves).length === 0) {
        this.winner = {
          player: player,
          winmoves: this.possibleWinningMoves[i]
        };
        return true;
      }
    }
    return false;
  };

  this.getOptimalMoveIndex = function () {
    var optimalMove;

    for (var i = 0; i < this.availableMoves.length; i++) {
      this.opponent.moves.push(this.availableMoves[i]);
      if (this.isWin(this.opponent)) {
        optimalMove = this.availableMoves[i];
        this.opponent.moves.pop(); break;
      }
      this.opponent.moves.pop();

      this.playerMe.moves.push(this.availableMoves[i]);
      if (this.isWin(this.playerMe)) {
        optimalMove = this.availableMoves[i];
        this.playerMe.moves.pop(); break;
      }
      this.playerMe.moves.pop();
    }

    if (optimalMove) {
      return this.availableMoves.indexOf(optimalMove);
    }

    return 0;
  };

  this.play = function (player, indexOfMove) {
    var move = this.availableMoves.splice(indexOfMove, 1)[0];
    player.moves.push(move);
    console.log(player);

    this.updateGameStatus();
    return move;
  };

}

module.exports = Game;