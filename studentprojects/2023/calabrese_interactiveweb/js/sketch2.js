
var c;
var d;
let e = 500;
let img1; 

function preload () {
  img1 = loadImage("../img/arrow.png");
  arrowF = loadImage('../img/arrow.png');
  arrowB = loadImage('../img/arrow back.png');
  arrowFW = loadImage('../img/arrowWF.png');
  arrowBW = loadImage('../img/arrowWB.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background('#F3E2CA');

  let x = mouseX;
  let y = mouseY;
  
  if (mouseX > width/2 && mouseY < 700) {
    a = mouseX;
    b = (width/2);
      }
  
  else if (mouseX < width/2 && mouseY < 700) {
    a = width/2;
    b = mouseX;
  }
  
  imageMode(CENTER);
  fill('#221713');
  textAlign(CENTER);
  textFont('Roboto Slab');
  textSize(30);
  text('Therefore logic and its application may not overlap one another.', width/2, 700);
  text('Logic may not collide with its application. But logic must have contact with its application.', width/2, 250);
  textSize(120);
  textAlign(LEFT);
  text('APPLICATION', a, e);
  textAlign(RIGHT);
  text('LOGIC', b, e);

  if (mouseX > 1700 && mouseX < 1800 && mouseY > 815 && mouseY < 885) {
    image(arrowFW, 1750, 850, 100, 70);
  } else {
    image(arrowF, 1750, 850, 100, 70);
  }

  if (mouseX > 150 && mouseX < 250 && mouseY > 780 && mouseY < 920) {
    image(arrowBW, 200, 850, 100, 70);
  } else {
    image(arrowB, 200, 850, 100, 70);
  }
}

function mousePressed() {
  if (mouseX > 1700 && mouseX < 1800 && mouseY > 815 && mouseY < 885) {
    window.open("../page3.html",'_self');
  }
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 780 && mouseY < 920) {
    window.open("../index.html",'_self');
  }

}