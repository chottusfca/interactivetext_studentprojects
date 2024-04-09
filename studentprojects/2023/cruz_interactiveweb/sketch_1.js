let sourceText = "The Art of noticing";


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  background('#EEE9DA');
 
  let xc =constrain(mouseX, 0, 20);
  let xs = constrain(mouseY, -30, 20);
  

  fill('black');
  textFont('Koulen');
  textSize(120);
  textAlign(CENTER);
  textStyle(BOLD)

  let middle = sourceText.length / 2;
  let left = middle - ((mouseX / width) * middle);
  let right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/3);
  
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
  translate(width/2 - 100, height/2);
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
  translate(width/2 + 100, height/2);
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
