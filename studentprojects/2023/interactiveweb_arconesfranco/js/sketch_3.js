function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,35,25); 
  let s = 'Selon notre principe, \naction réaction, \nson auteur sera sévèrement puni.';
  textFont('Abril Fatface');
  textSize(width*0.08);

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

  for(i=0;i<20;i++) {
    if(i%2==0)
      fill('#05051F');
    else
      fill('white');
  
  if(keyIsPressed){
    if (key == 'a'){
      fill('#fcf972')
    }
    else{
      window.open('https://xarts.usfca.edu/~marconesfranco/interactiveweb_arconesfranco/pagefour.html', '_self');
    }
  }
    
    
    // fill(i*20,0,0);
    
    distX = mouseX - (width/2);
    x = map(distX,0, width/2, 0, 10);
    distY = mouseY - (height/2);
    y = map(distY,0, height/2, 0, 10);
    
    text(s, 150+i*x, 150+i*y, width-200, height-200); // Text wraps within text box 
  }
}s
