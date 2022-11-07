const gameContainer = document.getElementById("game");
let cardsRevealed = 0;
let colorToMatch = '';
let colorHolder = '';


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.isRevealed = false;

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

function makeItHappen(){
        const div = document.querySelectorAll("div");
        for (let item of div){
          item.style.backgroundColor = '';
          item.isRevealed = false;
        }
        colorToMatch = '';
        colorHolder = '';
        cardsRevealed = 0;
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  if (cardsRevealed < 2 && !event.target.isRevealed){
    event.target.isRevealed = true;
    event.target.style.backgroundColor = event.target.className;
    cardsRevealed++;
    console.log(cardsRevealed);
    if (colorToMatch === event.target.className){
      alert("You got it!");
    }
    else if (!(colorToMatch === '') && !(colorToMatch === event.target.className)){
      setTimeout(makeItHappen, 1000);
      colorHolder = event.target.className;
    }
    else if (colorToMatch === ''){
      colorToMatch = event.target.className;
    }  
    else {
      colorHolder = event.target.className;
    }

  console.log(colorToMatch);
  console.log(event.target.isRevealed);

  }
  else if(event.target.isRevealed){
    event.target.style.backgroundColor = '';
    event.target.isRevealed = false;
    cardsRevealed = 0;
    console.log("Subtracting");
    if (colorToMatch === event.target.className && cardsRevealed === 1) {
      colorToMatch = colorHolder;
      console.log(colorToMatch);
    }
    else if(cardsRevealed === 0) {
      colorToMatch = '';
    }
    console.log(cardsRevealed);
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */