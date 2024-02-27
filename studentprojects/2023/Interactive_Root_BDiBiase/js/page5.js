let string = `
It dived away from Michael's fingers. Michael plunged for\nit, but it was too quick for him. It swooped for the nearest\nmarsh pool, and the black water leaped into a blaze of\nwhiteness for just an instant. Then there was a small, dying sizzle.`;
let currentCharacter = 0;

//function preload(){ 
//loadFont("js/'Inria Serif'");
//}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background('#0A0B3A');  
  let currentString = string.substring(0, currentCharacter);
  
  
  fill('#FBC744');
  textSize(30);
  textAlign(LEFT, TOP);
  textFont('Inria Serif');

  textLeading(55);
  text(currentString, 100, 100);

  
  currentCharacter += 0.4;


}