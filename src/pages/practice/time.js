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
