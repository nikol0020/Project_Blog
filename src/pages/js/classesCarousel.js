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

    moveCarouselOneItem();
}

function moveCarouselOneItem(widthItemSlider = 680) {
    let step = 0;  // шаг слайдера
    let offset = 0; //смещение
    let direction;
    let elem, elemChild;
    let baseElem = document.getElementById('testimonials__carousel');
    let wrapperId = document.getElementById('testimonials__wrapper');
    let idSetInterval;

    function createCarouselItem(direction = false) {
        let imgSrcArray = ['../images/img/testimonialNatImg.png', '../images/img/mountains.jpg', '../images/img/lake.jpg', '../images/img/hsl4.jpeg', '../images/img/hsl5.jpeg', '../images/img/hsl8.jpeg'];
        let j = imgSrcArray.length;
        let fragment = new DocumentFragment();

        elem = createTag('div', 'testimonials__carousel-item');
        elemChild = createTag('img', 'testimonials__carousel-item--image');
        elemChild.setAttribute('src', `${imgSrcArray[step]}`);
        elem.append(elemChild);

        if (direction) {
            elem.style.left = `${offset * widthItemSlider}px`;
        } else {
            elem.style.right = `${offset * widthItemSlider}px`;
        }

        fragment.append(elem);
        baseElem.append(fragment);

        if (step + 1 === j) {
            step = 0;
        } else {
            step++;
        }

        offset = 1;
        return imgSrcArray;
    }

    function right() {
        let activeItems = document.querySelectorAll('.testimonials__carousel-item');
        let offsetMove = 0;

        console.log('rightFunction');
        clearInterval(idSetInterval);
        wrapperId.removeEventListener('click', handleEvent);
        wrapperId.removeEventListener('mouseout', returnDrive);

        activeItems.forEach(item => {
            item.style.right = `${offsetMove * widthItemSlider - widthItemSlider}px`;
            item.style.left = 'auto';
            //   item.style.transform = 'scaleX(-1)';
            offsetMove += 1;
        });

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = false;
            createCarouselItem(direction);
            wrapperId.addEventListener('click', handleEvent);
            wrapperId.addEventListener('mouseout', returnDrive);
        }, 1000);

        idSetInterval = setInterval(right, 2200);
        return idSetInterval;
    }

    function left() {
        let activeItems = document.querySelectorAll('.testimonials__carousel-item');
        let offsetMove = 0;

        console.log('leftFunction');
        clearInterval(idSetInterval);
        wrapperId.removeEventListener('click', handleEvent);
        wrapperId.removeEventListener('mouseout', returnDrive);

        activeItems.forEach(item => {
            item.style.left = `${offsetMove * widthItemSlider - widthItemSlider}px`;
            item.style.right = 'auto';
            // item.style.transform = 'scaleX(-1)';
            offsetMove += 1;
        });

        setTimeout(function () {
            activeItems[0].remove();
            offsetMove = 0;
            direction = true;
            createCarouselItem(direction);
            wrapperId.addEventListener('click', handleEvent);
            wrapperId.addEventListener('mouseout', returnDrive);
        }, 1000);

        idSetInterval = setInterval(left, 2200);
        return idSetInterval;
    }

    function stopMove(e) {
        let itemClass = e.target.classList;

        if (itemClass[0] === 'testimonials__carousel-item--image') {
            //    console.log('stopMove');
            clearInterval(idSetInterval);
            e.stopImmediatePropagation();
        }
    }

    function returnDrive() {
        console.log('returnDrive');
        if (direction) {
            left();
        } else {
            right();
        }
    }

    function handleEvent(e) {
        let buttonEvent = e.target,
            buttonEventClass = buttonEvent.classList[1];

        let events = {
            'testimonials__button--left': right,
            'testimonials__button--right': left
        }

        events[buttonEventClass]();
    }

    wrapperId.addEventListener('click', handleEvent);
    wrapperId.addEventListener('mouseover', stopMove);
    wrapperId.addEventListener('mouseout', returnDrive);
    createCarouselItem();
    createCarouselItem();
}

createSectionTestimonials();
