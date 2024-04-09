var animals=["one", "of", " critical", "design's", "roles", "is", "to", "question","the","limited","range","of","emotional","and","psychological","experiences","offered","through","designed","profucts."];
var test; 


function setup() {
  var test = createA('page10grow.html', "Leave this page byeeeee");
  createCanvas(windowWidth, windowHeight);
  background('#9E9E9E');
  fill('red');
  textSize(30);
  textFont('Rubik Wet Paint');
  text("Critique of design", width/3, height/2);
}
function mousePressed(){
  background('#380D3F');
  var index= floor(random(0, animals.length)); 
  textFont('Rubik Wet Paint');
  text(animals[index], width/2, height/2);
}

function draw() {
  rectangle();
}

function rectangle(){
  rect(40, 120, 120, 40);
  rect(120, 40, 120, 40);
  rect(110, 60, 130, 40);
  rect(300, 100, 140, 10);
  rect(320, 120, 140, 30);
  rect(290, 300, 120, 40);
  rect(110, 215, 120, 40);
  rect(100, 330, 120, 40);
  rect(330, 350, 130, 20);
  rect(100, 250, 130, 20);
  rect(900, 70, 130, 20);
  rect(920, 100, 130, 20);
  rect(920, 1000, 130, 20);
  rect(920, 800, 130, 20);
  rect(720, 600, 130, 20);
  rect(820, 400, 130, 20);
  rect(520, 600, 130, 20);
  rect(520, 300, 130, 20);
  rect(820, 700, 130, 40);
  rect(20, 500, 230, 10);
}


