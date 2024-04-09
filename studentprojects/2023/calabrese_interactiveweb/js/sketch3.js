var h;
var w;
var c;
var d;
var img1;
var e;
var i;

function preload () {
  img1 = loadImage('../img/globe.png');
  img2 = loadImage('../img/brain color.png');
  img3 = loadImage('../img/head color.png');
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

  textSize(30);
  textFont('Roboto Slab');
  
  if (mouseX > 1300) {
    c = 'The microcosm.'  ;
    e = 1500;
    i = img2;
    w = 325;
    h = 275;
      } else if (mouseX > 650) {
    c = 'I am my world.';
    e = width/2;
    i = img3;
    w = 350;
    h = 375;
  } else {
    c = 'The world and life are one.'
    e = 400;
    i = img1;
    w = 400;
    h = 375;
  }
  image(i, x,height/2, w, h);
  imageMode(CENTER);
  fill('#221713');
  textAlign(CENTER);
  text(c, e, 250);

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

function mousePressed () {

  if (mouseX > 1700 && mouseX < 1800 && mouseY > 815 && mouseY < 885) {
    window.open("../page4.html",'_self');
  }
  
  if (mouseX > 150 && mouseX < 250 && mouseY > 780 && mouseY < 920) {
    window.open("../page2.html",'_self');
  }
  
  }