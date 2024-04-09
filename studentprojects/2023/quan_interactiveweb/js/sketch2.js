function setup() {
  createCanvas(800, 600);
  textFont('Gilda Display');
}

function draw() {
  background('#fffcf5');


  noStroke();
  fill('#D4B1CE');
  rect(width/2, 230, width/2, 200);
  
  fill('#fffcf5');
  textSize(80);
  text("YOURS", mouseX, mouseY);
  
  fill('#000000')
  textSize(50);
  textAlign(CENTER);
  text('It was', 200, 100);
  text('only ever', 200, 200);
  text('to break', 200, 500);
}


