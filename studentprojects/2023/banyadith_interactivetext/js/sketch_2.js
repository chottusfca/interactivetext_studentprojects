function setup() {
    createCanvas(windowWidth, windowHeight);
}

let trail = [];
let a = 0;
let colorA, colorB;
let mix = 0;
let easing = 0.02; // 1.0 to 0
let y = 100;
let speed = 1.5;
let stop = 650;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  colorA = color('#9CDDC3');
  colorB = color('#D9E5CC');
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
  text("\"I shut my eyes and all the world drops dead; \nI lift my lids and all is born again.", 100, y);
  text("(I think I made you up inside my head.)", 100, 700);

  if (y < 650){
    y += speed;
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
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pagethree.html");
  }
}
