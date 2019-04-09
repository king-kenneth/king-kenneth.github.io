// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else{
    createCanvas(windowWidth, windowWidth)
  }
  
  angleMode(DEGREES)
}

function draw() {
  background(220);
  translate(width/2, height/2);
  setupclock();
  hourTick();
  minTick();
}

function setupclock(){
  strokeWeight(10);
  ellipse(0, 0, height*0.9, height*0.9);
  strokeWeight(4);
  point(0,0);
}

function hourTick(){
  strokeWeight(7);
  strokeCap(SQUARE);
  for (let hourMark = 0, hourMark < 12 , hourMark++){
    line(width*0.25, 0, width*0.4, 0);
    rotate(360/12)
  }
}

function minTick(){
  strokeWeight(7);
  strokeCap(SQUARE);
  for (let minMark = 0, minMark < 60 , minMark++){
    line(width*0.36, 0, width*0.42, 0);
    rotate(360/60)
  }
}