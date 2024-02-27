function setup() {
    createCanvas(1500,1000);
    background('#0A0B3A');
    textAlign(CENTER);
    textFont('Inria Serif');
    textSize(40);
    fill(251, 199, 68);
    text('"No!" cried the star. "I would rather die!"', width/2,height/2);
  }
    
  
  function draw() {
    textSize(50);
     fill(251, 199, 68);
    text('I would rather die!', mouseX,mouseY);
  }