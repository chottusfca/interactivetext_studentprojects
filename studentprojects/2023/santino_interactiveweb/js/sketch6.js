function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke('#1a1085');
    strokeWeight(10);
  }
  function draw() {
    background('#1d5999');
    textSize(30); 
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
    fill('#eb34c6');
    text('Ultimate User-Centered Dream',mouseX, mouseY, pmouseX, pmouseY);
    
    
    if (mouseIsPressed){
      background ()
    }
  }
  
  function mousePressed(){
    window.open ('page11.html');  
  }