let img1; 
let bgImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img1 = loadImage('img/ticket.png');
  img2 = loadImage('img/arrows_left.png');
  bgImg = loadImage('img/cloudsbg.png');
}

function draw() {
  background('transparent');
  image(bgImg, 0, 0, 1500, 1000);
  image(img1, 350, 100, img1.width / 2, img1.height / 2);
  
  fill('white');
}
