// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let computerChoice;
let whereAmI = menu;

function setup() {
  createCanvas(windowWidth, windowHeight);
  computerPicksElement()
}

function draw() {
  if (whereAmI = menu){
    background(220);
    displayButton()
  }
  
  
  //textSize(32)
  // text(computerChoice,10, 10, 700, 800);
}
function displayButton(){
      rect( 50, 50, width / 2, height / 2)
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

