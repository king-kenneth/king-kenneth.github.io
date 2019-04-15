// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 25;
let grid;
let cellSize;
let foodcords = [];
let x = 25;
let y = 25;
let direction;
let xcoord = floor(x / cellSize);
let ycoord = floor(y / cellSize);

function setup() {

  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  grid = create2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function draw() {
  udlr();
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      emptyArray[i].push(0);
    }
  }
  return emptyArray;
}

function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols; j++) {
      if (random(100) < 50) {
        emptyArray[i].push(0);
      }
      else {
        emptyArray[i].push(1);
      }
    }
  }
  return emptyArray;
}

function udlr() {
  rect(xcoord, ycoord ,cellSize, cellSize);
  if (keyIsPressed) {
    if (key === "UP_ARROW") {
      ycoord += cellSize;
    }
    if (key === "DOWN_ARROW") {
      ycoord -= cellSize;
    }
    if (key === "LEFT_ARROW") {
      xcoord -= cellSize;
    }
    if (key === "RIGHT_ARROW") {
      xcoord += cellSize;
    }
}
}


function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[ycoord][xcoord] === 1) {
    grid[ycoord][xcoord] = 0;
  }
  else {
    grid[ycoord][xcoord] = 1;
  }
}