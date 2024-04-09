

let fat, coccoon, maskBrush;


function preload(){
  coccoon = loadImage('coccoon.png')
  fat = loadImage('fat.png')
  maskBrush = loadImage('maskBrush.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);   
  mask=createGraphics(width,height);
  mask.imageMode(CENTER);
  maskedCoccoon = coccoon.get();
  maskedCoccoon.mask(mask.get());
   imageMode(CENTER);
}

function draw() {
image(coccoon,windowWidth/2,windowHeight/2+50,600,400);
background('lightblue');
image(fat,windowWidth/2,windowHeight/2+50,600,400);
image(maskedCoccoon,windowWidth/2,windowHeight/2+50,600,400);
   if(mouseIsPressed) {    
    mask.image(maskBrush,mouseX,mouseY,500,500);  
  maskedCoccoon=coccoon.get();
  maskedCoccoon.mask(mask.get());
  }

      
}