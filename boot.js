var Game = window.Game || {};

// document.addEventListener('DOMContentLoaded', function() {
window.onload = (function(){
  var pacGame = new Phaser.Game(500, 300, Phaser.Auto, 'game');

  // A reference to the GameObjectFactory which can be used
  // to add new objects to the World.
  pacGame.state.add('main', new Game.MainState());
  pacGame.state.start('main');
});
