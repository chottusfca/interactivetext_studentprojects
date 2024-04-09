var xpos = 0;
var xspeed = 2;
let value = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship= CreateA('page10grow.html')
}

function draw() {
 background(235, 64, 52);
  noStroke();
  fill(252, 232, 96);
  ellipse(xpos, height/2, 100, 100);
  
  
  ellipse(xpos, height/5, 100, 100);
  
  ellipse(xpos, 400, 100, 100);
  
  if(xpos==400) {
    xspeed = -10;
  }
  
  if(xpos==0){
    xspeed = 10;
  }
  
  xpos += xspeed;
  
}
function keyPressed(){
  if (value==1){
   value= window.open ('page10grow.html');}
  }