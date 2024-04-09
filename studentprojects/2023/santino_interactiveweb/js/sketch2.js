let img1;
let img2;
let img3;
let img4;
var capture;

function preload(){
  img1=loadImage('pinktext.png');
  img2=loadImage("greentext.png");
  img3= loadImage("orangetext.png");
  img4= loadImage("bluetext.png");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(210,150);
  capture.hide();
}

function draw() {
  background('lightblue');
  tint('none'); 
  image(img2, 190, 200, 220, 180);
  image(capture, 20, 20);

  tint('pink');
  image(img1, 430, 400, 220, 180);
  image(capture, 20, 20);

  tint('green');
  image(img4, 200, 510, 220, 180);
  image(capture, 250, 20);

  tint('orange')
  image(img3, 470, 180, 220, 180);
  image(capture, 20, 210);

  tint('blue');
  image(img3, 700, 310, 220, 180);
  image(capture, 250, 210);

  tint('yellow');
  image(img1, 440, 650, 220, 180);
  image(capture, 20, 20);

  tint('green');
  image(img4, 800, 510, 220, 180);
  image(capture, 250, 20);
  
  tint('orange')
  image(img3, 800, 200, 220, 180);
  image(capture, 20, 210);
 
}
  function mousePressed(){
    window.open ('page7monster.html');  
  }