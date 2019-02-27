// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 25;
let y = 25;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//background(255);
  checkingForKey();
  mouseboy();
 
  
}

function checkingForKey() {
  fill(0);
  rect(x, y, 50, 50);
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW && x  > 0) {
      x -= 10;
    } 
    if (keyCode === RIGHT_ARROW && x < width/2) {
      x += 10;
    }
    if (keyCode === UP_ARROW && y  > 0) {
      y -= 10;
    } 
    if (keyCode === DOWN_ARROW && y < height - 50) {
      y += 10;
    }
    if (keyCode === CONTROL) {
      background(255);
    }
    
    
  }
 
}
function mouseboy(){
  if (mouseX > width/2);
    
  else;
    rect(mouseX, mouseY, 25, 25);

}
 