const canvas = document.getElementById("canvas"),
  toolsBtn = document.querySelectorAll(".tool"),
  board = document.querySelector(".board"),
  ctx = canvas.getContext("2d");

// Global variables with default value

let isDrawing = false;
let selectedTool = "brush";
let brushWidth = 5;
let prevMouseX, prevMouseY;

window.addEventListener("load", () => {
  // set canvas width & height...
  //offsetwidth/height returns viewable width/height of an element

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
});

const drawReact = (e) => {
  ctx.strokeRect(
    e.offsetX,
    e.offsetY,
    prevMouseX - e.offsetX,
    prevMouseY - e.offsetY
  );
};
const startDraw = (e) => {
  isDrawing = true;
  prevMouseX = e.offsetX; // passing current mouse in X position as prevMouseX value
  prevMouseY = e.offsetY; //passing current mouse in Y position as prevMouseY value
  ctx.beginPath(); // creates new path to draw
  ctx.lineWidth = brushWidth; // passing brushsize as line width
  // copying canvas data & passing as snapshot value.. this avoids dragging the image
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // getImageData() returns an imagedata object that copies the pixel data
};
const drawing = (e) => {
  if (!isDrawing) return; // if isDrawing is false
  ctx.putImageData(snapshot, 0, 0); // adding copied canvas data onto this canvas

  if (selectedTool === "brush") {
    ctx.lineTo(e.offsetX, e.offsetY); // creating line accd to mouse pointer
    ctx.stroke(); // drawing/filling line with color
  } else if (selectedTool === "rectangle") {
    drawReact(e);
  }
};

toolsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".options .active").classList.remove("active");
    btn.classList.add("active");
    selectedTool = btn.id;
    console.log(selectedTool);
  });
});

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

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
