//*** create section testimonials ***
function createSectionTestimonials() {
    let fragment = new DocumentFragment(),
        baseElem, elem, elemChild;
    let jsonResponse = jsonMock();

    elem = createTag('h2', 'testimonials__title', jsonResponse.pages[0].section[4].title);
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

// let imgSrcArray = ['../images/img/testimonialNatImg.png', '../images/img/mountains.jpg', '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg', '../images/img/hsl8.jpeg'];
// imgSrcArray = ['../images/img/hedgehog.jpg', '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg']

//абстрактный класс Carousel
function ClassCarousel(widthItemSlider = 680, imgSrcArray = ['../images/img/hedgehog.jpg', '../images/img/mountains.jpg', '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg', '../images/img/hsl8.jpeg']) {
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

    this.createCarouselItem = function createCarouselItem(direction = false) {
        const baseElem = document.getElementById('testimonials__carousel');

        let j = this.imgSrcArray.length;
        let elem, elemChild;
        let fragment = new DocumentFragment();

        elem = createTag('div', 'testimonials__carousel-item');
        elemChild = createTag('img', 'img testimonials__carousel-item--image');
        elemChild.setAttribute('src', `${this.imgSrcArray[step]}`);
        elem.append(elemChild);

        if (direction) {
            elem.style.left = `${offset * this.widthItemSlider}px`;
        } else {
            elem.style.right = `${offset * this.widthItemSlider}px`;
        }

        fragment.append(elem);
        baseElem.append(fragment);

        if (step + 1 === j) {
            step = 0;
        } else {
            step++;
        }

        offset = 1;
        return this.imgSrcArray;
    }

    this.moveRight = function moveRight() {
        let activeItems = document.querySelectorAll('.testimonials__carousel-item'),
            wrapperId = document.getElementById('testimonials__wrapper'),
            offsetMove = 0,
            _this = this;

        clearInterval(idSetInterval);

        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }


        activeItems.forEach(item => {
            item.style.right = `${offsetMove * this.widthItemSlider - this.widthItemSlider}px`;
            item.style.left = 'auto';
            offsetMove += 1;
        });

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = false;
            _this.createCarouselItem(direction);
            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1000);

        idSetInterval = setInterval(this.moveRight.bind(_this), 2200);
    }

    this.moveLeft = function moveLeft() {
        let activeItems = document.querySelectorAll('.testimonials__carousel-item'),
            wrapperId = document.getElementById('testimonials__wrapper');
         let   offsetMove = 0,
            _this = this;

        clearInterval(idSetInterval);
        if (wrapperId) {
            wrapperId.removeEventListener('click', boundThisHandleEvent);
            wrapperId.removeEventListener('mouseout', boundThisReturnMove);
        }

        activeItems.forEach(item => {
            item.style.left = `${offsetMove * widthItemSlider - widthItemSlider}px`;
            item.style.right = 'auto';
            offsetMove += 1;
        });

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = true;
            _this.createCarouselItem(direction);
            wrapperId.addEventListener('click', boundThisHandleEvent);
            wrapperId.addEventListener('mouseout', boundThisReturnMove);
        }, 1000);

        idSetInterval = setInterval(this.moveLeft.bind(_this), 2200);
    }

    this.stopMove = function stopMove(e) {
        let itemClass = e.target.classList;

        if (itemClass[1] === 'testimonials__carousel-item--image') {
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
            'testimonials__button--right': boundThisMoveLeft
        }

        events[buttonEventClass]();
    }

    this.listener = function listener() {
        this.createCarouselItem();
        this.createCarouselItem();
        let wrapperId = document.getElementById('testimonials__wrapper');

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

createSectionTestimonials();

function InheritanceClassCarousel() {
    ClassCarousel.apply(this, arguments);

    let extListener = this.listener;
    let idSetInterval;

    // additional methods turn item by click/DoubleClick
    this.extendListener = function () {
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

let moveCarouselOneItem = new InheritanceClassCarousel();

moveCarouselOneItem.extendListener();


/*function Klient() {
    User.apply(this, arguments); //функциональное наследование
    let newGetFullName = this.getFullName; // сохраняем родительский метод
    this.getName = function () {
        console.log('Дополнительная функциональность может быть вместо этих строк')
        return newGetFullName.apply(this, arguments); // используем родительский метод
    };
}*/

/*************************************************************************/
/*************************************************************************/
/*************************************************************************/




