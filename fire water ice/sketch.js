// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let computerChoice;

function setup() {
  createCanvas(windowWidth, windowHeight);
  computerPicksElement()
}

function draw() {
  background(220);
  
  textSize(32)
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

