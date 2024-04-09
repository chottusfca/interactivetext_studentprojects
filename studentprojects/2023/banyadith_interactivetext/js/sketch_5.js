let x = 100;
let y = 200;

let k = -800
let speed = 3;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

let trail = [];
let a = 0;
let colorA, colorB;
let mix = 0;
let easing = 0.02; // 1.0 to 0

function setup() { 
  createCanvas(windowWidth, windowHeight);
  colorA = color('#DAC78C');
  colorB = color('#698FD3');
} 

function draw() { 
  background(0);

  let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
  mix = mix + ((mixTarget - mix) * easing);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  let easedColor = lerpColor(colorA, colorB, mix);
  fill (easedColor);
  
  rect(0, 0, windowWidth, windowHeight);
  
  fill(255);
  textSize(20);
  textFont('DM MONO')
  push();
  translate(x, y);
  rotate(HALF_PI);
  text("God topples from the sky, hell's fires f a     d   e: \nExit seraphim and Satan's men:", k, -200);
  pop();
  text("I shut my eyes and all the world drops dead.", 800, 700)

  if (k < -150){
    k += speed;
  }


   trail.push([mouseX, mouseY]);
  for(let i = 0; i < trail.length; i++) {
  noFill();
  stroke(easedColorReversed, a);
  ellipse(trail[i][0], trail[i][1], 40, 40);
    if(a > 255) {
      trail.shift();
      a = 0;
    }
    a += 8;
  }
  console.log(trail.length);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pagesix.html");
  }
}