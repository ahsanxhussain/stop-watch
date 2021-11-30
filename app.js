const startVar = document.getElementById("start-btn");
const lapVar = document.getElementById("lap-btn");
const stopVar = document.getElementById("stop-btn");
const resetVar = document.getElementById("reset-btn");
let laps = document.querySelector('.lap-box');

const audio = new Audio();
audio.src = "./audio-files/tick-sound.mp3";
startVar.addEventListener("click", startFunc);
lapVar.addEventListener("click", lapFunc);
stopVar.addEventListener("click", stopFunc);
resetVar.addEventListener("click", resetFunc);

let hrs = 0,
  min = 0,
  sec = 0,
  msec = 0;
let timer = false;
function stopWatch() {
  if (timer === true) {
    msec += 10;
    if (msec === 1000) {
      sec += 1;
      msec = 0;
    }
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hrs += 1;
      min = 0;
      sec = 0;
    }
    /* concatenating double digit */
    let hrsDigit = hrs;
    let minDigit = min;
    let secDigit = sec;
    let msecDigit = msec;
    if (hrs < 10) {
      hrsDigit = `0${hrsDigit}`;
    }
    if (min < 10) {
      minDigit = `0${minDigit}`;
    }
    if (sec < 10) {
      secDigit = `0${secDigit}`;
    }
    if (msec < 10) {
      msecDigit = `0${msecDigit}`;
    }

    document.getElementById("hrs").innerHTML = hrsDigit;
    document.getElementById("min").innerHTML = minDigit;
    document.getElementById("sec").innerHTML = secDigit;
    document.getElementById("msec").innerHTML = msecDigit;
    setTimeout("stopWatch()", 10);
  }
}
function startFunc() {
  timer = true;
  stopWatch();
}
function lapFunc() {
  let hrsDigit = hrs;
    let minDigit = min;
    let secDigit = sec;
    let msecDigit = msec;
    if (hrs < 10) {
      hrsDigit = `0${hrsDigit}`;
    }
    if (min < 10) {
      minDigit = `0${minDigit}`;
    }
    if (sec < 10) {
      secDigit = `0${secDigit}`;
    }
    if (msec < 10) {
      msecDigit = `0${msecDigit}`;
    }
  const lap = document.createElement("div");
  lap.innerText = hrsDigit + " : " + minDigit + " : " + secDigit + " : " +msecDigit;
  laps.appendChild(lap);

}
function stopFunc() {
  timer = false;
  
}
function resetFunc() {
  timer = false;
  (hrs = 0), (min = 0), (sec = 0), (msec = 0);
  document.getElementById("hrs").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("msec").innerHTML = "00";
  laps.innerHTML = "<p>--LAPS--</p>"
}
