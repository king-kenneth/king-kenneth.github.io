// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let computerChoice;
let whereAmI= start;
function setup() {
  createCanvas(windowWidth, windowHeight);
  computerPicksElement();
  
}

function draw() {
  background(220);
  menu()
  textSize(32);
  text(computerChoice,10, 10, 700, 800);
}


function computerPicksElement() {
  computerChoice = Math.random();
  if (0 < computerChoice && computerChoice <= 0.33) {
    computerChoice = "fire";
  } else if (0.34 < computerChoice && computerChoice < 0.66) { 
    computerChoice = "water";
  } else {
    computerChoice = "ice"; 
  }
}


function menu() {
  while (whereAmI= start){
  if (overMenuButton()) {
    fill('gray');
  } else {
    fill('black');
  }
  rect(windowWidth/2 - 100, windowHeight/2 -50, 200, 100);
  fill(255);
  textSize(40);
  text("START", windowWidth/2-60, windowHeight/2+10);
}
}

function overMenuButton() {
  return mouseX > windowWidth/2 - 100 && mouseX < windowWidth/2 + 100 && mouseY > windowHeight/2 -50 && mouseY < windowHeight/2 + 50;
}

function mousePressed() {
  if overMenuButton(){
    whereAmI = game;
    }
  }