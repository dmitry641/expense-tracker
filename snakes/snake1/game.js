import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main); // ~75 times per minute

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return; // не много не понял

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
