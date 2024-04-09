var myFont;
function preload(){
  myFont = loadFont("font.otf");
}

function setup() {
  createCanvas(1400, 500);
  textFont(myFont);
  textSize(0.09*min(width,height));
  textAlign(CENTER, CENTER);
  
  
  N = myText.length;
  
  for (i=0; i<N; i++) {
    if (i>0)
      x += .5*textWidth(myChar);
    myChar = myText.charAt(i);
    x += .5*textWidth(myChar);
    rawPosns[i] = x;
  }
  wid = x + .5*textWidth(myChar);
  
  for(i=0; i<N; i++){
    rawPosns[i] -= .5*wid;
  }
  
}

var myChar;
var myText = "I~TRIED~TO~DANCE~IT~AWAY~";
var N;
var x = 0, wid = 0, tot = 0, y = 0;
var posns = [], rawPosns = [], scales = [];
var t;

function ease(p, g) {
  if (p < 0.5) 
    return 0.5 * pow(2*p, g);
  else
    return 1 - 0.5 * pow(2*(1 - p), g);
}

function draw() {
  t = 0.0004*millis();
  background('white');
  fill('black');;
  push();
  translate(width/2, height/2);
  
  for (a=-4; a<5; a++) {
    x = 0;
    y = textAscent()*.85*a;

    for (i=0; i<N; i++) {
      ph = 0.02*dist(mouseX-width/2, mouseY-height/2, textWidth("A")*(i-.5*(N-1)), y);
      sc = map(cos(TWO_PI*t - ph),1,-1,0.25,1);
      scales[i] = sc;
    }

    for (i=0; i<N; i++) {
      ii = (i+a+4)%N;
      if (i>0)
        x += .5*textWidth(myChar)*scales[i-1];
      myChar = myText.charAt(ii);
      x += .5*textWidth(myChar)*scales[i];
      posns[i] = x;
    }
    tot = x + .5*textWidth(myChar)*scales[N-1];

    push();
    translate(0, y);
    scale(wid/tot, 1);
    translate(-tot/2, 0);
    for (i=0; i<N; i++) {
      ii = (i+a+4)%N;
      push();
      translate(posns[i], 0);
      scale(scales[i], 1);
      text(myText.charAt(ii), 0, 0);
      pop();
    }
    pop();
  } 
  
  pop();
  
}