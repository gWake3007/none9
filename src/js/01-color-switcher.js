const start = document.querySelector('button[data-start]');
const stopChange = document.querySelector('button[data-stop]');
let startInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

start.addEventListener('click', clickStart);

function clickStart() {
  startInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.disabled = true;
  stopChange.disabled = false;
}

stopChange.addEventListener('click', clickStop);

function clickStop() {
  clearInterval(startInterval);
  start.disabled = false;
  stopChange.disabled = true;
}
