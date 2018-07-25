"use strict";

//Main class for the player and enemy to be based off
class Character {
  //Location on screen and image location
  constructor(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  update(dt) {
  }

}

// Enemies our player must avoid
class Enemy extends Character {
  constructor(x, y, speed, sprite) {
    super(x, y);
    this.speed = speed;
    this.sprite = "images/enemy-bug.png";
  }

  update(dt) {
    if (this.x < 500) {
      this.x += this.speed * dt;
    } else if (this.x >= 400) {
      this.x = -100;
    }
  }

  reset() {
  }
}

//Player initial location
class Player extends Character {
  constructor(x, y, sprite) {
    super(x, y);
    this.sprite = "images/char-boy.png";
  }

//Check player and enemy collision
  update(dt) {
    for (let enemy of allEnemies) {
      if (Math.round(enemy.y) === this.y) {
        for (let i = -50; i < 50; i++) {
          for (let j = -25; j < 25; j++) {
            if (Math.round(enemy.x) + i === this.x + j) {
              this.x = 200;
              this.y = 400;
            }
          }
        }
      }
    }
  }

//Move player depending on keypresses
  handleInput(input) {
    if (input === "left") {
      if (this.x >= 50) {
        this.x -= 50;
      }
    } else if (input === "right") {
      if (this.x <= 350) {
        this.x += 50;
      }
    } else if (input === "down") {
      if (this.y <= 315) {
        this.y += 85;
      }
    } else if (input === "up") {
      if (this.y >= 145) {
        this.y -= 85;
      }
      else if (this.y < 145) {
        modal();
        this.x = 200;
        this.y = 400;
      }
    }
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

//Win modal
let modal = function() {
  document.querySelector(".modal").style.transform = "translateY(0px)";
  document.querySelector(".exit").addEventListener("click", function() {
    document.querySelector(".modal").style.transform = "translateY(-150px)";
  });
}

let player = new Player(200, 400);
let enemy1 = new Enemy(0, 60, 150);
let enemy2 = new Enemy(0, 60, 50);
let enemy3 = new Enemy(0, 145, 100);
let enemy4 = new Enemy(0, 230, 75);
let enemy5 = new Enemy(0, 230, 125);


let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
