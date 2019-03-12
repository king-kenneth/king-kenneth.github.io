// Refactor the following code
// - in other words, keep the same functionality, but improve the method used
let isFillWhite = true;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  for (let x=0; x<8; x++) {
    for (let y=0; y<8; y++) {
      if (isFillWhite){
        fill(255);
      }
      else{
        fill(0)
      }
      rect(x*75, y*75, 75, 75);
      isFillWhite = !isFillWhite;
    }
    isFillWhite = !isFillWhite;
  }
}
