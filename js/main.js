Game.MainState = (function() {
  function MainState() {
  }

  var fn = MainState.prototype;

  // Firstly it loads the game's assets
  fn.preload = function() {
    new Game.Preloader(this.game);
  };

  // Called after the preload
  fn.create = function() {
    this.game.stage.backgroundColor = '#3498db';

    this.player = new Game.Player('Mr. Block', this.game);

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  };

  // Called 60 times per second
  // contains the game logic
  fn.update = function() {
    this.player.move();
  };

  return MainState;
});
