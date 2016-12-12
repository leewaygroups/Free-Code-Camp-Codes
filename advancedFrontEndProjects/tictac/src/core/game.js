function Player(name){
  this.name = name,
  this.moves = [];
}

function Game(){
   this.availableMoves = ['11','12','13','21','22','23','31','32','33'];
   this.possibleWinningMoves = [
      ['11','12','13'],
      ['21','22','23'],
      ['31','32','33'],

      ['11','21','31'],
      ['12','22','32'],
      ['13','23','33'],

      ['11','22','33'],
      ['13','22','31']
    ];

  this.setPlayers = function(me){
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

    if(this.activeTurn == null){
      this.activeTurn = this.playerMe;
    }

    if(this.activeTurn.name === this.playerMe.name){
        this.nextTurn = this.opponent;
    }else{
       this.nextTurn = this.playerMe;
    }
  };

  this.updateGameStatus = function(){
    this.availableMoves.length ?  this.isOver = false : this.isOver = true;
  };

  this.minimax = function(){
    //TODO
    return this.availableMoves.length - 1;
  };

  this.play = function(player, indexOfMove){
    var move = this.availableMoves.splice(indexOfMove, 1)[0];
    player.moves.push(move);
    console.log(player);

    this.updateGameStatus();
    return move;
  };

}

module.exports = Game;
