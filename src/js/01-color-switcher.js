const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const CHANGE_TIME = 1000;
let timerId = null;

btnStop.setAttribute('disabled', 'disabled');

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', 'disabled');
  btnStop.removeAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_TIME);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled', 'disabled');
  btnStop.setAttribute('disabled', 'disabled');
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
