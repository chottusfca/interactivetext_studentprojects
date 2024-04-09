let color1, color2;
let myFont;
let textX = 100;
let textY = 150;
let textWidth = 900;

function preload() {
  myFont = loadFont('css/TiltPrism-Regular.ttf');
  myFont1 = loadFont('css/Alata-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textAlign(LEFT, TOP);
  textLeading(28);

  let textElement = createP('Chapter 11, Rachel TO SINGAPORE');
  textElement.position(100, 50);
  textElement.class('animate__animated animate__bounceInLeft');
  textElement.style('font-size', '32px');
  textElement.style('font-family', 'TiltPrism-Regular');

  color1 = color(255, 66, 199); 
  color2 = color(34, 176, 242); 
}

function draw() {
  setGradient(0, 0, width, height, color1, color2);
  fill(255);
  textFont(myFont1)
  textX += random(-2, 2);
  textY += random(-2, 2);
  text('“You’re kidding, right?” Rachel said, thinking Nick was pulling a prank when he steered her onto the plush red carpet of the Singapore Airlines first-class counter at JFK.” “Nick flashed a conspiratorial grin, relishing her reaction. “I figured if you were going to go halfway around the world with me, I should at least try to make it as comfy as possible.” “But this must have cost a fortune! You didn’t have to sell a kidney, did you?” “No worries, I had about a million frequent-flier miles saved up.” Still, Rachel couldn’t help feeling a little guilty about the millions of frequent-flier points that Nick must have sacrificed for these tickets. Who even flew first class anymore? The second surprise for Rachel came when they boarded the hulking two-story Airbus A380 and were promptly greeted by a beautiful stewardess who looked as if she had materialized straight out of a soft-focus ad from a travel magazine. “Mr. Young, Ms. Chu, welcome aboard. Please allow me to show you to your suite.” The stewardess sashayed down the aisle in an elegant, figure-hugging long dress,* ushering them to the front section of the plane, which consisted of twelve private suites. Rachel felt as if she was entering the screening room of a luxurious TriBeCa loft. The cabin consisted of two of the widest armchairs[…]', textX, textY, textWidth);
}
    
function setGradient(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}

function mouseMoved() {
  let x = mouseX / width;
  let y = mouseY / height;
  color1 = color(255 * x, 0, 255 * (1 - x));
  color2 = color(0, 255 * y, 255 * (1 - y));
}
