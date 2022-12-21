let jsonResponse;
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

function jsonMovie() {
    let request = new XMLHttpRequest();

    request.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=48c5e7a8ab1705fe359b85bfab16d6e0", true);

    request.onload = function () {

        if (request.status !== 200) {
            console.log(request.status);
            console.log(request.status + ': ' + request.statusText);
        } else {
            jsonResponse = JSON.parse(request.responseText);
            console.log(jsonResponse);
            idItems = jsonResponse.results[0].id;
            jsonPdp(idItems);
        }
    };

    request.onerror = function () {
        console.log('error', request.response);
    };

    request.send();
}

function jsonPdp(idItems) {
    let request = new XMLHttpRequest();
    request.open("GET", `https://api.themoviedb.org/3/movie/${idItems}?api_key=48c5e7a8ab1705fe359b85bfab16d6e0`, true);

    request.onload = function () {

        if (request.status !== 200) {
            console.log(request.status);
            console.log(request.status + ': ' + request.statusText);
        } else {
            let jsonResponsePdp = JSON.parse(request.responseText);
            console.log('responsePdp', jsonResponsePdp);
            createBlogPage(jsonResponsePdp);
        }
    };

    request.onerror = function () {
        console.log('error', request.response);
    };

    request.send();
}

function createTag(tagName, className_, text = '') {
    let elem;

    elem = document.createElement(`${tagName}`);
    elem.className = `${className_}`;
    elem.innerText = `${text}`
    return elem;
}

function createBlogPage(jsonResponsePdp) {
    let baseElem = document.getElementById('blogContainer');
    let fragment = new DocumentFragment();
    let elem, elemChild, elemChild2, elemChild3, elemChild4, elemChild5;
    let baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    let jsonResponseMock = jsonMock();

    //!*** create section with video content ***
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media post__media--video');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', baseUrl + jsonResponse.results[0].backdrop_path);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponseMock.pages[1].posts[0].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', baseUrl + jsonResponse.results[0].poster_path);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponsePdp.production_companies[0].name);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.results[0].release_date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.results[0].vote_count);
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
    elemChild2 = createTag('h2', 'post__title', jsonResponse.results[0].original_title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.results[0].overview);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //!*** create section with musical content ***
    fragment = new DocumentFragment();
    elem = createTag('article', 'post');

    elemChild = createTag('section', 'post__media');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', baseUrl + jsonResponse.results[1].backdrop_path);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponseMock.pages[1].posts[1].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', baseUrl + jsonResponse.results[1].poster_path);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.results[1].original_title);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.results[1].release_date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.results[1].vote_count);
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
    elemChild2 = createTag('h2', 'post__title', jsonResponse.results[1].original_title);
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


    elemChild2 = createTag('p', 'post__context', jsonResponse.results[1].overview);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //!*** create section with picture content ***
    fragment = new DocumentFragment();
    elem = createTag('article', 'post');
    elemChild = createTag('section', 'post__media');
    elemChild2 = createTag('img', 'post__media-img');
    elemChild2.setAttribute('src', baseUrl + jsonResponse.results[2].backdrop_path);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__type');
    elemChild3 = createTag('img', 'post__type-img');
    elemChild3.setAttribute('src', jsonResponseMock.pages[1].posts[2].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', baseUrl + jsonResponse.results[2].poster_path);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.results[2].original_title);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.results[2].release_date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.results[2].vote_count);
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
    elemChild2 = createTag('h2', 'post__title', jsonResponse.results[2].original_title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.results[2].overview);
    elemChild.append(elemChild2);
    elemChild2 = createTag('button', 'read-more', 'Read more');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //!*** create section with document content ***
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
    elemChild3.setAttribute('src', jsonResponseMock.pages[1].posts[3].mediaType);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', baseUrl + jsonResponse.results[3].poster_path);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post__information--description');
    elemChild3 = createTag('div', 'post__information__name', jsonResponse.results[3].original_title);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information-details--date', jsonResponse.results[3].release_date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.results[3].vote_count);
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
    elemChild2 = createTag('h2', 'post__title', jsonResponse.results[3].original_title);
    elemChild.append(elemChild2);
    elemChild2 = createTag('p', 'post__context', jsonResponse.results[3].overview);
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

    //!*** create section footer ***
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
    elemChild = createTag('div', 'footer__logo', 'BlogWorld');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__copyright', '©2019 All Rights Reserved.');
    elem.append(elemChild);
    elemChild = createTag('div', 'footer__date-wrapper');
    elemChild2 = createTag('div', 'footer__clock');
    elemChild2.setAttribute('id', 'clock');
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'footer__date');
    elemChild2.setAttribute('id', 'date');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem = document.getElementById('footer');
    baseElem.prepend(fragment);
    return baseElem;
}

jsonMovie();