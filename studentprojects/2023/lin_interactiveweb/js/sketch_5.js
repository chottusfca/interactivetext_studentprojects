var canvas;
var foods = ["food_0","food1","food2","food3","food4","food5", "food6, food7", "food8"];
var currentImage;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  food = loadImage("img/food_0.png");
  food1 = loadImage("img/food_1");
  food2 = loadImage("img/food_2.png");
  food3 = loadImage("img/food_3.png");
  food4 = loadImage ("img/food_4.png");
  food5 = loadImage("img/food_5.png");
  food6 = loadImage("img/food_6.png");
  food7 = loadImage ("img/food_7.png");
  food8 = loadImage("img/food_8.png");

  currentImage = food;

}

function draw() {
  background('#2A4C74');
  imageMode(CENTER);
  image(currentImage, width/2 , height/2 );

}

function mousePressed() {
  if (foods == 0) {
    currentImage = food1;
    console.log("img/food_1.png");

  } else if (foods == 1) {
    currentImage = food2;
    console.log("img/food_2.png");

  } else if (foods == 2) {
    currentImage = food3;
    console.log("img/food_3.png");

  } else if (foods == 3) {
    currentImage = food4;
    console.log("img/food_4.png");

  } else if (foods == 4) {
    currentImage = food5;
    console.log("img/food_5.png");

  } else if (foods == 5) {
    currentImage = food6;
    console.log("img/food_6.png");
  

  } else if (foods == 6){
    currentImage = food7 ;
    console.log("img/food_7.png");

  } else if (foods == 7){
    currentImage = food8;
    console.log("img/food_8");
  }else{
    currentImage = food;
    foods = -1;
  }
  foods = foods + 1;
}