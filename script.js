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
const laps = document.getElementById("laps");


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
    // const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(milliseconds).padStart(2, '0');
    
    // WITH HOURS
    // timer.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

    timer.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

}

function stopTimer() {
    if(running) {
        clearInterval(intervalId);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    running = false;
    elapsedTime = 0;
    timer.textContent = "00:00:00";
    laps.textContent = "";
}

function recordLap() {
    // Get the current time.
    const lapTime = timer.textContent;

    //Create a list item element
    const lapElement = document.createElement('li');
    // Add the time to the list item
    lapElement.textContent = `${lapTime}`;

    laps.appendChild(lapElement);
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
lap.addEventListener('click', recordLap);