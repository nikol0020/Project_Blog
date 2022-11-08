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

for (let i = 0; i < 3; i++) {
    createSectionItems();
}

let itemsFigure = document.querySelectorAll('figure');
let itemsImg = document.querySelectorAll('img');
let itemsTitle = document.querySelectorAll('h2');
let itemsText = document.querySelectorAll('p');

function helper(item) {
    console.log('helper-->', item);
    return item.classList.add('transition-item');
}

function doFirstThing(){
    let i = 0;
    return new Promise(function (resolve, reject) {

        setTimeout(() => resolve(i), 1000);

    }).then(function (result) {

        helper(itemsImg[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), 1000);
        });

    }).then(function (result) {

        helper(itemsTitle[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), 1000);
        });
    }).then(function (result) {

        helper(itemsText[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), 1000);
        });

    }).then(function (result) {

        helper(itemsFigure[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), 1000);
        });
    });
}

function createPromises(qty){
    let initialPromiseFactories = []
    for(let i = 1; i < qty; i++){
        initialPromiseFactories.push(createPromise(i, (i+1)*1000))
    }

    return initialPromiseFactories;
}

function createPromise(i, delay){
    return new Promise(function (resolve, reject) {

        setTimeout(() => resolve(i), delay);

    }).then(function (result) {

        helper(itemsImg[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), delay);
        });

    }).then(function (result) {

        helper(itemsTitle[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), delay);
        });
    }).then(function (result) {

        helper(itemsText[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), delay);
        });

    }).then(function (result) {

        helper(itemsFigure[i]);

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(i), delay);
        });
    });
}

let promiseFactories= createPromises(3);
let result = doFirstThing();

promiseFactories.forEach( (promiseFactory) => {
    result = result.then(promiseFactory);
});
