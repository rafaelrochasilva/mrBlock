Game.Player = (function() {
  var VELOCITY = 100;
  var JUMP_HEIGHT = -300;
  var VERTICAL_GRAVITY = 500;

  function Player(name, game) {
    this.name = name;
    this.game = game;
    this.obj = this.initPlayer();

    this.initCursors();
    this.eventListeners();
  }

  var fn = Player.prototype;

  fn.eventListeners = function() {
    this.cursorUP.onDown.add(this.moveUp, this);
  };

  fn.initPlayer = function() {
    var player = this.game.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      'player'
    );

    // Centralize player related to its position
    player.anchor.setTo(1,1);

    // Add vertical gravity
    this.game.physics.arcade.enable(player);
    player.body.gravity.y = VERTICAL_GRAVITY;

    return player;
  };

  fn.initCursors = function() {
    this.cursor = this.game.input.keyboard.createCursorKeys();
    this.cursorUP = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
  };

  fn.moveUp = function() {
    if(this.obj.body.touching.down) {
      this.obj.body.velocity.y = JUMP_HEIGHT;
    }
  };

  fn.movementListener = function() {
    if(this.cursor.left.isDown) {
      this.obj.body.velocity.x = -VELOCITY;
    }
    else if(this.cursor.right.isDown) {
      this.obj.body.velocity.x = VELOCITY;
    }
    else {
      this.obj.body.velocity.x = 0;
    }
  };

  return Player;
}());
