// Enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  update(dt) {
    if (this.x < 400) {
      this.x += this.speed * dt;
    } else if (this.x >= 400) {
      this.x = 0;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset() {
  }
}

//Player initial location
class Player {
  constructor() {
    this.sprite = "images/char-boy.png";
    this.x = 200;
    this.y = 400;
  }

//Check player and enemy collision
  update(dt) {
    for (let enemy of allEnemies) {
      if (Math.round(enemy.y) === player.y) {
        for (let i = -50; i < 50; i++) {
          for (let j = -25; j < 25; j++) {
            if (Math.round(enemy.x) + i === player.x + j) {
              player.x = 200;
              player.y = 400;
          }

          }
        }
      }
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
  document.getElementById("modal").style.transform = "translateY(0px)";
  document.getElementById("exit").addEventListener("click", function() {
    document.getElementById("modal").style.transform = "translateY(-150px)";
  });
}

let player = new Player();
let enemy1 = new Enemy(0, 60, 150);
let enemy2 = new Enemy(0, 60, 50);
let enemy3 = new Enemy(0, 145, 100);
let enemy4 = new Enemy(0, 230, 75);
let enemy5 = new Enemy(0, 230, 125);


let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
