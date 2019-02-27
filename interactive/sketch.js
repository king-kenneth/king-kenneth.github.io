// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let directionX = 25;
let directionY = 25;
let colour;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  fill(0);
  rect(directionX, directionY, 50, 50);
  checkingForKey();
}

function checkingForKey() {
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      directionX -= 10;
    } 
    if (keyCode === RIGHT_ARROW) {
      directionX += 10;
    }
    if (keyCode === UP_ARROW) {
      directionY -= 10;
    } 
    if (keyCode === DOWN_ARROW) {
      directionY += 10;
    }
    if (keyCode === CONTROL) {
      background(255);
    }
    if 
  }
 
}
