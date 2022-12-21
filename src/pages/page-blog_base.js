// https://run.mocky.io/v3/efd713de-54da-4ce0-87ec-b8a6b7129399
function jsonMock() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://run.mocky.io/v3/efd713de-54da-4ce0-87ec-b8a6b7129399", false);
    request.send();
    if (request.status !== 200) {
        console.log(request.status + ': ' + request.statusText);
    } else {
        return JSON.parse(request.responseText);
    }
}

function createTag(tagName, className_, text = '') {
    let elem;

    elem = document.createElement(`${tagName}`);
    elem.className = `${className_}`;
    elem.innerText = `${text}`
    return elem;
}

function createBlogPage() {
    let baseElem = document.getElementById('blog');
    let fragment = new DocumentFragment();
    let elem, elemChild, elemChild2, elemChild3, elemChild4, elemChild5;
    let jsonResponse = jsonMock();

    //*** create section with video content ***
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media post__media--video');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', jsonResponse.pages[1].posts[0].media);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponse.pages[1].posts[0].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src',  jsonResponse.pages[1].posts[0].avatar);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.pages[1].posts[0].name);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.pages[1].posts[0].postDate);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', jsonResponse.pages[1].posts[0].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.pages[1].posts[0].comment);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details__rating');
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--1');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--2');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--3');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--4');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--5');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('h2', 'post__title', jsonResponse.pages[1].posts[0].title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.pages[1].posts[0].text);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create section with musical content ***
    fragment = new DocumentFragment();
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', jsonResponse.pages[1].posts[1].media);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponse.pages[1].posts[1].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', jsonResponse.pages[1].posts[1].avatar);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.pages[1].posts[1].name);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.pages[1].posts[1].postDate);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', jsonResponse.pages[1].posts[1].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.pages[1].posts[1].comment);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details__rating');
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--1');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--2');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--3');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--4');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--5');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('h2', 'post__title', jsonResponse.pages[1].posts[1].title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('audio', 'post__audio-file');
    elemChild2.setAttribute('controls', '');
    elemChild3 = createTag('source', '');
    elemChild3.setAttribute('src', '#');
    elemChild3.setAttribute('type', 'audio/ogg');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('source', '');
    elemChild3.setAttribute('src', '#');
    elemChild3.setAttribute('type', 'audio/mpeg');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.pages[1].posts[1].text);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create section with picture content ***
    fragment = new DocumentFragment();
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', jsonResponse.pages[1].posts[2].media);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponse.pages[1].posts[2].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src',  jsonResponse.pages[1].posts[2].avatar);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.pages[1].posts[2].name);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.pages[1].posts[2].postDate);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', jsonResponse.pages[1].posts[2].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.pages[1].posts[2].comment);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details__rating');
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--1');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--2');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--3');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--4');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--5');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('h2', 'post__title', jsonResponse.pages[1].posts[2].title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.pages[1].posts[2].text);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create section with document content ***
    fragment = new DocumentFragment();
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media post__media--text');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', '#');
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponse.pages[1].posts[3].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', jsonResponse.pages[1].posts[3].avatar);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.pages[1].posts[3].name);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.pages[1].posts[3].postDate);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', jsonResponse.pages[1].posts[3].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.pages[1].posts[3].comment);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details__rating');
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--1');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--2');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--3');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--4');
    elemChild4.append(elemChild5);
    elemChild5 = createTag('div', 'post__information-details__rating-item post__information-details__rating-item--5');
    elemChild4.append(elemChild5);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);


    elemChild2 = createTag('h2', 'post__title', jsonResponse.pages[1].posts[3].title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.pages[1].posts[3].text);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('div', 'blog__read-more');
    elemChild = createTag('button', 'read-more', 'Read more');
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create section footer ***
    fragment = new DocumentFragment();
    elem = createTag('div', 'footer__container container');
    elemChild = createTag('div', 'footer__social-block');
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--facebook');
    elemChild2.setAttribute('href', 'https://www.facebook.com/');
    elemChild2.setAttribute('target', '_blank');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--instagram');
    elemChild2.setAttribute('href', 'https://www.instagram.com');
    elemChild2.setAttribute('target', '_blank');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'footer__social-block__item footer__social-block__item--dribble');
    elemChild2.setAttribute('href', 'https://dribbble.com');
    elemChild2.setAttribute('target', '_blank');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__logo','BlogWorld');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__copyright','©2019 All Rights Reserved.');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__date-wrapper');
    elemChild2 = createTag('span', 'footer__clock');
    elemChild2.setAttribute('id','clock');
    elemChild.append(elemChild2);

    elemChild2 = createTag('span', 'footer__clock--hours');
    elemChild2.setAttribute('id','clock-hours');
    elemChild.append(elemChild2);

    elemChild2 = createTag('span', 'footer__clock--minutes');
    elemChild2.setAttribute('id','clock-minutes');
    elemChild.append(elemChild2);

    elemChild2 = createTag('span', 'footer__clock--seconds');
    elemChild2.setAttribute('id','clock-seconds');
    elemChild.append(elemChild2);

    elemChild2 = createTag('span', 'footer__weekDay');
    elemChild2.setAttribute('id','weekDay');
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

createBlogPage();
