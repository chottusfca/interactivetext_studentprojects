let daisy, bee, panda, heart;
function preload() {
  // preload() runs once
  daisy = loadImage('img/daisyFlower25.png');
  bee = loadImage('img/bee.png');
  panda = loadImage('img/cutepanda.png');
}

function setup() {
	createCanvas(1010,600);
  
  // fill("pink");
  // noStroke();
 
}

function draw() {
  
  background('#FFD6EB');
  image(daisy, 750,0);
  // image(panda, 100,280);
  image(bee, 120,280);
  textFont(' Yomogi');
  textSize(30);
	noStroke();
  fill("black")
  // textWrap(WORD);
  if (mouseX > 200 && mouseY > 10) {
    // triangle(100, 100, 200, 100, 250, 200);
    text("You were born to BE so many things.", 80, 135, 1000);
  } 
  textSize(50);
  if (mouseX > 300 && mouseY > 200) {
    // triangle(100, 100, 200, 100, 250, 200);
    text("My wish for you - no matter where your journey leads - is for you to always...", 80, 220, 800);
  }
  textSize(120);
  textFont('Fredoka');
  // fill('#BE77EE')
  // textAlign(CENTER);
  if (mouseX > 400 && mouseY > 300) {
    // triangle(100, 100, 200, 100, 250, 200);
    text("BE YOU", 450, 490, 500);
  }

 
  // if (mouseX > 400 && mouseY > 400) {
  //   triangle(100, 100, 200, 100, 250, 200);
  //   text("Here it is", 150, 125);
  // }
}