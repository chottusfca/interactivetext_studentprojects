let string = 'Think i made myself dizzy';
let x;
let speed = -4;
var myFont

function preload(){
    myFont = loadFont("font.otf");
}

function setup() {
  createCanvas(1400, 700);
  background('#fcf8f2');
  x = width+10;
}

function draw() {
  speed = -width/100;
  colorMode(RGB);
  background(0,map(mouseX,width/10,width*.9,100,20)); 
  colorMode(HSB);
  bob();
}

function bob () {
  x = x + speed;
  if (x < - (height/4)* string.length) {
     x = width+10;
  }
  
  strokeWeight(map(mouseY,0,height,1,width/20));
  stroke(map(x,-(height/4)* string.length,0,0,255),60,60);

  textSize(height/2);
  textAlign(LEFT,CENTER);
  text(string, x, height/2)
}

function keyTyped() {
  string = string.concat(key);
  
}

function mousePressed() {
  string = string.slice(0,-1);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  background(10);
}
