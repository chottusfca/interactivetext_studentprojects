var canvas;
var shapeX;
var shapeY;
var shapeWidth; // Adjust the width as needed
var shapeHeight; // Adjust the height as needed
var isHovered;
var isTextVisible;
var textX;
var textY;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  shapeWidth = windowWidth; // Adjust the width as needed
  shapeHeight = 30; // Adjust the height as needed
  noStroke()
  shapeX = -shapeWidth;
  shapeY = height / 2;
  isHovered = false;
  isTextVisible = true;

  textX = width / 2;
  textY = height / 2;
}

function draw() {
  background('#4097FF');
  if (isTextVisible) {
    drawText();
  }
  drawShape();
}

function drawText() {
  textSize(65);
  textFont('Shadows Into Light');
  textAlign(LEFT, LEFT);
  fill('black');
  text('And we must get no thinner', textX, textY);
}

function drawShape() {
  fill('#C4A484');
  rect(shapeX, shapeY, shapeWidth, shapeHeight);

  if (!isTextVisible) {
    shapeX += 4; // Adjust the speed as needed

    if (shapeX > width + shapeWidth) {
      shapeX = -shapeWidth; // Reset the shape's position
    }
  }
}

function mouseMoved() {
  if (isTextVisible) {
    // Check if the mouse is over the text
    if (
      mouseX > textX - textWidth('And we must get no thinner') / 2 &&
      mouseX < textX + textWidth('And we must get no thinner') / 2 &&
      mouseY > textY - textSize() / 2 &&
      mouseY < textY + textSize() / 2
    ) {
      isHovered = true;
    } else {
      isHovered = false;
    }
  }
}

function mousePressed() {
  if (isTextVisible && isHovered) {
    isTextVisible = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textX = width / 2;
  textY = height / 2;
}

