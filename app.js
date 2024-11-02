const currentTime = document.querySelector('.current-time');
const button = document.querySelector('.party');
const blockQuote = document.querySelector('blockquote');
const image = document.querySelector('.cat');

function getCurrentTime() {

    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const noon = 12;
    let meridian = 'AM';

    if (hours > noon) {
        hours -= noon;
        meridian = 'PM';
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    let time = `${hours}:${minutes}:${seconds} ${meridian}!`;

    currentTime.textContent = time;

}

function changeText() {
    if (blockQuote.textContent === '"Good Evening!"') {
        blockQuote.textContent = "Let's party!"
    } else {
        blockQuote.textContent = '"Good Evening!"';
    }
}

function changeImage() {
    if(image.src === 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg') {
        image.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    } else{
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg';
    }
}

button.addEventListener('click', () => {
    button.classList.toggle('clicked');
    changeText();
    changeImage();
})


function main() {
    let updateSeconds = 1000;
    setInterval(getCurrentTime, updateSeconds);
}

main();
