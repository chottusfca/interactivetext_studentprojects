let tulips, cloud;
var speed = .2; 
var x = 0; 
var x1 = -180;

function preload() {
    // preload() runs once
    tulips = loadImage('img/tulips.png');
    cloud = loadImage('img/cloud.png');
    
  }

function setup() {
    createCanvas(1010,600);
}

function draw() {
    background('#DDB8F6');
    image(tulips, 70,400);
    image(cloud, x + 200 ,80);
    image(cloud, x + 400 , 20);
    image(cloud, x + 600 ,80);
    image(cloud, x + 800 , 20);

    image(cloud, x1 + 200 ,80);
    image(cloud, x1 + 400 , 20);
    image(cloud, x1 + 600 ,80);
    image(cloud, x1 + 800 , 20);
    
    if (x > width) {
        print("off the screen");
        speed = -.2;
      }
      if (x < 0) {
        speed = .2;
        
      }
      x += speed;

    
    if (mouseIsPressed === true) {
        textSize(80);
        textAlign(CENTER);
        // textFont('Yomogi');
        textFont('Fredoka');
        text("Be very, very YOU!", 40, height/2, 1000);
        // ellipse(50, 50, 50, 50);
      } else {
        textSize(38);
        textAlign(CENTER);
        textFont('Yomogi');
        text("You are ready. So ... go ahead ... be you!", 80, height/2, 900);

        // rect(25, 25, 50, 50);
      }
      
}