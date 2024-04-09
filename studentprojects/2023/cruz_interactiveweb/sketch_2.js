let gl;
let glImg;
function preload() {
  glImg = loadImage("glasses.png");
}
let spr;
function setup() {
  createCanvas(windowWidth, windowHeight);
  gl = createSprite(width/2.25, height/2.2);
  gl.addImage(glImg);
  glImg.resize(380,350);
}

function draw() {
  background('#EEE9DA');
  noFill();
  stroke(10);
  textAlign(CENTER, CENTER);
  textFont('Koulen');
  textSize(80);
  text("Chapter 1", width/2.55, height/2.55);
 
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textFont('Koulen');
  textSize(180);
  text("L        KING", width/2, height/2);
  drawSprites();

  textFont("Koulen");
  fill('black');
  textSize(20);
  text("Move the glasses using the arrow keys", 160, 20);
  
  let dxLeft = mouseX - (width/2 - 100);
  let dyLeft = mouseY - height/2;
  let distLeft = sqrt(dxLeft*dxLeft + dyLeft*dyLeft);
  
  let dxRight = mouseX - (width/2 + 100);
  let dyRight = mouseY - height/2;
  let distRight = sqrt(dxRight*dxRight + dyRight*dyRight);
  
  
  let maxDist = 22.5;
  
  
  let xcLeft = map(dxLeft, -width/2, width/2, -maxDist, maxDist);
  let ycLeft = map(dyLeft, -height/2, height/2, -maxDist, maxDist);
  
  let xcRight = map(dxRight, -width/2, width/2, -maxDist, maxDist);
  let ycRight = map(dyRight, -height/2, height/2, -maxDist, maxDist);
  
  
  push();
  translate(width/2 - 100, 50);
  strokeWeight(1);
  stroke(55);  
  fill('white');
  beginShape();
  vertex(-80, 0);
  bezierVertex(-30, -50, 30, -50, 80, 0);
  bezierVertex(30, 50, -30, 50, -80, 0);
  endShape();
  fill('#7895B2');
  circle(0, 0, 75);
  fill(0);
  circle(xcLeft, ycLeft, 30);
  pop();
  
 
  push();
  translate(width/2 + 100, 50);
  strokeWeight(1);
  stroke(55); 
  fill('white');
  beginShape();
  vertex(-80, 0);
  bezierVertex(-30, -50, 30, -50, 80, 0);
  bezierVertex(30, 50, -30, 50, -80, 0);
  endShape();
  fill('#7895B2');
  circle(0, 0, 75);
  fill(0);
  circle(xcRight, ycRight, 30);
  pop();
}
  
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    gl.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    gl.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    gl.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    gl.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    gl.setSpeed(0, 0);
  }
  return false;
}