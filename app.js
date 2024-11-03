const currentTime = document.querySelector('.current-time');
const button = document.querySelector('.party');
const blockQuote = document.querySelector('blockquote');
const image = document.querySelector('.cat');
const wakeUpTime = document.querySelector('.wake-up-time');
let index = 0;

wakeUpTime.addEventListener('change', () => {
    index = wakeUpTime.selectedIndex;
})

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

    if(wakeUpTime[index].label === '1AM - 2AM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }
    else if(wakeUpTime[index].label === '2AM - 3AM'){
        image.src = 'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '3AM - 4AM'){
        image.src = 'https://images.unsplash.com/photo-1536590158209-e9d615d525e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '4AM - 5AM'){
        image.src = 'https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '5AM - 6AM'){
        image.src = 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '6AM - 7AM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1666612335748-d23dcba788e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '7AM - 8AM'){
        image.src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '8AM - 9AM'){
        image.src = 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '9AM - 10AM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1667099522743-6b233d408465?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '10AM - 11AM'){
        image.src = 'https://images.unsplash.com/photo-1518843025960-d60217f226f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '11AM - 12PM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=2156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '12PM - 1PM'){
        image.src = 'https://images.unsplash.com/photo-1548366086-7f1b76106622?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '1PM - 2PM'){
        image.src = 'https://images.unsplash.com/photo-1552933529-e359b2477252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '2PM - 3PM'){
        image.src = 'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '3PM - 4PM'){
        image.src = 'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '4PM - 5PM'){
        image.src = 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '5PM - 6PM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1668971283504-ae5f2532efd0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '6PM - 7PM'){
        image.src = 'https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '7PM - 8PM'){
        image.src = 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '8PM - 9PM'){
        image.src = 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

    else if(wakeUpTime[index].label === '9PM - 10PM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1674316194408-979a3a6a907a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

    else if(wakeUpTime[index].label === '10PM - 11PM'){
        image.src = 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '10PM - 11PM'){
        image.src = 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '11PM - 12AM'){
        image.src = 'https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    else if(wakeUpTime[index].label === '12AM - 1AM'){
        image.src = 'https://images.unsplash.com/photo-1542108226-9130e1e83cc4?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
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
