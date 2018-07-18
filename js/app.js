// Enemies our player must avoid
class Enemy {
  constructor() {
    this.sprite = "images/enemy-bug.png";
    this.x = 0;
    this.y = 275;
  }

  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset() {

  }
}

class Player {
  constructor() {
    this.sprite = "images/char-boy.png";
    this.x = 200;
    this.y = 400;
  }

  update(dt) {

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

//Move player depending on keypresses
  handleInput(input) {
    if (this.x <= 300 || this.x >= 0 || this.y <= 300 || this.y >= 0) {
      if (input === "left") {
        this.x -= 100;
        console.log(this.x, this.y);
      } else if (input === "right") {
        this.x += 100;
        console.log(this.x, this.y);
      } else if (input === "down") {
        this.y += 85;
        console.log(this.x, this.y);
      } else {
        this.y -= 85;
        console.log(this.x, this.y);
      }
    }
    else {console.log("false")};
  }
}

//Listen for arrow presses
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

let player = new Player();
let enemy1 = new Enemy();
let enemy2 = new Enemy();
let enemy3 = new Enemy();

let allEnemies = [enemy1, enemy2, enemy3];
