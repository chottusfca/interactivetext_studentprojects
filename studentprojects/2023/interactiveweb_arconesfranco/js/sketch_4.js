const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelectorAll(".volume-slider input"),
keysCheckbox = document.querySelectorAll(".keys-checkbox input");

let allKeys = [],
audio = new Audio ("tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  
  const clickedKey = document.querySelector (`[data-key="${key}"]`);
  clickedKey.classList.add ("active");
  setTimeout(()=> {
    clickedKey.classList.remove("active");
  }, 150);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key))
});

const pressedkey = (e) => {
  if(allKeys.includes(e.key)) playTune(e.key);

}
document.addEventListener("keydown", pressedkey);