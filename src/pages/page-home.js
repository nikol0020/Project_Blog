// https://run.mocky.io/v3/efd713de-54da-4ce0-87ec-b8a6b7129399
function jsonMock() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://run.mocky.io/v3/efd713de-54da-4ce0-87ec-b8a6b7129399", false);
    request.send();
    if (request.status !== 200) {
        console.log(request.status + ': ' + request.statusText);
    } else {
        return JSON.parse(request.responseText);
        // let jsonResponse = JSON.parse(request.responseText);
        // console.log( jsonResponse );
        // console.log(jsonResponse.pages[0].section[0].title);
    }
}

function deleteHtmlBlock(id = '') {
    let htmlContent = document.getElementById(`${id}`);
    htmlContent.innerHTML = '';
    return htmlContent;
}

function createTag(tagName, className_, text = '') {
    let elem;

    elem = document.createElement(`${tagName}`);
    elem.className = `${className_}`;
    elem.innerText = `${text}`
    return elem;
}

function createBannerPrologBlock() {
  //  let baseElem = deleteHtmlBlock('banner-prolog');
    let baseElem = document.getElementById('banner-prolog');
    let fragment = new DocumentFragment();
    let elem;
    let elemChild, elemChild2, elemChild3, elemChild4, elemChild5;
    let jsonResponse = jsonMock();
    console.log(jsonResponse);
    console.log(jsonResponse.pages[0].section[0].learnMore);

    //*** create section banner-prolog ***

    elem = createTag('h2', 'banner-prolog__title', jsonResponse.pages[0].section[0].title);
    fragment.append(elem);
    elem = createTag('p', 'banner-prolog__text', jsonResponse.pages[0].section[0].text);
    fragment.append(elem);
    elem = createTag('div', 'banner-prolog__block-buttons');
    fragment.append(elem);
    elemChild = createTag('button', 'banner-prolog__button--explore', jsonResponse.pages[0].section[0].explore);
    elem.append(elemChild);
    elemChild = createTag('button', 'banner-prolog__button--learn-more', jsonResponse.pages[0].section[0].learnMore);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.prepend(fragment);

    //*** create section about-us ***

    //baseElem = deleteHtmlBlock('about-us');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'about-us__title', 'About us');
    fragment.append(elem);
    elem = createTag('h5', 'about-us__text', 'This is who we are - or at least who we strive to be…');
    fragment.append(elem);
    elem = createTag('div', 'about-us__wrapper', '');
    fragment.append(elem);
    elemChild = createTag('div', 'about-us__items', '');
    elem.append(elemChild);
    elemChild2 = createTag('figure', 'about-us__item about-us__item--typography', '');
    elemChild3 = createTag('img', '', '');
    elemChild3.setAttribute('src', '../images/icon/icon-typography.svg');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('figcaption', '', 'Typography');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);

    elemChild2 = createTag('figure', 'about-us__item about-us__item--icon-set', '');
    elemChild3 = createTag('img', '', '');
    elemChild3.setAttribute('src', '../images/icon/icon-iconset.svg');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('figcaption', '', 'Icon set');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);

    elemChild2 = createTag('figure', 'about-us__item about-us__item--accurate', '');
    elemChild3 = createTag('img', '', '');
    elemChild3.setAttribute('src', '../images/icon/icon-accurate.svg');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('figcaption', '', 'Accurate');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    elemChild = createTag('div', 'about-us__video', '');
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('about-us');
    baseElem.prepend(fragment);

    //*** create section latest-post ***

  //  baseElem = deleteHtmlBlock('latest-post');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'latest-post__title', 'Latest posts');
    fragment.append(elem);
    elem = createTag('h5', 'latest-post__text', 'Information is a source of learning.' +
        '            But unless it is organized, processed and available to the right people');
    fragment.append(elem);
    elem = createTag('div', 'latest-post__wrapper container', '');

    elemChild = createTag('figure', 'latest-post__article', '');
    elemChild2 = createTag('img', 'latest-post__article-img', '');
    elemChild2.setAttribute('src', '../images/img/img-post1.png');
    elemChild.append(elemChild2);
    elemChild2 = createTag('figcaption', 'latest-post__article-post', '');
    elemChild3 = createTag('h2', 'latest-post__article-title', 'In the Future We Will All Live in Star Wars');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'latest-post__article-text', 'The thing you’re doing now, reading prose on a screen, is going' +
        '                        out of fashion. The defining narrative of our online moment concerns the decline of text, and' +
        '                        the exploding reach and power of audio and video…');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'latest-post__information', '');
    elemChild4 = createTag('div', 'latest-post__information-details', '');
    elemChild5 = createTag('div', 'latest-post__information-details--date', '20 oct, 2019');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--duration', '10 min read');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--comment', ' 11');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild = createTag('figure', 'latest-post__article', '');
    elemChild2 = createTag('img', 'latest-post__article-img', '');
    elemChild2.setAttribute('src', '../images/img/img-post2h.png');
    elemChild.append(elemChild2);
    elemChild2 = createTag('figcaption', 'latest-post__article-post', '');
    elemChild3 = createTag('h2', 'latest-post__article-title', 'Rubik’s Cube? No, Robotics and AI are…');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'latest-post__article-text', 'In other words, I will try to de-hype the crowd about the recent development in robotics. Concretely, OpenAI has claimed some pretty amazing results with learning to solve the Rubik’s cube with a robotic hand…');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'latest-post__information', '');
    elemChild4 = createTag('div', 'latest-post__information-details', '');
    elemChild5 = createTag('div', 'latest-post__information-details--date', '11 oct, 2019');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--duration', '7 min read');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--comment', ' 19');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild = createTag('figure', 'latest-post__article', '');
    elemChild2 = createTag('img', 'latest-post__article-img', '');
    elemChild2.setAttribute('src', '../images/img/img-post3h.png');
    elemChild.append(elemChild2);
    elemChild2 = createTag('figcaption', 'latest-post__article-post', '');
    elemChild3 = createTag('h2', 'latest-post__article-title', 'How the Internet of Things will Transfo…');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'latest-post__article-text', 'The Internet of Things (IoT) promises to be the most important technological development for consumers since the advent of the smartphone. Experts believe that this collection of internet-connected technolog…');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'latest-post__information', '');
    elemChild4 = createTag('div', 'latest-post__information-details', '');
    elemChild5 = createTag('div', 'latest-post__information-details--date', '28 sep, 2019');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--duration', '16 min read');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'latest-post__information-details--comment', ' 41');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('latest-post');
    baseElem.prepend(fragment);


    //*** create section latest-portfolio ***

    //  baseElem = deleteHtmlBlock('portfolio');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'latest-portfolio__title', 'Latest portfolio');
    fragment.append(elem);
    elem = createTag('h5', 'latest-portfolio__text', 'Put there articles successfully special warrant submit agree what along then');
    fragment.append(elem);

    // commented block with carousel items
    /*    elem = createTag('div', 'latest-portfolio__wrapper carousel__wrapper', '');

        elemChild = createTag('div', 'latest-portfolio__carousel carousel__container', '');
        elemChild.setAttribute('id','carousel');
        elemChild2 = createTag('div','item','');

        elemChild2.setAttribute('id','items-left');
        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hc-img1.png');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','Art Ocean');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','Photography, art, nature');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hc-img2.png');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','City guide');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','Photography, city, way');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hc-img3.png');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','Mountains');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','Art, hiking');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);

        elemChild2.setAttribute('id','items-center');
        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/lake.jpg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hedgehog.jpg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/mountains.jpg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);

        elemChild2.setAttribute('id','items-right');
        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hsl4.jpeg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hsl5.jpeg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);

        elemChild3 = createTag('figure','latest-portfolio__item carousel__item','');
        elemChild4 = createTag('img','latest-portfolio__item-img','');
        elemChild4.setAttribute('src','../images/img/hsl8.jpeg');
        elemChild3.append(elemChild4);
        elemChild4 = createTag('figcaption','latest-portfolio__item-theme','');
        elemChild5 = createTag('h2','latest-portfolio__item-theme-title','');
        elemChild4.append(elemChild5);
        elemChild5 = createTag('p','latest-portfolio__item-theme-text','');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        elem.append(elemChild);
        fragment.append(elem);*/
    baseElem = document.getElementById('portfolio');
    baseElem.prepend(fragment);

    //*** create section testimonials ***

    //  baseElem = deleteHtmlBlock('testimonials');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'testimonials__title', 'Testimonials');
    fragment.append(elem);
    elem = createTag('div', 'testimonials__wrapper');
    elemChild = createTag('button', 'testimonials__button testimonials__button--left');
    elem.append(elemChild);
    elemChild = createTag('div', 'testimonials__carousel');
    elemChild2 = createTag('figure', 'testimonials__carousel-item');
    elemChild3 = createTag('figcaption', 'testimonials__carousel-item-post');
    elemChild4 = createTag('p', 'testimonials__carousel-item-post--text');
    elemChild5 = createTag('q', '', 'We move at a fast pace. I’m always working on' +
        '                            something. I am excited about it!');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('p', 'testimonials__carousel-item-post--name', 'Martin Oda');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('p', 'testimonials__carousel-item-post--specialization', 'Product designer');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('img', 'testimonials__carousel-item--image', '');
    elemChild3.setAttribute('src', '../images/img/person-testimonial.png');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('button', 'testimonials__button testimonials__button--right');
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('testimonials');
    baseElem.prepend(fragment);

    //*** create section contact-us ***

    //  baseElem = deleteHtmlBlock('contact-us');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'contact-us__title', 'Contact us');
    fragment.append(elem);
    elem = createTag('h5', 'contact-us__text', 'Put there articles successfully special warrant submit agree what along then');
    fragment.append(elem);
    elem = createTag('div', 'footer__social-block container');
    elemChild = createTag('a', 'footer__social-block__item footer__social-block__item--facebook');
    elemChild.setAttribute('href', '../images/icon/icon-facebook.svg');
    elem.append(elemChild);
    elemChild = createTag('a', 'footer__social-block__item footer__social-block__item--instagram');
    elemChild.setAttribute('href', '../images/icon/icon-instagram.svg');
    elem.append(elemChild);
    elemChild = createTag('a', 'footer__social-block__item footer__social-block__item--dribble');
    elemChild.setAttribute('href', '../images/icon/icon-dribble.svg');
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('div', 'contact-us__wrapper');
    elemChild = createTag('div', 'contact-us__next-step container');
    elemChild2 = createTag('div', 'contact-us__next-step-block');
    elemChild3 = createTag('h2', 'contact-us__next-step-title', 'What will be next step?');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('ol', 'contact-us__list', '');
    elemChild4 = createTag('li', 'contact-us__list-item', '');
    elemChild5 = createTag('h4', 'contact-us__list-item--title', 'We’ll prepare a proposal');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('p', 'contact-us__list-item--text', 'Required scope, timeline and apr. price will be included' +
        '                            if you provide us with detail information about a project.');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('li', 'contact-us__list-item', '');
    elemChild5 = createTag('h4', 'contact-us__list-item--title', 'Together we discuss it');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('p', 'contact-us__list-item--text', 'Let’s get acquainted and discuss all the possible variant and options. Google Hangouts or Skype usually wirks great.');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('li', 'contact-us__list-item', '');
    elemChild5 = createTag('h4', 'contact-us__list-item--title', 'Let’s start building');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('p', 'contact-us__list-item--text', 'When the contract is signed and all goals are set we can' +
        '                            start the first sprint.');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild2 = createTag('div', 'contact-us__information');
    elemChild3 = createTag('h3', 'contact-us__information-title', 'Write us a few words about your project and we will prepare' +
        '                    proposal for you within 24 hours');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('form', 'contact-us__form', '');
    elemChild3.setAttribute('id', 'form');
    elemChild3.setAttribute('action', '#');
    elemChild2.append(elemChild3);
    elemChild4 = createTag('fieldset', '');
    elemChild5 = createTag('label', 'contact-us__form-label', 'Your name');
    elemChild5.setAttribute('for', 'name');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('input', 'contact-us__form-input contact-us__form-input--name', '');
    elemChild5.setAttribute('id', 'name');
    elemChild5.setAttribute('type', 'text');
    elemChild5.setAttribute('required', '');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('label', 'contact-us__form-label', 'Email');
    elemChild5.setAttribute('for', 'email');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('input', 'contact-us__form-input contact-us__form-input--email', '');
    elemChild5.setAttribute('id', 'email');
    elemChild5.setAttribute('type', 'email');
    elemChild5.setAttribute('required', '');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('label', 'contact-us__form-label', 'Password');
    elemChild5.setAttribute('for', 'email');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('input', 'contact-us__form-input contact-us__form-input--password', '');
    elemChild5.setAttribute('id', 'password');
    elemChild5.setAttribute('type', 'password');
    elemChild5.setAttribute('minlength', '8');
    elemChild5.setAttribute('required', '');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('button', 'contact-us__form-button', 'Send message');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('p', 'contact-us__form-text', 'If you need to have a DNA first, just contact us at');
    elemChild5 = createTag('a', 'contact-us__form-text--link', 'email@gmail.com');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'contact-us__map', '');
    elemChild4 = createTag('img', 'contact-us__map-image', '');
    elemChild4.setAttribute('src','../images/img/map.png');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('contact-us');
    baseElem.prepend(fragment);

    //*** create section footer ***

    //  baseElem = deleteHtmlBlock('footer');
    fragment = new DocumentFragment();
    elem = createTag('div', 'footer__container container');
    elemChild = createTag('div', 'footer__social-block');
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--facebook');
    elemChild2.setAttribute('href', '../images/icon/icon-facebook.svg');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--instagram');
    elemChild2.setAttribute('href', '../images/icon/icon-instagram.svg');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--dribble');
    elemChild2.setAttribute('href', '../images/icon/icon-dribble.svg');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__logo','BlogWorld');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__copyright','©2019 All Rights Reserved.');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__date-wrapper');
    elemChild2 = createTag('div', 'footer__clock');
    elemChild2.setAttribute('id','clock');
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'footer__date');
    elemChild2.setAttribute('id','date');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('footer');
    baseElem.prepend(fragment);
    return baseElem;
}

createBannerPrologBlock();



