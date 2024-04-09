let textString = "I fancied you'd return the way you said, But I grow old and I forget your name. \n(I think I made you up inside my head.)"; // the text to display
let x = 100;
let y = 100;
let blinkSpeed = 30;

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
  colorA = color('#86B580');
  colorB = color('#C9C588');
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
  let alphaValue = sin(frameCount / blinkSpeed) * 255;
  fill(255, 255, 255, alphaValue);
  text(textString, x, y);

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
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pageseven.html");
  }
}