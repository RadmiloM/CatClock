let currentTime = document.querySelector('.current-time');
let button = document.querySelector('.party');


function getCurrentTime() {

    const currentDate = new Date();
    let hours = currentDate.getHours();
    let  minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const noon = 12;
    let meridian = 'AM';

    if(hours > noon) {
        hours-= noon;
        meridian = 'PM';
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(seconds < 10) {
        seconds = `0${seconds}`
    }

    let time = `${hours}:${minutes}:${seconds} ${meridian}!`;

    currentTime.textContent = time;

}

button.addEventListener('click', () => {
    button.classList.toggle('clicked');
})


function main() {
    let updateSeconds = 1000;
    setInterval(getCurrentTime, updateSeconds);
}

main();
