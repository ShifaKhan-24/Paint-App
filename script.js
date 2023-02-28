const canvas = document.getElementById("canvas");
const board = document.querySelector(".board");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var theColor = "";
var lineW = 5;

board.style.backgroundColor = "#fff";
var theInput = document.getElementById("board-color");

theInput.addEventListener(
  "input",
  function () {
    theColor = theInput.value;
    board.style.backgroundColor = theColor;
  },
  false
);
