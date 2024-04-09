
let vehicles = [];
let textPoints;

function preload() {
  customFont = loadFont('fonts/AllenoireFont');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateTime();
  setInterval(updateTime, 3000);
}

function keyPressed() {
  if (keyCode === ENTER) {
    vehicles.forEach(vehicle => vehicle.randomizeColors());
  }
}

function draw() {
  background(0);
  vehicles.forEach(vehicle => {
    vehicle.addSteerBehavior();
    vehicle.addFleeBehavior(createVector(mouseX, mouseY));
    vehicle.update();
    vehicle.show();
  });

  textAlign(CENTER, CENTER);
  fill(255);
  text('Hover your mouse over the numbers!', parseInt(windowWidth / 2), windowHeight - 50);
}

function padTime(n) {
  return (n / 10) >= 1 ? n : "0" + n;
}

function updateTime() {
  let time = `${padTime(hour())}:${padTime(minute())}:${padTime(second())}`;
  let previousLength = textPoints ? textPoints.length : -1;
  textPoints = customFont.textToPoints(time, 10, parseInt(windowHeight / 2) + 100, 310);
  if (previousLength != -1) {
    if (textPoints.length > previousLength) {
      let diff = textPoints.length - previousLength;
      for (let i = 0; i < diff; i++) vehicles.push(new SquareVehicle());
      for (let i = 0; i < textPoints.length; i++) {
        let pt = textPoints[i];
        vehicles[i].setTarget(pt.x, pt.y);
      }
    } else if (textPoints.length < previousLength) {
      let diff = previousLength - textPoints.length;
      vehicles.splice(vehicles.length - diff - 1, diff);
      for (let i = 0; i < textPoints.length; i++) {
        let pt = textPoints[i];
        vehicles[i].setTarget(pt.x, pt.y);
      }
    } else {
      for (let i = 0; i < textPoints.length; i++) {
        let pt = textPoints[i];
        vehicles[i].setTarget(pt.x, pt.y);
      }
    }
  } else {
    textPoints.forEach(point => {
      let sqv = new SquareVehicle();
      sqv.setTarget(point.x, point.y);
      vehicles.push(sqv);
    });
  }
}


function draw() {
  background(220);
  
  // mouseX will change the amount of mutation in
  // the letters (note: we use randomSeed(0) every frame
  // so the letters don't just become a noisy cloud
  // but behave in a consistent way – try removing the
  // line and see what happens!)
  let mutationAmt = map(mouseX, 0,width, 3,width/6);
  randomSeed(0);
  
  // draw the points, with their mutations!
  for (let i=0; i<points.length; i++) {
    let x = points[i].x;
    let y = points[i].y;
    x += random(-mutationAmt,mutationAmt);
    y += random(-mutationAmt,mutationAmt);

    fill(0,50);     // shadow
    noStroke();
    circle(x+2,y+2, gridSize);
    
    fill(220);      // regular circle
    stroke(0, 100);
    circle(x,y, gridSize);
  }
}