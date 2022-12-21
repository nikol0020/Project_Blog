//*** create section latest portfolio ***
function createSectionLatestPortfolio() {
    let fragment = new DocumentFragment(),
        baseElem = document.getElementById('portfolio'),
        elem, elemChild, elemChild2;
    let jsonResponse = jsonMock();

    elem = createTag('h2', 'latest-portfolio__title');
    elemChild = createTag('span', 'latest-portfolio__title-text', jsonResponse.pages[0].section[3].title);
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('h5', 'latest-portfolio__text', jsonResponse.pages[0].section[3].text);
    fragment.append(elem);
    elem = createTag('div', 'latest-portfolio__wrapper');
    elem.setAttribute('id', 'carouselWrapper');
    elemChild = createTag('div', 'latest-portfolio__carousel');
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

//*** create section testimonials ***
function createSectionTestimonials() {
    let fragment = new DocumentFragment(),
        baseElem, elem, elemChild;
    let jsonResponse = jsonMock();

    elem = createTag('h2', 'testimonials__title');
    elemChild = createTag('span', 'latest-portfolio__title-text', jsonResponse.pages[0].section[4].title);
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('div', 'testimonials__wrapper');
    elem.setAttribute('id', 'testimonials__wrapper');
    elemChild = createTag('button', 'testimonials__button testimonials__button--left');
    elem.append(elemChild);
    elemChild = createTag('div', 'carousel testimonials__carousel');
    elemChild.setAttribute('id', 'testimonials__carousel');
    // * empty carousel block *
    elem.append(elemChild);
    elemChild = createTag('button', 'testimonials__button testimonials__button--right');
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('testimonials');
    baseElem.append(fragment);
}

//абстрактный класс Carousel
function Carousel(widthItemSlider = 560, imgSrcArray = ['../images/img/hsl3.jpg', '../images/img/hedgehog.jpg', '../images/img/mountains.jpg', '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg', '../images/img/hsl8.jpeg']) {

    let direction,
        idSetInterval,
        boundThisHandleEvent,
        boundThisReturnMove,
        boundThiStopMove,
        boundThisMoveRight,
        boundThisMoveLeft;

    this.widthItemSlider = widthItemSlider;
    this.imgSrcArray = imgSrcArray;
    this._step = 0;
    this._offset = 0;

    this.createCarouselItem = (direction = false) => {
        const baseElem = document.getElementById('testimonials__carousel');

        let j = this.imgSrcArray.length;
        let elem, elemChild;
        let fragment = new DocumentFragment();

        elem = createTag('div', 'testimonials__carousel-item');
        /****************************/
        elemChild = createTag('a', 'img testimonials__carousel-item-container');
        elemChild2 = createTag('div', 'img testimonials__carousel-item1');
        elemChild3 = createTag('p', 'testimonials__carousel-quote', 'We move at a fast pace. I’m always working on something. I am excited about it!');
        elemChild2.append(elemChild3);
        elemChild3 = createTag('div', 'testimonials__carousel-author', 'Martin Oda');
        elemChild2.append(elemChild3);
        elemChild3 = createTag('div', 'testimonials__carousel-specialization', 'Product designer');
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        /*********************************/
        elemChild2 = createTag('img', 'img testimonials__carousel-item--image');
        elemChild2.setAttribute('src', `${this.imgSrcArray[this._step]}`);
        elemChild.append(elemChild2);
        elem.append(elemChild);

        if (direction) {
            elem.style.left = `${this._offset * this.widthItemSlider}px`;
        } else {
            elem.style.right = `${this._offset * this.widthItemSlider}px`;
        }

        fragment.append(elem);
        baseElem.append(fragment);

        if (this._step + 1 === j) {
            this._step = 0;
        } else {
            this._step++;
        }

        this._offset = 1;
        return this.imgSrcArray;
    }

    this.moveRight = () => {
        let wrapperId,
            activeItems,
            offsetMove = 0;

        if (this.createCarouselSetItems) {
            activeItems = document.querySelectorAll('.latest-portfolio__items');
            wrapperId = document.getElementById('carouselWrapper');
        } else {
            activeItems = document.querySelectorAll('.testimonials__carousel-item');
            wrapperId = document.getElementById('testimonials__wrapper');
        }

        clearInterval(idSetInterval);

        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }

        for (let i = 0; i < 2; i++) {
            activeItems[i].style.right = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            activeItems[i].style.left = 'auto';
            offsetMove = 1;
        }

        setTimeout( () => {
            activeItems[0].remove();
            offsetMove = 0;
            direction = false;

            if (this.createCarouselSetItems) {
                this.createCarouselSetItems(direction);
            } else {
                this.createCarouselItem(direction);
            }

            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1500);

        idSetInterval = setInterval(this.moveRight.bind(this), 2200);
    }

    this.moveLeft = () => {
        let wrapperId,
            activeItems,
            offsetMove = 0;

        if (this.createCarouselSetItems) {
            activeItems = document.querySelectorAll('.latest-portfolio__items');
            wrapperId = document.getElementById('carouselWrapper');
        } else {
            activeItems = document.querySelectorAll('.testimonials__carousel-item');
            wrapperId = document.getElementById('testimonials__wrapper');
        }

        clearInterval(idSetInterval);

        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }

        for (let i = 0; i < 2; i++) {
            activeItems[i].style.left = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            activeItems[i].style.right = 'auto';
            offsetMove = 1;
        }

        setTimeout( () => {
            activeItems[0].remove();
            offsetMove = 0;
            direction = true;

            if (this.createCarouselSetItems) {
                this.createCarouselSetItems(direction);
            } else {
                this.createCarouselItem(direction);
            }
            console.log('moveLeft', direction);
            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1500);

        idSetInterval = setInterval(this.moveLeft.bind(this), 2200);
    }

    this.stopMove = (e) => {
        let itemClass = e.target.classList;

        if (itemClass[1] === 'testimonials__carousel-item-container' || 'latest-portfolio__items') {
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }

        if (itemClass[1] === 'latest-portfolio__item-img') {
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }

    this.returnMove = () => {
        if (direction) {
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

    this.handleEvent = (e) => {
        let buttonEvent = e.target,
            buttonEventClass = buttonEvent.classList[1];

        let events = {
            'testimonials__button--left': boundThisMoveRight,
            'testimonials__button--right': boundThisMoveLeft,
            'latest-portfolio__button--left': boundThisMoveRight,
            'latest-portfolio__button--right': boundThisMoveLeft
        }
        const keys = Object.keys(events);

        for (const key of keys) {
            if (key === buttonEventClass) {
                events[buttonEventClass]();
            }
        }
    }

    this.listener = () => {
        let wrapperId;

        if (this.createCarouselSetItems) {
            wrapperId = document.getElementById('carouselWrapper');
            this.createCarouselSetItems(direction);
            this.createCarouselSetItems(direction);
        } else {
            wrapperId = document.getElementById('testimonials__wrapper');
            this.createCarouselItem(direction);
            this.createCarouselItem(direction);
        }

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

function InheritanceCarousel() {
    Carousel.apply(this, arguments);

    let extListener = this.listener;
    let idSetInterval;

    // additional methods turn item by click/DoubleClick
    this.extendListener = () => {
        let wrapperId = document.getElementById('testimonials__wrapper');

        let boundThisTurnItem = this.turnItem.bind(this);
        wrapperId.addEventListener('click', boundThisTurnItem);

        let boundThisTurnItem180 = this.turnItem180.bind(this);
        wrapperId.addEventListener('dblclick', boundThisTurnItem180);
        return extListener.apply(this, arguments);
    }

    this.turnItem = (e) => {
        let itemClass = e.currentTarget.classList;

        if (itemClass[0] === 'testimonials__wrapper') {
            e.currentTarget.style.opacity = 0.5;
            clearInterval(idSetInterval);
        }
    }

    this.turnItem180 = (e) => {
        let itemClass = e.currentTarget.classList;

        if (itemClass[0] === 'testimonials__wrapper') {
            e.currentTarget.style.opacity = 1;
            clearInterval(idSetInterval);
        }
    }
}

function Carousel3Items() {
    Carousel.apply(this, arguments);

    let extendListener = this.listener;
    let idSetInterval;

    //additional method for creating 3 in 1/ stop on hover the buttons
    this.createCarouselSetItems = (direction = false) => {
        const baseElem = document.getElementById('carouselContainer');

        let fragment = new DocumentFragment();
        let elem, elemChild;

        this.widthItemSlider = 1170;
        elem = createTag('div', 'latest-portfolio__items');

        for (let i = 0; i < 3; i++) {
            elemChild = this.createCarouselItem();
            elem.append(elemChild);
        }

        if (direction) {
            elem.style.left = `${this._offset * this.widthItemSlider}px`;
        } else {
            elem.style.right = `${this._offset * this.widthItemSlider}px`;
        }

        fragment.append(elem);
        baseElem.append(fragment);
        this._offset = 1;
    }

    this.createCarouselItem = () => {
        let j = this.imgSrcArray.length;
        let jsonResponse = jsonMock();
        let elem, elemChild;
        let fragment = new DocumentFragment();

        elem = createTag('figure', 'latest-portfolio__item');
        elemChild = createTag('img', 'img latest-portfolio__item-img');
        elemChild.setAttribute('src', `${this.imgSrcArray[this._step]}`);
        elem.append(elemChild);
        elemChild = createTag('figcaption', 'latest-portfolio__item-theme');
        try {
            elemChild2 = createTag('h2', 'latest-portfolio__item-theme-title', jsonResponse.pages[0].section[3].item[this._step].itemTitle);
        }
        catch  {
            elemChild2 = createTag('h2', 'latest-portfolio__item-theme-title', 'Forest mood');
        }
        elemChild.append(elemChild2);
        try {
            elemChild2 = createTag('p', 'latest-portfolio__item-theme-text', jsonResponse.pages[0].section[3].item[this._step].itemText);
        }
        catch  {
            elemChild2 = createTag('p', 'latest-portfolio__item-theme-text', 'Photography, river, lake');
        }
        elemChild.append(elemChild2);
        elem.append(elemChild);
        fragment.append(elem);

        if (this._step + 1 === j) {
            this._step = 0;
        } else {
            this._step++;
        }
        return fragment;
    }

    // additional method by DoubleClick
    this.extendListener = () => {
        let wrapperId = document.getElementById('carouselContainer');

        let boundThisScaleEffect = this.scaleEffect.bind(this);
        wrapperId.addEventListener('dblclick', boundThisScaleEffect);
        return extendListener.apply(this, arguments);
    }

    this.scaleEffect = (e) => {
        let itemClass = e.target.classList;
        let wrapperId = document.getElementById('carouselContainer');

        if (itemClass[1] === 'latest-portfolio__item-img') {
            wrapperId.style.transform = 'scale(1.2)';
            setTimeout(() => {
                wrapperId.style.transform = 'inherit';
            }, 1500);
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }
}

let carouselLatestPortfolio = new Carousel3Items();
let carouselTestimonials = new InheritanceCarousel();

createSectionLatestPortfolio();
createSectionTestimonials();

carouselLatestPortfolio.extendListener();
carouselTestimonials.extendListener();