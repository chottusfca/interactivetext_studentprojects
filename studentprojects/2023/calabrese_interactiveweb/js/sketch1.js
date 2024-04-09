let x = 243;
let y = 226;
let z = 202;
let img1; 
//13, 9 , 7
// 243 226 202

function preload () {
    img1 = loadImage("../img/globe.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  

}
function draw() {
  textSize(20);
  fill(x,y,z);
  textAlign(CENTER);
  text('This remark provides a key to the question, to what extent solipsism is a truth. In fact what solipsism means, is quite correct, only it cannot be said, but it shows itself.', 40, 175, 2000);
  text('That the world is my world, shows itself in the fact that the limits of the language (the language which only I understand) mean the limits of my world.', 40, 800, 2000);
  imageMode(CENTER);
  image(img1,width/2,height/2, 400, 375);
}
function mousePressed() {
  if (x > 13 && y > 9 && z > 7) {
      x -= 46;
      y -= 43.4;
      z -= 39;
  } 

}