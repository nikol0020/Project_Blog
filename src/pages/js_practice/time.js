function currentDate() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? `0${date.getHours()}` : `${date.getHours()}`,
        minutes = (date.getMinutes() < 10) ? `0${date.getMinutes()}` : `${date.getMinutes()}`,
        seconds = (date.getSeconds() < 10) ? `0${date.getSeconds()}` : `${date.getSeconds()}`,
        day = date.getDate(),
        weekDay = currentDay(),
        month = currentMonth(),
        year = date.getFullYear();
    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${weekDay}`;
    document.getElementById('date').innerHTML = `${month} ${day}, ${year}`;
}

window.setInterval(currentDate, 1000);

function currentMonth() {
    const monthAll = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];
    let month = new Date().getMonth();
    let nameMonth = monthAll[month];

    return nameMonth;
}

function currentDay() {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = new Date().getDay();
    let nameDay = week[day];

    return nameDay;
}

function count() {
    let seconds = 0,
        minutes = 0,
        minute = 0;

    document.getElementById('minutes').innerHTML = `0${minutes} : `;
    document.getElementById('seconds').innerHTML = `0${seconds}`;

    return (() => {
        ++seconds;
        if (seconds % 60 === 0) {
            ++minutes;
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
