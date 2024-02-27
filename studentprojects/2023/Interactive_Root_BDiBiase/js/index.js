let stars = [];
var fade;
var fadeAmount = 1

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50)
  textAlign(CENTER);
  textFont('Inria Serif');
  
  fade = 0
  
  
  for (let i = 0; i < 50; i++) {
    stars.push(new Jitter());
  }
  
}

function draw() {
  background('#0A0B3A');
    
    
  fill(251, 199, 68, fade);
  text("Howl's Moving Castle", width/2,height/2);
  textSize(40);
  text("In Which Michael Has Trouble With A Spell", width/2,height/1.6);
  
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  print(fade);
  
  fill('#A4CCFF');
  
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].display();
  
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(1, 5);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  
}


//source: array of objects on p5 https://p5js.jp/examples/objects-array-of-objects.html
//source: how to fade in and out on p5 https://editor.p5js.org/remarkability/sketches/rtM08miUD