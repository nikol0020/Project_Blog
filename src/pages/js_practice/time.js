function currentDate(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`,
        minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`,
        seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`,
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear();
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerHTML = `${month}/${day}/${year}`;
}

window.setInterval(currentDate, 1000);

function count() {
    let seconds = 0,
        minutes = 0,
        minute = 0;

    document.getElementById('minutes').innerHTML = `0${minutes} : `;
    document.getElementById('seconds').innerHTML = `0${seconds}`;

    return ( () => {
        ++seconds;
        if ( seconds % 60 === 0) {
            ++ minutes;
            seconds = 0;
            minute = (minutes < 10) ? `0${minutes}` : `${minutes}`;
            document.getElementById('minutes').innerHTML = `${minute} : `;
        }
        seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
        document.getElementById('seconds').innerHTML = `${seconds}`;
    })
}

function timeOnPage() {
    let getDuration = count();
    let elem = document.getElementById('time');
    let timerId = setInterval(getDuration, 1000);

    elem.addEventListener('mouseover', (e) => {
        clearInterval(timerId);
    });

    elem.addEventListener('mouseout', (e) => {
        timerId = setInterval(getDuration, 1000);
    });
}

timeOnPage();
