// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let glighttime;
let ylighttime;
let rlighttime;
let lastTime;
function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  glighttime = 5000;
  ylighttime = 1500;
  rlighttime = 3000;
  lastTime = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkstate();
  displaycolor();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function checkstate(){
  //checks the state 
  if (state = 1 && millis() > lastTime + glighttime){
    state = 2;
    lastTime = millis();
  }
  else if (state = 2 && millis() > lastTime + ylighttime){
    state = 3;
    lastTime = millis();
  }
  else if (state = 3 && millis() > lastTime + rlighttime){
    state = 1;
    lastTime = millis();
}
}

function displaycolor(){
  //Displays correct color
  if (state === 1){
    showgreenlight();
  }
  if (state === 2){
    showyellowlight();
  }
  if (state === 3){
    showredlight();
  }
}

function showredlight(){
  fill("red");
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function showyellowlight(){
  fill("yellow");
  ellipse(width/2, height/2, 50, 50); //middle
}

function showgreenlight(){
  fill("green");
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}




