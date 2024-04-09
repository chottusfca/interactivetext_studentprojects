let x = 1500;
let y = 650;

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
let easing = 0.08; // 1.0 to 0

function setup() { 
  createCanvas(windowWidth, windowHeight);
  colorA = color('#EBE6D6');
  colorB = color('#A58EAF');
} 

function draw() { 
  background(0);

  let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
  mix = mix + ((mixTarget - mix) * easing);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  let easedColor = lerpColor(colorA, colorB, mix);
  fill (easedColor);
  
  rect(0, 0, windowWidth, windowHeight);
  
  let jitterX = random(-5, 5);
  let jitterY = random(-5, 5);

  fill(255);
  textSize(20);
  textFont('DM MONO')
  textAlign(RIGHT);
  text("\"I dreamed that you bewitched me into bed And sung me moon-struck, kissed me quite insane. \n(I think I made you up inside my head.)", x + jitterX, y + jitterY);
  frameRate(10)

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
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pagefive.html");
  }
}