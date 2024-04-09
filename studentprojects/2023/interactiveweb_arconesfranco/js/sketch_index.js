var poetry = ["Maxence", "Chabert", "Pepinot", "Morhange", "Mathieu", "Langlois", "Rochin", "Mondain", "Pierre", "Boniface", "Corbin", "Clement",];

let font;

var index = 0

function setup(){
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
    background(0,0,35,25); 
    textSize(100);
    textFont ('Abril Fatface');
    fill('white');
    text(poetry[index], width/3, height/2);

    var galaxy = { 
      locationX : random(width),
      locationY : random(height),
      size : random(1,6)
    }
      
      fill ('#cde6f7',)
      noStroke()
      ellipse(mouseX ,mouseY, galaxy.size + 3, galaxy.size + 3); 
      ellipse(mouseX +10 ,mouseY, galaxy.size + 3, galaxy.size + 3);
      rect(mouseX + 2 ,mouseY, galaxy.size - 3, galaxy.size - 20);
      rect(mouseX + 12 ,mouseY, galaxy.size - 3, galaxy.size - 20);
      rect(mouseX + 2 ,mouseY - 10, galaxy.size + 7, galaxy.size - 10);
      fill ('#fcf972')
      ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size + 5, galaxy.size + 5);
      fill ('#3934ad')
  }
  
  function keyPressed(){
    index = index + 1;
    if (index == poetry.length){
      window.open('https://xarts.usfca.edu/~marconesfranco/interactiveweb_arconesfranco/pageone.html', '_self');
    }
  }




 
