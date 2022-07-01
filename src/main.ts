// base time
const time = document.getElementById('time')
let hour : number = 0o0;
let minutes : number = 0o0;
let seconds : number = 0o0;
let stopTime : boolean = true


// grabbing buttons and applying functions
const start = document.getElementById('start');
const stopTimer = document.getElementById('stop')

if(start) {
    start.addEventListener('click', () => {
        stopTime = false
        timerOn();
    })
}

if(stopTimer) {
    stopTimer.addEventListener('click', () => {
        if(stopTime == false) {
            stopTime = true
        }
    })
}

function timerOn() {
    if(stopTime == false) {
        seconds = seconds + 1
        if(seconds == 60) {
            minutes+= 1
            seconds = 0
        }
        if(minutes == 60) {
            hour += 1
            minutes = 0
            seconds = 0
        }

        if(time) {
            time.innerHTML = `${hour} : ${minutes} ${seconds}`        
        }

        setTimeout("timerOn()",1000)
    }

}