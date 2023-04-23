const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const bodY = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timeout = 0;

startButton.addEventListener('click', startColorChange);
startButton.classList = 'btn';
stopButton.classList = 'btn';

stopButton.addEventListener('click', stopColorChange);

function startColorChange() {
  bodY.style.backgroundColor = getRandomHexColor();
  startButton.disabled = true;
  stopButton.disabled = false;
  timeout = setTimeout(startColorChange, 1000);
  console.log('timeout:', timeout);
}

function stopColorChange() {
  clearTimeout(timeout);
  startButton.disabled = false;
  stopButton.disabled = true;
}
