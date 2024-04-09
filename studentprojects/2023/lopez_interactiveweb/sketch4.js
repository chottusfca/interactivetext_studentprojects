let message = 'That night she had a stomachache...',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 28,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('css/fonts/Grandstander-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // set up the font
  textSize(fontsize);
  textFont(font);
  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 + 50 - bounds.h / 2;
}

function draw() {
  background('lightblue');

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}
