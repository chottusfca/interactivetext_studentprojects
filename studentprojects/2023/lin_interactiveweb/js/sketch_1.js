var canvas;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;

var posX = -25;
var posY = 0;

var abox = 0
var aboxspeed = 2;

var bbox = 0
var bboxspeed = 2;

function preload() {
  // Load the image using the correct variable name
  img1 = loadImage("img/cloud_1.png");
  img2 = loadImage("img/cloud_2.png");
  img3 = loadImage("img/cloud_3.png");
  img4 = loadImage("img/cloud_4.png");
  img5 = loadImage("img/box_1.png");
  img6 = loadImage("img/box_2.png");
}

// Resize the canvas when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
}

function draw() {
  background('#4097FF');
  noStroke();
  fill('#72C9FF');
  fill('#868585');

//cloud movements
  image(img1,posX, 50);
  image(img2,windowWidth-posX,200);
  image(img3,posX,350);
  image(img4,windowWidth-posX,500);
  
  //Box Movement 
  image(img5, abox + 500, 340);
  image(img6, bbox, 340);

  // cloud movements 

// cloud movements 

if (posX > width || posY === height) {
  posX = 0;
  posY = 0;
} else {
  posX += .5;
  posY += .5;
}
//Dark Box
if (abox > width) {
aboxspeed  = -4;
} 

if (abox < 0) {
aboxspeed = 4;
}
// Light Box 
if (bbox > width - 200) {
bboxspeed  = -3;
} 

if ( bbox <= 100 ) {
bboxspeed = 3;
}
abox += aboxspeed;
bbox += bboxspeed;
}

