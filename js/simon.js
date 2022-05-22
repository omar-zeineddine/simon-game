// variable declarations
const body = document.getElementsByTagName("body")[0];
const title = document.getElementById("level");
const green = document.getElementById("green");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");

// sound effects
const redSfx = new Audio("./assets/sounds/red.mp3");
const greenSfx = new Audio("./assets/sounds/green.mp3");
const yellowSfx = new Audio("./assets/sounds/yellow.mp3");
const blueSfx = new Audio("./assets/sounds/blue.mp3");
const wrongSfx = new Audio("./assets/sounds/wrong.mp3");
let sounds = [0, greenSfx, redSfx, yellowSfx, blueSfx];

// track levels & color clicks
let level = 1;
let order = [];
let index = 0;
let click = 0;

// keypress and mouse clicks event listeners

document.addEventListener("keypress", function () {
  // update title according to current level
  title.textContent = `Level ${level}`;
  // add event listeners on their respective divs
  green.addEventListener("click", greenClick);
  red.addEventListener("click", redClick);
  blue.addEventListener("click", blueClick);
  yellow.addEventListener("click", yellowClick);
  play();
});

// event listeners callback functions

function greenClick() {
  green.classList.add("pressed");
  setTimeout(function () {
    green.classList.remove("pressed");
  }, 100);
  click = 1;
  monitorClicks();
}

function redClick() {
  red.classList.add("pressed");
  setTimeout(function () {
    red.classList.remove("pressed");
  }, 100);
  click = 2;
  monitorClicks();
}

function yellowClick() {
  yellow.classList.add("pressed");
  setTimeout(function () {
    yellow.classList.remove("pressed");
  }, 100);
  click = 3;
  monitorClicks();
}

function blueClick() {
  blue.classList.add("pressed");
  setTimeout(function () {
    blue.classList.remove("pressed");
  }, 100);
  click = 4;
  monitorClicks();
}

// monitor user clicks

function monitorClicks() {
  if (click != order[index]) {
    wrongSfx.play();
    title.textContent = "Game over press any key to restart";
    body.classList.add("red");
    setTimeout(function () {
      // change background to red when user clicks a wrong sequence
      body.classList.remove("red");
    }, 250);

    //remove event listeners and reset game state
    green.removeEventListener("click", greenClick);
    red.removeEventListener("click", redClick);
    blue.removeEventListener("click", blueClick);
    yellow.removeEventListener("click", yellowClick);
    reset();
  } else {
    sounds[click].play();
    index++;
    if (index == level) {
      level++;
      index = 0;
      setTimeout(function () {
        play();
      }, 1000);
    }
  }
}
