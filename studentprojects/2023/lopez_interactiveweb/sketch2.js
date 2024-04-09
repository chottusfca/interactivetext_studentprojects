

let fruit, fruit_word, maskBrush




function preload(){
  word = loadImage('fruitword.png');
  fruit = loadImage("fruit.png");
  maskBrush = loadImage('maskBrush.png');
  caterpillar = loadImage('caterpillar.png');
}

function setup() {
  noCursor();
  createCanvas(2316,windowHeight);   
  mask=createGraphics(width,height);
  maskedWord = word.get();
  maskedWord.mask(mask.get());

}

function draw() {
imageMode(CORNER);
image(word,0,0);
background('lightblue');
image(fruit,0,0);
image(maskedWord,0,0);
imageMode(CENTER);
   if(mouseIsPressed) {    
    mask.image(maskBrush,mouseX,mouseY,150,150);  
  maskedWord=word.get();
  maskedWord.mask(mask.get());
  }
  imageMode(CENTER);
  image(caterpillar,mouseX,mouseY,90,50); 
      
}
