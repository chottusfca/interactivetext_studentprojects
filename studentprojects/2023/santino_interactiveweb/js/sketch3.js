let img1
let img2

function preload(){
  img1 = loadImage("img/darkdesign.png")
  img2 = loadImage("img/scarymouth.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    background(img1);
}

function draw() {
  
  noStroke();
  
  
  fill('#356132');
  rect((windowWidth/2)-150,(windowHeight/2)-100,70,70);
  
  fill('#356132');
  rect((windowWidth/2)+90,(windowHeight/2)-100,70,70);
  
 fill('#d60606');
  rect((windowWidth/2)-150,(windowHeight/2)-100,50,50);
  
  fill('#d60606');
  rect((windowWidth/2)+90,(windowHeight/2)-100,50,50);
  
  
  
  fill('#b50a04');
  textSize(18);
  textAlign(CENTER);
  textFont('Rubik Wet Paint');
  text('then hundreds of images of teapots flash before her on a screen',mouseX,mouseY);
  
  if(mouseIsPressed) {
  fill('#42991d');
  textSize(45);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Rubik Wet Paint');
  text('every',width/2,height/2);
    text ('click',300,300);
  text ('design',width/4,height/4);
  text ('control',300,150);
  }
  imageMode (CENTER)

  image(img2, windowWidth/2,windowHeight/2+200, 300, 400);
}
function keyTyped (){
  if (key === 'h'){fill('#42991d');
  textSize(45);
  textAlign(CENTER);
  textStyle(BOLD);
  textFont('Rubik Wet Paint');
  text('BOO!!!',width/2,height/2);
  }
}
function mousePressed(){
    window.open ('page8array.html');  
  }