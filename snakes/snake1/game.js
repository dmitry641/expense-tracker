let lastRenderTime = 0;
const SNAKE_SPEED = 2; // n times per second

function main(currentTime) {
  window.requestAnimationFrame(main);
  // console.log(new Date()); // ~75 times per minute

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  console.log(new Date().getMilliseconds());
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {}

function draw() {}
