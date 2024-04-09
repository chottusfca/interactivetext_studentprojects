let trail = [];
let a = 0;
let colorA, colorB;
let mix = 0;
let easing = 0.02; // 1.0 to 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorA = color('#0F2613');
  colorB = color('#0F2613');

  let mixTarget = map(mouseX, 0, width, 0.0, 1.0);
  mix = mix + ((mixTarget - mix) * easing);
  
  let easedColorReversed = lerpColor(colorB, colorA, mix);
  let easedColor = lerpColor(colorA, colorB, mix);
  fill (easedColor);
  
  rect(0, 0, windowWidth, windowHeight);

  frameRate(12);
  
  }
  
  function draw() {
    fill(255);
    textSize(20);
    textFont('DM MONO')

    var d = random(0, 255);
    var e = random(0, 255);
    var f = random(0, 255);
    fill(d,e,f);
    textAlign(CENTER)
    text("(I think I made you up inside my head.)", mouseX, mouseY);

  }
  
  function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
      window.open("https://xarts.usfca.edu/~kbanyadith/banyadith_interactivetext/index.html");
    }
  }