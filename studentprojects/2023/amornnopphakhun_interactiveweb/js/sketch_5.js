let myFont;
let string = `
    “Nick brought it up so nonchalantly, as he was sorting the laundry on the Sunday afternoon before their big trip. 
    Apparently Nick’s parents had only just been informed that Rachel was coming with him to Singapore. And oh, by the way, they had just been made aware of her existence too.
		“I don’t quite understand … you mean your parents never knew about me in all this time?” Rachel asked in astonishment.
		“Yes. I mean, no, they didn’t. But you need to know this has absolutely nothing to do with you—” Nick began.
		“Well, it’s a little hard not to take it personally.” “Please don’t. I’m sorry if it seems that way. It’s just that …” Nick swallowed nervously. 
    “It’s just that I’ve always tried to keep clear boundaries between my personal life and my family life, that’s all.” 
    “But shouldn’t your personal life be the same as your family life?” “Not in my case. Rachel, you know how overbearing Chinese parents can be.”`;

let currentCharacter = 0;

let pageMargin = 80;



function preload() {
  myFont = loadFont('css/TiltPrism-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  

}

function draw() {
  background(r, g, b)
  let currentString = string.substring(0, currentCharacter);
  
  textSize(32);
  textLeading(60);

  fill('black')
  textSize(32);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  text('Chapter 8, Rachel IN NEW YORK', width/2, 50);

  push();
  noStroke();
  pop();
  
  push();
  textSize(16);
  textFont(`Alata-Regular`);
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 5, pageMargin + 5, width - pageMargin*2, height - pageMargin);
  pop();

  currentCharacter += 1;
  
}

window.addEventListener("load", (event) => {
  new cursoreffects.clockCursor();
});

