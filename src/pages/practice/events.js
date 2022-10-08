function eventLesson() {
    const elem = document.querySelector('.wrapper');

    let handlerKey = {
        'btn-1': handlerChangeBg,
        'btn-2': handlerChangeColor,
        'btn-3': handlerChangeText
    }


    elem.addEventListener('click', (e) => {
        let item = e.target;
        let itemClass = item.classList[1];

        handlerKey[itemClass](item);
    });
}

function handlerChangeBg(elem) {
    let bg = '00ffff';

    elem.style.backgroundColor = `#${bg}`;
}

function handlerChangeColor(elem) {
    let color = 'bbbddd';

    elem.style.color = `#${color}`;
}

function handlerChangeText(elem) {
    let newText = '';
    let currentText = elem.innerText;
    let choice = +confirm('Do you want to change name button?');

    if (choice) {
        newText = prompt('Enter the new button name');

        if (newText) {
            elem.innerText = `${newText}`;
        } else {
            elem.innerText = `${currentText}`;
        }
    }
}

eventLesson();
