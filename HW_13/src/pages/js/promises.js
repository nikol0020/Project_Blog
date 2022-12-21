function createSectionItems() {
    let elem, elemChild, elemChild2;

    fragment = new DocumentFragment();
    elem = document.createElement('figure');
    elem.className = 'section-animation__item';
    elemChild = document.createElement('img');
    elemChild.className = 'section-animation__item-img';
    elemChild.setAttribute('src', '../images/img/hsl5.jpeg');
    elem.append(elemChild);
    elemChild = document.createElement('figcaption');
    elemChild.className = 'section-animation__item-post';
    elemChild2 = document.createElement('h2');
    elemChild2.className = 'section-animation__item-title';
    elemChild2.innerText = 'Lorem ipsum dolor sit amet';
    elemChild.append(elemChild2);
    elemChild2 = document.createElement('p');
    elemChild2.className = 'section-animation__item-text';
    elemChild2.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis cum error eveniet' +
        '                    inventore laborum minima molestias natus nesciunt nisi, obcaecati officiis placeat quae quam,' +
        '                    repudiandae sapiente temporibus vitae voluptates.';
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('section-animation');
    baseElem.append(fragment);

    return baseElem;
}

function clearItem(item) {
    return item.classList.add('transition-item');
}

function clearItemLast(item) {
    return item.classList.add('transition-item--last');
}

function returnItem(item) {
    return item.classList.remove('transition-item');
}

function returnItemLast(item) {
    return item.classList.remove('transition-item--last');
}

function createPromises(qty, delay, itemsFigure, itemsImg, itemsTitle, itemsText) {
    for (let i = 0; i < qty; i++) {
        createPromise(i, (i) * delay, qty, itemsFigure, itemsImg, itemsTitle, itemsText); //вызов промисов
    }
}

function createPromise(i, delay, qty, itemsFigure, itemsImg, itemsTitle, itemsText) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            setTimeout(() => {
                (clearItem(itemsImg[i]))
            }, delay);
            setTimeout(() => {
                (clearItem(itemsTitle[i]))
            }, delay + 2000);
            setTimeout(() => {
                (clearItem(itemsText[i]))
            }, delay + 4000);
            setTimeout(() => {
                (clearItemLast(itemsFigure[i]));
            }, delay + 5000);
            resolve(i);
        }, delay)
    })
        .then(function (result) {
            if (i === qty - 1) {
                setTimeout(() => {
                    (progressBarForward())
                }, delay + 6000);
            }
        })
        .then(function (result) {
            if (i === qty - 1) {
                setTimeout(() => {
                    for (let j = 0; j < itemsFigure.length; j++) {
                        returnItem(itemsImg[j]);
                        returnItem(itemsTitle[j]);
                        returnItem(itemsText[j]);
                        returnItemLast(itemsFigure[j]);
                    }
                    btnOne.addEventListener("click", clearOne);
                    btnAll.addEventListener("click", clearAll);
                    btnOne.classList.remove('btn-disable');
                    btnAll.classList.remove('btn-disable');
                }, delay + 7000);
            }
        })
}

function clearOne() {
    let itemsFigure = document.querySelectorAll('figure');
    let itemsImg = document.querySelectorAll('img');
    let itemsTitle = document.querySelectorAll('h2');
    let itemsText = document.querySelectorAll('p');
    btnOne.removeEventListener("click", clearOne);
    btnAll.removeEventListener("click", clearAll);
    btnOne.classList.add('btn-disable');
    btnAll.classList.add('btn-disable');
    progressBarBack();
    createPromises(itemsFigure.length, 2500, itemsFigure, itemsImg, itemsTitle, itemsText);
}

function clearAll() {
    let itemsFigure = document.querySelectorAll('figure');
    let itemsImg = document.querySelectorAll('img');
    let itemsTitle = document.querySelectorAll('h2');
    let itemsText = document.querySelectorAll('p');
    btnOne.removeEventListener("click", clearOne);
    btnAll.removeEventListener("click", clearAll);
    btnOne.classList.add('btn-disable');
    btnAll.classList.add('btn-disable');
    progressBarBack();
    createPromises(itemsFigure.length, 0, itemsFigure, itemsImg, itemsTitle, itemsText);
}

function progressBarForward() {
    let j = 0;
    if (!j) {
        j = 1;
        let elem = document.getElementById("progressBarFill");
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = `${width}%`;
            }
        }
    }
}

function progressBarBack() {
    j = 0;
    if (!j) {
        j = 1;
        let elem = document.getElementById("progressBarFill");
        let width = 100;
        let id = setInterval(frame, 18);

        function frame() {
            if (!width) {
                clearInterval(id);
                j = 0;
            } else {
                width--;
                elem.style.width = `${width}%`;
            }
        }
    }
}

function promisePageContent(qty) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            setTimeout(() => {
                progressBarForward()
            }, 0);
            setTimeout(() => {
                for (let i = 0; i < qty; i++) {
                    createSectionItems();
                }
            }, 1000);
            resolve(1);
        }, 250);
    })
}

promisePageContent(3);

let btnOne = document.querySelector("#btn-one");
let btnAll = document.querySelector("#btn-all");

btnOne.addEventListener("click", clearOne);
btnAll.addEventListener("click", clearAll);
