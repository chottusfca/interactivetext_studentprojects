let words = [
  "SECURITY CAMERAS",
  "ABANDONED PAY PHONES",
  "NEIGHBORHOOD WATCH SIGNS",
  "ANYTHING NATURAL IN AIRPORTS",
  "LOCKSMITH STICKERS",
  "WEEDS",
  "EMPLOYEE OF THE MONTH PLAQUES",
  "STRAY SHOPPING CARTS",
  "STRAY TRAFFIC CONES",
  "ABANDONED BIKE LOCKS",
  "HAND-PAINTED SIGNS",
  "CELL PHONE TOWERS",]; 
let arrowPosX = 150; 
let arrowPosY = 70; 
let arrowSize = 150;
let textIndex = 0;
let texts = [
  "A heightened observational mind-set takes over when we’re tourists. In a new place, we pay attention to everything, it seems.",
  "But we spend most of our time in familiar places that we have lost their inherent novelty. We take these surroundings for granted, and we stop paying close attention. A recurring commute becomes profoundly numbing. Psychologists who study perception call this phenomenon INATTENTIONAL BLINDNESS.",
  "One of my students pledged to “notice something” every day on the two-block walk she made to and from our classroom studios. You can do the same from a bike, car, bus, or train. No tech tools are required",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#EEE9DA");

  textFont("Koulen");
  noStroke();
  textSize(62);
  text("Spot something", 100, 200);
  text("new everyday", 100, 250);
  fill("black");
  noStroke();
  textFont("Karma");
  textSize(32);
  textLeading((mouseX / width) * 64);
  text(texts[textIndex], 100, 300, 450, height);
  let dxLeft = mouseX - (width / 2 - 100);
  let dyLeft = mouseY - height / 2;
  let distLeft = sqrt(dxLeft * dxLeft + dyLeft * dyLeft);

  let dxRight = mouseX - (width / 2 + 100);
  let dyRight = mouseY - height / 2;
  let distRight = sqrt(dxRight * dxRight + dyRight * dyRight);

  let maxDist = 22.5;

  let xcLeft = map(dxLeft, -width / 2, width / 2, -maxDist, maxDist);
  let ycLeft = map(dyLeft, -height / 2, height / 2, -maxDist, maxDist);

  let xcRight = map(dxRight, -width / 2, width / 2, -maxDist, maxDist);
  let ycRight = map(dyRight, -height / 2, height / 2, -maxDist, maxDist);

  push();
  translate(width / 2 - 100, 50);
  strokeWeight(1);
  stroke(55);
  fill("white");
  beginShape();
  vertex(-80, 0);
  bezierVertex(-30, -50, 30, -50, 80, 0);
  bezierVertex(30, 50, -30, 50, -80, 0);
  endShape();
  fill("#7895B2");
  circle(0, 0, 75);
  fill(0);
  circle(xcLeft, ycLeft, 30);
  pop();

  push();
  translate(width / 2 + 100, 50);
  strokeWeight(1);
  stroke(55);
  fill("white");
  beginShape();
  vertex(-80, 0);
  bezierVertex(-30, -50, 30, -50, 80, 0);
  bezierVertex(30, 50, -30, 50, -80, 0);
  endShape();
  fill("#7895B2");
  circle(0, 0, 75);
  fill(0);
  circle(xcRight, ycRight, 30);
  pop();

  fill("#7895B2");
  noStroke();
  rect(width / 1.5, 70, 545, 755);
  fill(255);
  textFont("Koulen");
  fill("black");
  textSize(70);
  text("WATCH FOR:", width / 1.46, height / 3.5);
  textFont("Koulen");
  fill('black');
  textSize(20);
  text("Click/tap to proceed to the following paragraph", 10, 25);
  triangle(
    width / 1.1 - 10,
    arrowPosY,
    width / 1.1 + 10,
    arrowPosY,
    width / 1.1,
    arrowPosY + arrowSize
  );

  if (
    mouseX > width / 1.1 - 20 &&
    mouseX < width / 1.1 + 20 &&
    mouseY > arrowPosY &&
    mouseY < arrowPosY + arrowSize
  ) {
    fill("black");
    stroke(0);
    strokeWeight(3);
    triangle(
      width / 1.1 - 20,
      arrowPosY + 10,
      width / 1.1 + 20,
      arrowPosY + 10,
      width / 1.1,
      arrowPosY + arrowSize - 10
    );
  } else {
    currentWord = "";
    fill("#7895B2");
    noStroke();
    fill("black");
    triangle(
      width / 1.1 - 10,
      arrowPosY,
      width / 1.1 + 10,
      arrowPosY,
      width / 1.1,
      arrowPosY + arrowSize
    );
  }

  if (mouseIsPressed) {
    if (
      (mouseX > width / 1.4 - 10 && mouseX < width / 1,
      4 + 10 && mouseY > arrowPosY && mouseY < arrowPosY + arrowSize)
    ) {
      fill("black");
      textFont("Karma");
      stroke(0);
      fill(0);
      noStroke();
      textAlign(LEFT);
      textSize(25);
      for (let i = 0; i < words.length; i++) {
        text(words[i], width / 1.45, height / 3 + i * 30);
      }
    }
  }
}

function mouseClicked() {
  textIndex = (textIndex + 1) % texts.length;
}
