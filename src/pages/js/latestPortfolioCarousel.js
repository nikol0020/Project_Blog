//*** create section latest portfolio ***

createSectionLatestPortfolio();

function createSectionLatestPortfolio() {
    let fragment = new DocumentFragment(),
        baseElem = document.getElementById('portfolio'),
        elem, elemChild, elemChild2;
    let jsonResponse = jsonMock();

    elem = createTag('h2', 'latest-portfolio__title', jsonResponse.pages[0].section[3].title);
    fragment.append(elem);
    elem = createTag('h5', 'latest-portfolio__text', jsonResponse.pages[0].section[3].text);
    fragment.append(elem);
    elem = createTag('div', 'latest-portfolio__wrapper');
    elem.setAttribute('id', 'carouselWrapper');
    elemChild = createTag('div', 'latest-portfolio__carousel'); // delete carousel__container
    elemChild.setAttribute('id', 'carouselContainer');
    elem.append(elemChild);
    // empty block with carousel items
    elemChild = createTag('div', 'latest-portfolio__block-buttons');
    elemChild2 = createTag('button', 'latest-portfolio__button latest-portfolio__button--left');
    elemChild2.setAttribute('id', 'btn-left');
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'latest-portfolio__button latest-portfolio__button--right');
    elemChild2.setAttribute('id', 'btn-right');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('button', 'latest-portfolio__button latest-portfolio__button--see-all-works', 'See all works');
    elem.setAttribute('id', 'btn-left');
    fragment.append(elem);
    baseElem.prepend(fragment);
}

function ClassCarousel(widthItemSlider = 680, imgSrcArray = ['../images/img/hsl3.jpg', '../images/img/hedgehog.jpg',  '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg', '../images/img/hsl8.jpeg', '../images/img/mountains.jpg']) {
    let idSetInterval,
        direction,
        step = 0,
        offset = 0;

    let boundThisHandleEvent;
    let boundThisReturnMove;
    let boundThiStopMove;
    let boundThisMoveRight;
    let boundThisMoveLeft;

    this.widthItemSlider = widthItemSlider;
    this.imgSrcArray = imgSrcArray;


    //additional method for creating 3 in 1
    this.createCarouselSetItems = function (direction = false) {
        const baseElem = document.getElementById('carouselContainer');

        let fragment = new DocumentFragment();
        let elem, elemChild;

        this.widthItemSlider = 1280;
        elem = createTag('div', 'latest-portfolio__items');

        for (let i = 0; i < 3; i++) {
            elemChild = this.createCarouselItem(direction);
            elem.append(elemChild);
        }

        if (direction) {
            elem.style.left = `${offset * this.widthItemSlider}px`;
        } else {
            elem.style.right = `${offset * this.widthItemSlider}px`;
        }

        fragment.append(elem);
        baseElem.append(fragment);
        offset = 1;
    }


    this.createCarouselItem = function createCarouselItem(direction = false) {
        let j = this.imgSrcArray.length;
        let elem, elemChild;
        let fragment = new DocumentFragment();

        elem = createTag('div', 'latest-portfolio__item');
        elemChild = createTag('img', 'img latest-portfolio__item-img');
        // elemChild = createTag('img', 'img testimonials__carousel-item--image');
        elemChild.setAttribute('src', `${this.imgSrcArray[step]}`);
        elem.append(elemChild);

        // if (direction) {
        //     elem.style.left = `${offset * this.widthItemSlider}px`;
        // } else {
        //     elem.style.right = `${offset * this.widthItemSlider}px`;
        // }

        fragment.append(elem);
        // baseElem.append(fragment);

        if (step + 1 === j) {
            step = 0;
        } else {
            step++;
        }

        // offset = 1;

        return fragment;
    }

    this.moveRight = function moveRight() {
        // let activeItems = document.querySelectorAll('.testimonials__carousel-item'),
        let activeItems = document.querySelectorAll('.latest-portfolio__items'),
            wrapperId = document.getElementById('carouselWrapper'),
            // wrapperId = document.getElementById('testimonials__wrapper'),
            offsetMove = 0,
            _this = this;

        clearInterval(idSetInterval);

        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }

/*        activeItems.forEach(item => { //!***
            item.style.right = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            item.style.left = 'auto';
            offsetMove += 1;
        });*/

        for (let i = 0; i < 2; i++) {
            activeItems[i].style.right = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            activeItems[i].style.left = 'auto';
            offsetMove = 1;
        }

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = false;
            if (_this.createCarouselSetItems){
                _this.createCarouselSetItems(direction);
            } else {
                _this.createCarouselItem(direction);
            }
            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1000);

        idSetInterval = setInterval(this.moveRight.bind(_this), 2200);
    }

    this.moveLeft = function moveLeft() {
        // let activeItems = document.querySelectorAll('.testimonials__carousel-item'),
        let activeItems = document.querySelectorAll('.latest-portfolio__items'),
            wrapperId = document.getElementById('carouselWrapper'),
            offsetMove = 0,
            _this = this;

        clearInterval(idSetInterval);

        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }

/*        activeItems.forEach(item => {
            item.style.left = `${offsetMove * widthItemSlider - widthItemSlider}px`;
            item.style.right = 'auto';
            offsetMove += 1;
        });*/

        for (let i = 0; i < 2; i++) {
            activeItems[i].style.left = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            activeItems[i].style.right = 'auto';
            offsetMove = 1;
        }

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = true;
            if (_this.createCarouselSetItems){
                _this.createCarouselSetItems(direction);
            } else {
                _this.createCarouselItem(direction);
            }
            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1000);

        idSetInterval = setInterval(this.moveLeft.bind(_this), 2200);
    }

    this.stopMove = function stopMove(e) {
        let itemClass = e.target.classList;

        if (itemClass[1] === 'testimonials__carousel-item--image' || 'latest-portfolio__item-img') {
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }

    this.returnMove = function returnMove() {
        if (direction) {
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

    this.handleEvent = function handleEvent(e) {
        let buttonEvent = e.target,
            buttonEventClass = buttonEvent.classList[1];

        let events = {
            'testimonials__button--left': boundThisMoveRight,
            'testimonials__button--right': boundThisMoveLeft,
            'latest-portfolio__button--left': boundThisMoveRight,  // is added
            'latest-portfolio__button--right': boundThisMoveLeft
        }

        events[buttonEventClass]();
    }

    this.listener = function listener() {
        this.createCarouselSetItems();
        this.createCarouselSetItems();
        let wrapperId = document.getElementById('carouselWrapper');
        // let wrapperId = document.getElementById('testimonials__wrapper');

        boundThisHandleEvent = this.handleEvent.bind(this);
        boundThisReturnMove = this.returnMove.bind(this);
        boundThiStopMove = this.stopMove.bind(this);
        boundThisMoveRight = this.moveRight.bind(this);
        boundThisMoveLeft = this.moveLeft.bind(this);

        wrapperId.addEventListener('click', boundThisHandleEvent);
        wrapperId.addEventListener('mouseover', boundThiStopMove);
        wrapperId.addEventListener('mouseout', boundThisReturnMove);
    }
}

/*
function InheritanceClassCarousel3Items() {
    ClassCarousel.apply(this, arguments);

    let extListener = this.listener;
    let idSetInterval;

    // additional methods turn item by click/DoubleClick
    this.listenerThreeItems = function () {
        let wrapperId = document.getElementById('testimonials__wrapper');

        let boundThisTurnItem = this.turnItem.bind(this);
        wrapperId.addEventListener('click', boundThisTurnItem);

        let boundThisTurnItem180 = this.turnItem180.bind(this);
        wrapperId.addEventListener('dblclick', boundThisTurnItem180);

        return extListener.apply(this, arguments);
    }

    this.turnItem = function turnItem(e) {
        let itemClass = e.target.classList;

        if (itemClass[1] === 'testimonials__carousel-item--image') {
            e.target.style.transform = 'scaleX(-1)';
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }

    this.turnItem180 = function turnItem180(e) {
        let itemClass = e.target.classList;

        if (itemClass[1] === 'testimonials__carousel-item--image') {
            e.target.style.transform = 'rotateZ(35deg)';
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }
}
*/

function InheritanceClassCarousel3Items() {
    ClassCarousel.apply(this, arguments);
}

let moveCarouselThreeItems = new InheritanceClassCarousel3Items();

moveCarouselThreeItems.listener();
// moveCarouselThreeItems.listenerThreeItems();