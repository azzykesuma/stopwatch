"use strict";
// base time
const time = document.getElementById('time');
let hour = 0o0;
let minutes = 0o0;
let seconds = 0o0;
let stopTime = true;
// grabbing buttons and applying functions
const start = document.getElementById('start');
const stopTimer = document.getElementById('stop');
const reset = document.getElementById('reset');
if (start) {
    start.addEventListener('click', () => {
        stopTime = false;
        timerOn();
        if (start != null) {
            start.disabled = true;
        }
        if (stopTimer != null) {
            stopTimer.disabled = false;
        }
    });
}
if (stopTimer) {
    stopTimer.addEventListener('click', () => {
        if (stopTime == false) {
            stopTime = true;
        }
        if (stopTime == true) {
            if (start != null) {
                start.disabled = false;
            }
        }
    });
}
if (reset) {
    reset.addEventListener('click', () => {
        stopTime = true;
        hour = 0;
        minutes = 0;
        seconds = 0;
        if (start != null) {
            if (stopTime == true) {
                start.disabled = false;
            }
        }
        if (stopTimer != null) {
            stopTimer.disabled = true;
        }
        if (time) {
            time.innerHTML = '0 : 0 : 0';
        }
        timerOn();
    });
}
function timerOn() {
    if (stopTime == false) {
        seconds += 1;
        if (seconds == 60) {
            minutes += 1;
            seconds = 0;
        }
        if (minutes == 60) {
            hour += 1;
            minutes = 0;
            seconds = 0;
        }
        if (time) {
            time.innerHTML = `${hour} : ${minutes} : ${seconds}`;
        }
        setTimeout("timerOn()", 1000);
    }
}
