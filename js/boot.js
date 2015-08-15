var Game = window.Game || {};

window.onload = function() {
  var mrBlockGame = new Phaser.Game(500, 350, Phaser.Auto, 'game');

  // A reference to the GameObjectFactory which can be used
  // to add new objects to the World.
  mrBlockGame.state.add('main', new Game.MainState());
  mrBlockGame.state.start('main');
};
