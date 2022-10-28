const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

const newyears = "22 Oct 2022";

function countdown() {
    const newyeardate = new Date(newyears);
    const currentdate = new Date();

    const totalseconds = (newyeardate - currentdate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minutesEL.innerHTML = formatTime(minutes);
    secondsEL.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    // console.log(days, hours, minutes, seconds)
}

countdown();

setInterval(countdown, 1000);