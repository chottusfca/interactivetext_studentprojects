let img;
let xpos = 0;
let xspeed = 125;
let r, g, b;
let clickCount = 0
var button;
var buttonText = "Click me!";
var buttonX = 100;
var buttonY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('img/plane.png');

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  button = createButton("NEXT PAGE");
  button.position(width/2, height/2);
  button.mousePressed(moveButton);
  
  button.style('background-color', 'black'); //
  button.style('border', 'none');
  button.style('color', 'white');
  button.style('padding', '15px 32px');
  button.style('text-align', 'center'); 
  button.style('text-decoration', 'none');
  button.style('display', 'inline-block');
  button.style('font-size', '16px');
  button.style('font-family', 'Alata-Regular.ttf');
  
}

function moveButton() {
  clickCount++;
  if (clickCount >= 3) {
    window.location.href = "pagefour.html";
  } else {
    let x = random(width - button.width);
    let y = random(height - button.height);
    button.position(x, y);
  }
}

function draw() {
  background(r, g, b);
  frameRate(5);

  image(img, xpos, 100, 400, 500);
 
  if (xpos > width) {
    xspeed = -1;  
  }

  if (xpos < 0) {
    xspeed = 5;  
  }
  
  xpos += xspeed;

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);

  
}