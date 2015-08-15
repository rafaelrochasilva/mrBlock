Game.Player = (function() {
  var VELOCITY = 100;

  function Player(name, game) {
    this.name = name;
    this.game = game;

    this.cursor = this.game.input.keyboard.createCursorKeys();

    this.player = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      'player'
    );

    // Centralize player related to its position
    this.player.anchor.setTo(1,1);

    // Add physics
    this.game.physics.arcade.enable(this.player);

    // Add vertical gravity
    this.player.body.gravity.y = 500;
  }

  var fn = Player.prototype;

  fn.move = function() {
    if (this.cursor.left.isDown) {
      this.player.body.velocity.x = -VELOCITY;
    }
    else if(this.cursor.right.isDown) {
      this.player.body.velocity.x = VELOCITY;
    }
    else if(this.cursor.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -320;
    }
    else {
      this.player.body.velocity.x = 0;
    }
  };

  return Player;
}());
