var food = ["piece of chocolate cake", "ice cream cone", "pickle", "slice of Swiss cheese", "slice of salami", "lollipop", "piece of cherry pie", "sausage", "cupcake", "slice of watermelon"];

let pic = [];

let font;

function preload() {
  pic[0] = loadImage('cake.svg');
  pic[1] = loadImage('icecream.svg');
  pic[2] = loadImage('pickle.svg');
  pic[3] = loadImage('cheese.svg');
  pic[4] = loadImage('salami.svg');
  pic[5] = loadImage('lollipop.svg');
  pic[6] = loadImage('pie.svg');
  pic[7] = loadImage('sausage.svg');
  pic[8] = loadImage('cupcake.svg');
  pic[9] = loadImage('watermelon.svg');
  font = loadFont("css/fonts/Grandstander-Regular.ttf");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('lightblue');
  fill('black');
  textFont(font);
  textSize(28);
}

function mousePressed(){
  background('lightblue');
  var index = floor(random(0,food.length));
  text(food[index], width/2-100,height/2);
  imageMode(CENTER);
  image(pic[index],width/2+300,height/2);
}

function draw() {
  one();
}


function one(){
  noStroke();
  text("one",width/2-180,height/2);
}
