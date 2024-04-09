let trail = [];
let a = 0;
let colorA, colorB;
let mix = 0;
let easing = 0.02; // 1.0 to 0

function setup() { 
  createCanvas(windowWidth, windowHeight);
  colorA = color('#228C99');
  colorB = color('#A9B440');
} 

function draw() { 
  background(0);

  let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
  mix = mix + ((mixTarget - mix) * easing);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  let easedColor = lerpColor(colorA, colorB, mix);
  fill (easedColor);
  
  rect(0, 0, windowWidth, windowHeight);
  
  fill('#ECFA6A');
  textSize(60);
  textFont('Kavivanar')
  text('Mad Girl\'s \nLove Song', width/16, height/1.35);
  
  fill(255);
  textSize(20);
  textFont('DM MONO')
  text('1953', width/16, height/9);
  text('SYLVIA PLATH', width/16, height/1.08);
  text("Press the '→' key to go to next page", width/1.45, height/1.08)
  
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
    window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/pagetwo.html");
  }
}
