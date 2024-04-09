let flower;
// let background;

function preload() {
    // preload() runs once
    flower = loadImage('img/daisyFlowerIcon.png');
    // background = loadImage('img/repetition.png');

  }

function setup() {
    createCanvas(1010,600);
  }
  
function draw() {
    // background('#FFEE99');
    // image(background, 0,0);
    
    for (var x = 10; x <= 800; x +=250) {
        for (var y = 10; y <= 475; y +=200) {
          noStroke();
          rect(x, y, 240, 180, 20);
        //   fill('#fae');
        }}

    textSize(16);

    if (mouseX >= 40 && mouseY >=40) {
    // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Ready", 25, 50, 150);
    textSize(16);
    textFont('Yomogi');
    text("To take the next step toward being an amazing human being.", 25, 85, 190);
    }

    if (mouseX >= 40 && mouseY >=300) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Persistent", 25, 250, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Keep going, never stop. Keep going, never stop. Keep going, never stop", 25, 285, 200);
    }

    if (mouseX >= 40 && mouseY >=500) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(22);
    textFont('Fredoka');
    text("Ok asking for help", 25, 450, 200);
    textSize(16);
    textFont(' Yomogi');
    text("When you need a helping hand,an encouraging word...reach out.", 25, 485, 200);
    }

    if (mouseX >= 200 && mouseY >=100) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Curious", 280, 50, 150);
    textSize(16);
    textFont(' Yomogi');
    text("Turn every stone, ask every why, and keep digging deeply.", 280, 85, 200);
    }

    if (mouseX >= 200 && mouseY >=300) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Different", 280, 250, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Be silly. Be Quirky. Be odd. Be unique. Be weird. Be colorful.", 280, 285, 200);
    }

    if (mouseX >= 200 && mouseY >=500) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(22);
    textFont('Fredoka');
    text("Your own thinker", 280, 450, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Think for yourself and set your own unique course.", 280, 485, 200);
    }

    if (mouseX >= 500 && mouseY >=100) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Adventurous", 528, 50, 230);
    textSize(16);
    textFont(' Yomogi');
    text("Live a big life! When you are ready, Step outside your comfort zone.", 528, 85, 200);
    }

    if (mouseX >= 500 && mouseY >=300) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Kind", 528, 250, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Help those around you to be themselves. Listen. Then listen some more.", 528, 280, 200);
    }

    if (mouseX >= 500 && mouseY >=500) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(22);
    textFont('Fredoka');
    text("Ok being alone", 528, 450, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Take time to be on your own. Hear your own thoughts - your inner voice. Listen to your heart.", 528, 485, 200);
    }

    if (mouseX >= 800 && mouseY >=100) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Connected", 780, 50, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Be with those who make you feel like the real you.", 780, 85, 200);
    }

    if (mouseX >= 800 && mouseY >=300) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Brave", 780, 250, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Try new things. Take a deep breath and plunge forward into new experiences.", 780, 280, 200);
    }

    if (mouseX >= 800 && mouseY >=500) {
        // triangle(100, 100, 200, 100, 250, 200);
    textSize(24);
    textFont('Fredoka');
    text("Patient", 780, 450, 200);
    textSize(16);
    textFont(' Yomogi');
    text("Being more you takes time. Take a deep breath. Let your future unfold at its own pace.", 780, 485, 200);
    } 

    image(flower, mouseX,mouseY);
}


