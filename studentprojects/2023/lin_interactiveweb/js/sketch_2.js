var canvas;
var img;
var img2;
var img3;

let string = `If your a box`;
let currentCharacter1 = 0; 

let string2 = `And I'm a box`;
let currentCharacter2 = 0;

let string3 = `Then you must be my brother`;
let currentCharacter3 = 0;


function preload(){
  img = loadImage('img/textbox1.png');
  img2 = loadImage('img/textbox2.png');
  img3 = loadImage('img/textbox3.png');
}


//background//
function windowResized (){
    resizeCanvas (windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position (0,0);
    canvas.style('z-index','-1');


  }
  
  function draw(){
    background ('#72C9FF');
    noStroke();

    let currentString1 = string.substring(0, currentCharacter1);
    let currentString2 = string2.substring(0, currentCharacter2);
    let currentString3 = string3.substring(0, currentCharacter3);


    image(img,50,200);
    image(img2,50,500);
    image(img3,830,350);



    fill('#080808');
    textSize(40);
    textAlign(LEFT, TOP);
    textFont('Shadows Into Light'); 
    

    

    text(currentString1,120,250, 1000);
    text(currentString2,900,400, 1000);
    text(currentString3,100,550, 350);


    currentCharacter1 += 0.1;
    currentCharacter2 += 0.1;
    currentCharacter3 += 0.1;


    

}