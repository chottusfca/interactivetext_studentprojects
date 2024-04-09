var moon, sun, leaf, egg, caterpillar;

let eggs = {
  x: 950,
  y: 400,
  w: 15,
  l: 20,
}

function preload(){
  moon = loadImage('moon.png');
  sun = loadImage('sun.png');
  leaf = loadImage('leaf.png');
  caterpillar = loadImage('caterpillar.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
}


function draw() {
  background(mouseX);
  //earth
  //sun
  tint(255, mouseX+20);
  imageMode(CENTER);
  image(sun, mouseX, height/3,300, 300 );
  //moon
  noTint();
  image(moon,mouseX*3,height/3, 300,300);
  image(leaf,1100,400,700,250);
  noStroke();
  ellipse(eggs.x,eggs.y,eggs.w,eggs.l);
  if (mouseIsPressed){
  popped();
  }
}

function popped(){
   let button= dist(mouseX,mouseY,eggs.x,eggs.y);
  if (button<=50){
    image(caterpillar,950,400,90,50);
  }
}







