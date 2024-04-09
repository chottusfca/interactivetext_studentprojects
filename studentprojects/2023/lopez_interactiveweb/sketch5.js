let = ca;
let = ter;
let = pil;
let = lar;

let x=200


function preload(){
  
  casound = loadSound("ca.mp3");
  tersound = loadSound("ter.mp3");
  pilsound = loadSound("pil.mp3");
  larsound = loadSound("lar.mp3");
  caterpillarsound = loadSound("caterpillar.mp3");
  font = loadFont("css/fonts/Grandstander-Regular.ttf");
  face = loadImage("face.png");
}

function ca(){
  fill('#173A20');
  ellipse(x, height/2, 50);
  fill('white');
  text('CA',x,height/2+5);
  textAlign(CENTER);
}
function ter(){
  fill('#1B4733');
  ellipse(x+50, height/2, 50);
  fill('white');
  text('TER',x+50,height/2+5);
  textAlign(CENTER);
}
function pil(){
  fill('#365026');
  ellipse(x+100, height/2, 50);
  fill('white');
  text('PIL',x+100,height/2+5);
  textAlign(CENTER);
  
}
function lar(){
  fill('#365026');
  ellipse(x+150, height/2, 50);
  fill('white');
  text('LAR',x+150,height/2+5);
  textAlign(CENTER);
}

function head(){
    imageMode(CENTER);
    image(face,x+210,height/2-20,80,100);
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  textFont(font);
  textSize(28);
  background('lightblue');
}

function draw() {
  ca();
  ter();
  pil();
  lar();
  head();
}

function mousePressed() {
  if (mouseX>x-25 && mouseX<x+25 && mouseY>windowHeight/2-25 && windowHeight/2+25){
    casound.play();
  }
  if (mouseX>x+25 && mouseX<x+75 && mouseY>windowHeight/2-25 && windowHeight/2+25){
    tersound.play();
  }
  if (mouseX>x+75 && mouseX<x+125 && mouseY>windowHeight/2-25 && windowHeight/2+25){
    pilsound.play();
  }
  if (mouseX>x+125 && mouseX<x+175 && mouseY>windowHeight/2-25 && windowHeight/2+255){
    larsound.play();
  } 
    if (mouseX>x+175 && mouseX<x+225 && mouseY>windowHeight/2-25 && windowHeight/2+25){
      caterpillarsound.play();
  }
}