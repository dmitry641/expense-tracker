export const SNAKE_SPEED = 1; // n times per second

const snakeBody = [
  { x: 10, y: 11 }, // { x: 11, y: 11 } -> { x: 12, y: 11 } ->
  { x: 11, y: 11 }, // { x: 10, y: 11 } -> { x: 11, y: 11 } ->
  { x: 12, y: 11 }, // { x: 11, y: 11 } -> { x: 10, y: 11 } ->
  { x: 13, y: 11 },
  { x: 14, y: 11 },
];

export function update() {
  console.log("Update snake");

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  } // вроде понял, но на первой итерации странно работает

  snakeBody[0].x += 0;
  snakeBody[0].y += 1;
}

export function draw(gameBoard) {
  console.log("Draw snake", new Date().getMilliseconds());

  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add("snake");

    gameBoard.append(snakeElement);
  });
}
