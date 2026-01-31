let pomodoro = document.getElementById("pomodoro");
let long =document.getElementById("long-br");
let short =document.getElementById("short-br");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let timer = document.getElementById("timer");

const MODES = {
    pomodoro:25,
    longb:15,
    shortb:5
};
let interval
let currentMode = "pomodoro";
let timeLeft = MODES[currentMode]*60;
function updateTimer() {
   let minutes = Math.floor(timeLeft/60);
   let seconds = timeLeft%60;
   let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
   timer.innerHTML = formattedTime;
}

function startTimer() {
   interval = setInterval(() => {
     timeLeft--;
     updateTimer();
     if(timeLeft === 0) {
        clearInterval(interval);
        alert("time's up!");
        timeLeft = 1500;
     }
   },1000);
}
function pauseTimer() {
    clearInterval(interval);
}
function ResetTimer() {
   clearInterval(interval);
   timeLeft = MODES[currentMode] * 60; 
   updateTimer();
}
function switchMode(mode) {
    clearInterval(interval);
    currentMode = mode;
    timeLeft = MODES[currentMode]*60;
    updateTimer(); 
}

play.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
reset.addEventListener("click",ResetTimer);
pomodoro.addEventListener("click",() => switchMode("pomodoro"));
long.addEventListener("click",() =>switchMode("longb"));
short.addEventListener("click",() => switchMode("shortb"));


