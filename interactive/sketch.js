// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 25;
let y = 25;
let meme;

function preload(){
  meme = loadImage("assets/kool.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//background(255);
  Keyboy();
  mouseboy();
  keyandmouseBoy();
 
  
}

//Keyboard Activetys
function Keyboy() {
  fill(0);
  rect(x, y, 50, 50);
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW && x  > 0) {
      x -= 10;
    } 
    if (keyCode === RIGHT_ARROW && x < width - 50) {
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

//Mouse Activetys 
function mouseClicked() {
  fill(0,0,255);
  ellipse(mouseX, mouseY, 50, 50);
}

function doubleClicked() {
  fill(150,0,150);
  ellipse(mouseX, mouseY, 100, 100);
}


function mouseboy() {
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 25, 25);

  
}
 
function keyandmouseBoy() { 
  if (keyCode === ALT && keyIsPressed === true){
    image(meme ,mouseX ,mouseY, 230 , 129.5);
  }
}