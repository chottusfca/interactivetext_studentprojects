let string = `
When Sophie hobbled over, Michael was standing watching\nthe last light fade out of a little round lump under the dark water.`;
let currentCharacter = 0;

//function preload(){ 
   // myFont = loadFont("js/'Inria Serif'");
  //  }

  function setup() {
     createCanvas(1000, 1000);
      }

     function draw() {
        background('#0A0B3A');  
        let currentString = string.substring(0, currentCharacter);
        textFont('Inria Serif');
        
        fill('#FBC744');
        textSize(30);
        textAlign(LEFT, TOP);
        textLeading(55);
        text(currentString, 100, 100);
      
    
        currentCharacter += 0.4;

}