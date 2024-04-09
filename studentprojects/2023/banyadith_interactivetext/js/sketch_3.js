// make text bounce!

var x = 100;
var y = 100;
var xStep = 3;
var yStep = 2;
var a = 400; 
var b = 200;
var aStep = 2;
var bStep = 5;


let trail = [];
let d = 0;
let colorA, colorB;
let mix = 0;
let easing = 0.02; // 1.0 to 0

function setup() { 
  createCanvas(windowWidth, windowHeight);
  colorA = color('#DE8C80');
  colorB = color('#5BA0BD');
} 

function draw() {
  background(0);

  let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
  mix = mix + ((mixTarget - mix) * easing);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  let easedColor = lerpColor(colorA, colorB, mix);
  fill (easedColor);
  
  rect(0, 0, windowWidth, windowHeight);
  
  fill('white');
  textSize(20);
  textFont('DM MONO')
  text("\"The stars go waltzing out in blue and red, \nAnd arbitrary blackness gallops in:", x, y);
  text("I shut my eyes \n      and all the world \ndrops \n       dead.", a, b);

  x += xStep;
  y += yStep;
  
  a += aStep;
  b += bStep;

  if (x > width || x < 0) {
    xStep = xStep * -1;
  }
  
  if (y > height || y < 0) {
    yStep = yStep * -1;
  }
  
  if (a > width || a < 0) {
    aStep = aStep * -1;
  }
  
  if (b > height || b < 0) {
    bStep = bStep * -1;
  }
  
     trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noFill();
  stroke(easedColorReversed, d);
  ellipse(trail[i][0], trail[i][1], 40, 40);
    if(d > 255) {
      trail.shift();
      d = 0;
    }
    d += 8;
  }
  console.log(trail.length);
  

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pagefour.html");
  }
}