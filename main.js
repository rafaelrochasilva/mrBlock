Game.MainState = (function() {
  function MainState(){
  }

  var fn = MainState.prototype;

  // It will be executed at the beginning
  // Loads the game's assets
  fn.preload = function() {
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
    console.log('running...')
  };

  return MainState;
});
