var _ = require('lodash');

function Player() {

}

var game = {
  self: this,
  activePlayer: {},
  getPossibleWinningMoves: function () {
    return [
      ['11','12','13'],
      ['21','22','23'],
      ['31','32','33'],

      ['11','21','31'],
      ['12','22','32'],
      ['13','23','33'],

      ['11','22','33'],
      ['13','22','31']
    ];
  },

  isGameOver: function(player){
    return self.activePlayer.moves.length < 3 ? false : self.isWinOrDraw(player);
  },

  isWin: function(player){
     var winningMoves = self.getPossibleWinningMoves();
     for (var i = 0; i < winningMoves.length; i++) {
        if(_.difference(winningMoves[i], player.moves).length === 0){
          self.winner = {
            player : player,
            winmoves: winningMoves[i]
          };
          return true;
        }
      }

      return false;
  },

  isDraw: function(){
    return self.isGamePossibleMovesComplete();
  },

  isGamePossibleMovesComplete: function(players){
    /** return true if sum of all moves by both players equals all possibles moves in the game */
    var oponent = self.getOponentPlayer();
    return _.union(self.activePlayer.moves, oponent.moves).length === 9;
  },

  score: function(){
    var point = self.isWin(self.activePlayer) ? 1 : self.isWin(self.self.getOponentPlayer()) ? -1 : 0;
    return point;
  }
};