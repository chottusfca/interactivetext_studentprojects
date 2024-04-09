const rainContainer = document.querySelector(".rain-container");

const background = [
  "linear-gradient(transparent, blue, white, #fcf972)",
  "linear-gradient(transparent, white)",
];

const amount = 100; 
let i = 0;


while (i < amount) {

  const drop = document.createElement("i");


  const raindropProperties = {
    width: Math.random() * 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    delay: Math.random() * -20 + "s",
    duration: Math.random() * 5 + "s",
    bg: background[Math.floor(Math.random() * background.length)],
    opacity: Math.random() + 0.2
  };


  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;


  rainContainer.appendChild(drop);
  i++;
}

setInterval (200)

