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
    this.world = new Game.World(this.game);
    this.player = new Game.Player('Mr. Block', this.game);

    // Add physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
  };

  // Called 60 times per second
  // contains the game logic
  fn.update = function() {
    this.game.physics.arcade.collide(this.player.obj, this.world.walls);
    this.player.movementListener();
  };

  return MainState;
}());
