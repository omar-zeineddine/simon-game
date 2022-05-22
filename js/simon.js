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
