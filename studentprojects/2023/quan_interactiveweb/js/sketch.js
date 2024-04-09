var names = ["it", "a", "thousand", "times", "if", "you", "like"];

var index = 0;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('#fffcf5');
  
  fill('#000000'); 
  textSize(50); 
  textAlign(CENTER);
  text('BREAK', 150, height/3);
  text('MY HEART', 420, height/3);
  textAlign(CENTER);
  fill('#D4B1CE');
  textFont('Gilda Display');
  text(names[index], 150, height/1.5); 
}

function mousePressed() {
  index = index + 1;

  if (index == names.length) {
    window.location.href = 'pagetwo.html';
  }
}

