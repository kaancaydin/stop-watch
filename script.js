const timerEl = document.getElementById("timer");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.innerHTML = formatTime(elapsedTime);
  }, 1000);

  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
}
function stopTimer() {
  clearInterval(timerInterval);

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}
function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerEl.textContent = "00:00:00";
  resetButton.disabled = true;
  startButton.disabled = false;
  stopButton.disabled = false;
}

function formatTime(elapsedTime) {
  //const ms = Math.floor((elapsedTime % 1000) / 10);
  const sec = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const min = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const format = (unit) => (unit < 10 ? "0" + unit : unit);

  //return `${format(hours)}:${format(min)}:${format(sec)}<span class="ms">.${format(ms)}</span>`;
  return `${format(hours)}:${format(min)}:${format(sec)}`;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
