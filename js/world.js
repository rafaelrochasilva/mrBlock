Game.World = (function() {
  var BACKGROUND_COLOR = '#3498db';

  function World(game) {
    this.game = game;
    this.game.stage.backgroundColor = BACKGROUND_COLOR;

    // Create our wall group with Arcade physics
    this.walls = this.game.add.group();
    this.walls.enableBody = true;

    this.addWalls();

    // Set all the walls to be immovable
    this.walls.setAll('body.immovable', true);
  }

  var fn = World.prototype;

  fn.addWalls = function() {
    // Left
    this.game.add.sprite(0, 0, 'wallV', 0, this.walls);
    // Right
    this.game.add.sprite(480, 0, 'wallV', 0, this.walls);

    // Top left
    this.game.add.sprite(0, 0, 'wallH', 0, this.walls);
    // Top right
    this.game.add.sprite(300, 0, 'wallH', 0, this.walls);

    // Bottom left
    this.game.add.sprite(0, 320, 'wallH', 0, this.walls);
    // Bottom right
    this.game.add.sprite(300, 320, 'wallH', 0, this.walls);

    // Middle left
    this.game.add.sprite(-100, 160, 'wallH', 0, this.walls);
     // Middle right
    this.game.add.sprite(400, 160, 'wallH', 0, this.walls);

    var middleTop = this.game.add.sprite(100, 80, 'wallH', 0, this.walls);
    middleTop.scale.setTo(1.5, 1);

    var middleBottom = this.game.add.sprite(100, 240, 'wallH', 0, this.walls);
    middleBottom.scale.setTo(1.5, 1);
  };

  return World;
}());