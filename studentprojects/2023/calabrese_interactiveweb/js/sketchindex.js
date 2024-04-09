let x = 243;
let y = 226;
let z = 202;
let img1; 
let a = 13;
let b = 9;
let c = 7;
//13, 9 , 7
// 243 226 202

function preload () {
    arrowF = loadImage('../img/arrow.png');
    arrowFW = loadImage('../img/arrowWF.png');
    brain = loadImage('../img/head beige.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(30);
  fill(a,b,c);
  textAlign(LEFT);
  textFont('Roboto Slab');
  text('Logic fills the world: the limits of the world are also its limits. We cannot therefore say in logic:', width/14, height/6, 800);
  text('This and This there is in the world, that there is not.', 1100, height/6 + 35, 800);
  fill(x,y,z);
  text('We cannot therefore say what we cannot think.', 1150, 750, 800);
  text('What we cannot think, that we cannot think:', width/14, 750, 800);
  imageMode(CENTER);

  if (mouseX > 1700 && mouseX < 1800 && mouseY > 815 && mouseY < 885) {
    image(arrowFW, 1750, 850, 100, 70);
  } else {
    image(arrowF, 1750, 850, 100, 70);
  }

  image(brain, width/2, height/2, 325, 375);
} 

function mousePressed() {
  if (x > 13 && y > 9 && z > 7) {
      x -= 46;
      y -= 43.4;
      z -= 39;
  } 
  if (a < 243 && b < 226 && c < 202) {
    a += 46;
    b += 43.4;
    c += 39;
} 

if (mouseX > 1700 && mouseX < 1800 && mouseY > 815 && mouseY < 885) {
  window.open("../page2.html",'_self');
}

}