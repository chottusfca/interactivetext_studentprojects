var a = 1000;
var b = 50;

function preload(){
  star1 =loadImage("js/star1.png");
  star2 =loadImage("js/star2.png");
  star3 =loadImage("js/star3.png");
  myFont = loadFont("js/InriaSerif-Regular.ttf");
};


//Click on Object Example
let starone = { //first stanza
  x: 150,
  y: 100,
  d: 10
};

let startwo = { //second stanza
  x: 375,
  y: 375,
  d: 16
};

let starthree = { //third stanza
  x: 100,
  y: 300,
  d: 12
};


function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  textFont('Inria Serif');

}

function draw() {
  background('#0A0B3A');
   //background stars
  fill('#99C5FF');
  ellipse(500, 500, 3, 3);
  ellipse(300, 450, 5, 5);
  ellipse(200, 450, 2, 2);
  ellipse(100, 250, 5, 5);
  ellipse(50, 50, 5, 5);
  ellipse(210, 340, 3, 3);
  ellipse(510, 100, 5, 5);
  ellipse(600, 450, 5, 5);
  ellipse(720, 210, 2, 2);
  ellipse(175, 100, 5, 5);
  ellipse(300, 450, 2, 2);
  ellipse(249, 130, 5, 5);
  ellipse(790, 600, 5, 5);
  ellipse(900, 100, 5, 5);
  ellipse(330, 75, 2, 2);
  ellipse(562, 513, 5, 5);
  ellipse(400, 256, 5, 5);
  ellipse(790, 630, 5, 5);
  ellipse(293, 329, 3, 3);
  ellipse(650, 600, 5, 5);
  ellipse(790, 700, 3, 3);
  ellipse(90, 234, 5, 5);
  ellipse(800, 70, 3, 3);
  ellipse(1500, 710, 4, 20);
  ellipse(1500, 710, 8, 10);
  ellipse(890, 370, 3, 3);
  ellipse(290, 720, 5, 5);
  ellipse(900, 120, 2, 2);
  ellipse(1000, 430, 5, 5);
  ellipse(150, 150, 5, 5);
  ellipse(940, 900, 3, 3);
  ellipse(602, 602, 5, 5);
  ellipse(955, 617, 3, 3);
  ellipse(1369, 1123, 5, 5);
  ellipse(965, 1157, 3, 3);
  ellipse(248, 163, 4, 5);
  ellipse(1176, 718, 8, 5);
  ellipse(1492, 836, 3, 3);
  ellipse(1415, 386, 5, 5);
  ellipse(974, 1019, 2, 2);
  ellipse(634, 855, 5, 5);
  ellipse(214, 119, 5, 5);
  ellipse(202, 994, 3, 3);
  ellipse(1500, 1500, 3, 3);


  fill('#99C5FF');
  ellipse(starone.x, starone.y, starone.d, starone.d);

  fill('#99C5FF');
  ellipse(startwo.x, startwo.y, startwo.d, startwo.d);

  fill('#99C5FF');
  ellipse(starthree.x, starthree.y, starthree.d, starthree.d);
  
  
//shooting stars  
   image(star1,a,b,150,100);
  image(star2,a,b,200,200);
  image(star3,a,b,100,50);
  a = a-3
  b= b+2
  
  
  if (mouseIsPressed) {
    click();
  }
}

function mousePressed(){
     click();
}

function click() {
  let button = dist(mouseX, mouseY, starone.x, starone.y);
  if (button <= 5) {
    fill('#FBC744');
    textSize(20);
    text("Sophie could see him\noutlined against the star's\nlight. The star was drifting\nlevel with Michael's\nhands and only a\nstep or so beyond.", 150,125);
    console.log("click!");
  }
    
    button = dist(mouseX, mouseY, startwo.x, startwo.y);
    if (button <= 8) {
      fill('#FBC744');
      textSize(20);
    text(" It was made of light, it lit up a white\nring of grass and reeds and black pools\naround Michael, and yet it had big,\nanxious eyes peering backward at\nMichael, and a small, pointed face.", 390,390);
    console.log("click!");
  }

  
  button = dist(mouseX, mouseY, starthree.x, starthree.y);
    if (button <= 6) {
      fill('#FBC744');
      textSize(20);
    text("It was looking back at\nhim nervously. How\nodd! Sophie thought.", 110, 310);
    console.log("click!");
  }
  
}