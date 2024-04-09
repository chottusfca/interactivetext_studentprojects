// inspired by throwing glitter in class
// faster the mouse moves, the more erratically glitter is placed
// click to clear screen
let message = 'butterfly';
var myX;
var myY;
var prevX;
var prevY;
var myColor;
var moveX;
var moveY;
var speed;

function preload(){
  butterfly = loadImage('butterfly.png');
  font = loadFont('css/fonts/Grandstander-Regular.ttf');
  bg = loadImage('bg.png');
}

function setup() {
  colorMode(HSB, 100);
  createCanvas(windowWidth, windowHeight);
  background('black');
  noStroke();
  prevX = 0;
  prevY = 0;
  textFont(font);
  noCursor();
}

function draw() {
  myX = mouseX;
  myY = mouseY;
  
  myColor = color(random(100),100, (85 + random(15)));
  fill(myColor);
  
  speed = dist(myX, myY, prevX, prevY);
  moveX = (speed+5) * (random(2)-1);
  moveY = (speed+5) * (random(2)-1);
  
  if (speed > 0){
    text(message, myX+moveX, myY+moveY, 20);
  }
  
  prevX = myX;
  prevY = myY;
  
}

function mousePressed(){
  background('black');
  imageMode(CENTER);
  image(butterfly,mouseX,mouseY,200,100);
}