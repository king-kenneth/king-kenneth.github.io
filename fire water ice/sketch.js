// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let user = prompt("Hello User, What is your name?");
let computerChoice;

function preload(){
  meme = loadImage("assets/kool.gif");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  computerPicksElement()
}

function draw() {
  secret();
  
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

function secret(){
  if (user === "Elon Musk") {
    background(meme);
  }
  else{
    background(220);
  }
}