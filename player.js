Game.Player = (function() {
  function Player(name, game) {
    this.name = name;
    this.game = game;
  }

  var fn = Player.prototype;

  fn.preload = function() {
    this.game.load.image('player', 'assets/player.png');
  };

  fn.create = function() {
    this.player = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      this.name
    );
    // Centralize player related to its possition
    this.player.anchor.setTo(1,1);
  };

  return Player;
}());
