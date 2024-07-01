let startTime;
let elapsedTime = 0;
let intervalId;
let running = false;

// HTML Elements
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");


function startTimer() {
    if(!running) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateDisplay, 10);
        running = true;
    } 
}

function updateDisplay() {
    // Calculating time elapsed by subtracting the startTIme from the current time.
    currentTime = Date.now()
    elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    // Calculate the % of the hours first then convert to minutes
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    
    // FormatTime
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');
    // 
    timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

}

// Strat