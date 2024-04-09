var a;
var b;

var img1;
var img2;
var img3;

function preload () {
  img1 = loadImage('../img/globe.png');
  img2 = loadImage('../img/head.png');
  img3 = loadImage('../img/world.png');
  arrowB = loadImage('../img/arrow back.png');
  arrowBW = loadImage('../img/arrowWB.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#F3E2CA');

  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;
  let iy = height - mouseY;

  if (mouseIsPressed) {
    image(img1, ix, iy, iy, iy);
  } else {
    image(img1,width/2 + 100, height/2 - 150, 350,350);
  }



  image(img2,width/2,height/2, 800,800);
  textSize(30);
  textFont('Roboto Slab');
  imageMode(CENTER);
  rectMode(CENTER);
  fill('#FFC681');
  //rect(width/2, height/2 - 5, 550,75);
  fill('#221713');
  
  textAlign(CENTER);
  text('The limits of my language' , 300, height/2);
  text('mean the limits of my world.' , 1625, height/2);


  if (mouseX > 150 && mouseX < 250 && mouseY > 780 && mouseY < 920) {
    image(arrowBW, 200, 850, 100, 70);
  } else {
    image(arrowB, 200, 850, 100, 70);
  }
}

function mousePressed () {

if (mouseX > 150 && mouseX < 250 && mouseY > 780 && mouseY < 920) {
  window.open("../page3.html",'_self');
}

}