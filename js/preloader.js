Game.Preloader = (function() {
  function Preloader(game) {
    this.game = game;
    this.preload();
  }

  var fn = Preloader.prototype;

  fn.preload = function() {
    this.game.load.image('player', 'assets/player.png');
  };

  return Preloader;
}());
