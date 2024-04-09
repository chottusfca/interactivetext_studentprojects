function setup() {
  createCanvas(800, 600);
  textFont('Gilda Display');
  
}

function draw() {
  background("#fffcf5"); 
  
  fill(0); 
  textSize(50); 
  textAlign(CENTER);
  text("I'll love",  400, 150);
  text("you until", 400, 250);
  text("my very", 400, 350);
  fade();

}

function fade() {
  var b = map(mouseX, 0, width, 245, 206);
  var g = map(mouseX, 0, width, 252, 177);
  var r = map(mouseX, 0, width, 255, 212);

  var x = 400;

  fill(r, g, b); 
  textSize(50);
  text("last breath", x, 450);
  
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW)
  window.location.href = 'pagefour.html';
}