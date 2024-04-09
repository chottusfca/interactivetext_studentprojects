function setup() {
    createCanvas(widthWindow, heightWindow);
  }
  
  function draw() {
    fill('orange');
    textSize(36);
    textFont('Tilt Prism');
    textAlign(CENTER);
    textStyle(BOLD);
    text('Test Run', mouseX, mouseY);
    text(key, 200, 300);
    
  if(mouseIsPressed) {
    fill('green');
    textSize(36);
    textFont('Tilt Prism');
    textAlign(CENTER);
    textStyle(BOLD);
    text('Random', width/2, height/2);
  
  }
  }