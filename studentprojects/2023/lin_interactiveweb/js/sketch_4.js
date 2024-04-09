var canvas;
var img1;
var img2;
var img3;
var img4;

var posX = -25;
var posY = 0;

var gif_loadImg, gif_createImg;

function preload() {
  // Load the image using the correct variable name
  img1 = loadImage("img/cloud_1.png");
  img2 = loadImage("img/cloud_2.png");
  img3 = loadImage("img/cloud_3.png");
  img4 = loadImage("img/cloud_4.png");
}

//background//
function windowResized (){
    resizeCanvas (windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position (0,0);
    canvas.style('z-index','-1');
    gif = createImg("img/test1.gif");
    gif.position(width/4, height/2); 

  }
  
  function draw(){
    background ('#4097FF');
    noStroke();
    fill('#72C9FF');

    image(img1,posX, 50);
    image(img2,windowWidth-posX,200);
    image(img3,posX,350);
    image(img4,windowWidth-posX,500);

if (posX > width || posY === height) {
  posX = 0;
  posY = 0;
} else {
  posX += .5;
  posY += .5;
}
}
