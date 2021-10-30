const newYears = '1 jan 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const result = (newYearDate - currentDate) / 1000;

    if (result < 0) {
        daysEl.innerHTML = '00';
        hoursEl.innerHTML = '00';
        minutesEl.innerHTML = '00';
        secondsEl.innerHTML = '00';
    } else {
        const days = Math.floor(result / 3600 / 24);
        const hours = Math.floor(result / 3600) % 24;
        const minutes = Math.floor(result / 60) % 60;
        const seconds = Math.floor(result) % 60;
    
        daysEl.innerHTML = (days < 10) ? `0${days}` : days;
        hoursEl.innerHTML = (hours < 10) ? `0${hours}` : hours;
        minutesEl.innerHTML = (minutes < 10) ? `0${minutes}` : minutes;
        secondsEl.innerHTML = (seconds < 10) ? `0${seconds}` : seconds;
    }
}

countdown();

setInterval(countdown, 1000);