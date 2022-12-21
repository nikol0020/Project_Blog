// json mock https://run.mocky.io/v3/ac6cd6c6-51e3-41d2-8163-417a1534f953
function jsonMock() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://run.mocky.io/v3/ac6cd6c6-51e3-41d2-8163-417a1534f953", false);
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
    let baseElem = document.getElementById('post');
    let fragment = new DocumentFragment();
    let elem, elemChild, elemChild2, elemChild3, elemChild4, elemChild5;
    let jsonResponse = jsonMock();
    console.log(jsonResponse.pages[2].title);


//*** create post content ***
    elem = createTag('article', 'post');
    elemChild = createTag('h1', 'page-title--main', jsonResponse.pages[2].title);
    elem.append(elemChild);
    elemChild = createTag('section', 'post__article');
    elemChild2 = createTag('div', 'post__information');
    elemChild3 = createTag('div', 'post__information__avatar');
    elemChild4 = createTag('img', 'post__information__avatar--img');
    elemChild4.setAttribute('src', jsonResponse.pages[2].avatar);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information--description');
    elemChild4 = createTag('div', 'post__information__name', jsonResponse.pages[2].name);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__information-details');
    elemChild4 = createTag('div', 'post__information--date', jsonResponse.pages[2].postDate);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--duration', jsonResponse.pages[2].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post__information-details--comment', jsonResponse.pages[2].comments);
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
    elemChild2 = createTag('div', 'post__media');
    elemChild3 = createTag('img', 'post__media-img');
    elemChild3.setAttribute('src', jsonResponse.pages[2].media);
    elemChild2.append(elemChild3);
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
    elemChild2 = createTag('section', 'post__section');
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[0].sectionText[0]);
    elemChild4 = createTag('b', 'post__content', jsonResponse.pages[2].text[0].sectionText[1]);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('span', 'post__content', jsonResponse.pages[2].text[0].sectionText[2]);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[0].sectionText[3]);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[0].sectionText[4]);
    elemChild4 = createTag('b', 'post__content', jsonResponse.pages[2].text[0].sectionText[5]);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('span', 'post__content', jsonResponse.pages[2].text[0].sectionText[6]);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('section', 'post__section');
    elemChild3 = createTag('h2', 'post__section-title', jsonResponse.pages[2].text[1].sectionTitle);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[1].sectionText[0]);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[1].sectionText[1]);
    elemChild4 = createTag('s', 'post__content', jsonResponse.pages[2].text[1].sectionText[2]);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('span', 'post__content', jsonResponse.pages[2].text[1].sectionText[3]);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content--mark', '');
    elemChild4 = createTag('b', 'post__content', jsonResponse.pages[2].text[1].sectionText[4]);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('span', 'post__content', jsonResponse.pages[2].text[1].sectionText[5]);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('section', 'post__section');
    elemChild3 = createTag('h2', 'post__section-title', jsonResponse.pages[2].text[2].sectionTitle);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('p', 'post__content', jsonResponse.pages[2].text[2].sectionText[0]);
    elemChild4 = createTag('a', 'post__content--replace', jsonResponse.pages[2].text[2].sectionText[1]);
    elemChild4.setAttribute('src', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('span', 'post__content', jsonResponse.pages[2].text[2].sectionText[2]);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild2 = createTag('section', 'post__social');
    elemChild3 = createTag('div', 'post__social--like');
    elemChild4 = createTag('a', 'post__social--like-qty', jsonResponse.pages[2].likes);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post__social-block');
    elemChild4 = createTag('a', 'post__social-block__item post__social-block__item--facebook');
    elemChild4.setAttribute('href', '../images/icon/icon-facebook.svg');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post__social-block__item post__social-block__item--instagram');
    elemChild4.setAttribute('href', '../images/icon/icon-instagram.svg');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post__social-block__item post__social-block__item--dribble');
    elemChild4.setAttribute('href', '../images/icon/icon-dribble.svg');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create aside content ***
    baseElem = document.getElementById('post-aside');
    fragment = new DocumentFragment();
    elem = createTag('div', 'post-aside__latest-post');
    elemChild = createTag('h2', 'post-aside__title', jsonResponse.pages[2].nameGroupAside[0]);
    elem.append(elemChild);
    elemChild = createTag('div', 'post-aside__latest-post-item');
    elemChild2 = createTag('div', 'post-aside__latest-post-item__image');
    elemChild3 = createTag('img', 'post-aside__latest-post-item-image--1');
    elemChild3.setAttribute('src', jsonResponse.pages[2].latestPosts[0].image);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post-aside__latest-post-item__information');
    elemChild3 = createTag('h3', 'post-aside__latest-post-item__title', jsonResponse.pages[2].latestPosts[0].title);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__latest-post-item__information-details');
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--date', jsonResponse.pages[2].latestPosts[0].date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--duration', jsonResponse.pages[2].latestPosts[0].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--comment', jsonResponse.pages[2].latestPosts[0].comments);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('div', 'post-aside__latest-post-item');
    elemChild2 = createTag('div', 'post-aside__latest-post-item__image');
    elemChild3 = createTag('img', 'post-aside__latest-post-item__image--2');
    elemChild3.setAttribute('src', jsonResponse.pages[2].latestPosts[1].image);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post-aside__latest-post-item__information');
    elemChild3 = createTag('h3', 'post-aside__latest-post-item__title', jsonResponse.pages[2].latestPosts[1].title);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__latest-post-item__information-details');
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--date', jsonResponse.pages[2].latestPosts[1].date);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--duration', jsonResponse.pages[2].latestPosts[1].duration);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div', 'post-aside__latest-post-item__information-details--comment', jsonResponse.pages[2].latestPosts[1].comments);
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    elemChild = createTag('button', 'post-aside__latest-post-button--more-post', 'More posts');
    elem.append(elemChild);
    fragment.append(elem);

    elem = createTag('div', 'post-aside__categories');
    elemChild = createTag('h2', 'post-aside__title', jsonResponse.pages[2].nameGroupAside[1]);
    elem.append(elemChild);
    elemChild = createTag('div', 'post-aside__categories-container');
    elemChild2 = createTag('div', 'post-aside__categories-item');
    elemChild3 = createTag('input', 'post-aside__categories-item-input');
    elemChild3.setAttribute('type', 'checkbox');
    elemChild3.setAttribute('id', 'item-title_1');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('label', 'post-aside__categories-item-title', jsonResponse.pages[2].categories[0].nameCategories);//Restaurant food
    elemChild3.setAttribute('for', 'item-title_1');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__categories-item-list');
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[0].items[0]);
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item',  jsonResponse.pages[2].categories[0].items[1]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item',  jsonResponse.pages[2].categories[0].items[2]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);

    elemChild2 = createTag('div', 'post-aside__categories-item');
    elemChild3 = createTag('input', 'post-aside__categories-item-input');
    elemChild3.setAttribute('type', 'checkbox');
    elemChild3.setAttribute('id', 'item-title_2');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('label', 'post-aside__categories-item-title', jsonResponse.pages[2].categories[1].nameCategories);//Travel news
    elemChild3.setAttribute('for', 'item-title_2');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__categories-item-list');
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[1].items[0]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[1].items[1]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[1].items[2]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);

    elemChild2 = createTag('div', 'post-aside__categories-item');
    elemChild3 = createTag('input', 'post-aside__categories-item-input');
    elemChild3.setAttribute('type', 'checkbox');
    elemChild3.setAttribute('id', 'item-title_3');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('label', 'post-aside__categories-item-title', jsonResponse.pages[2].categories[2].nameCategories);//Modern technology
    elemChild3.setAttribute('for', 'item-title_3');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__categories-item-list');
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[0]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[1]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[2]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[3]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[4]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[2].items[5]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);

    elemChild2 = createTag('div', 'post-aside__categories-item');
    elemChild3 = createTag('input', 'post-aside__categories-item-input');
    elemChild3.setAttribute('type', 'checkbox');
    elemChild3.setAttribute('id', 'item-title_4');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('label', 'post-aside__categories-item-title', jsonResponse.pages[2].categories[2].nameCategories);//Product
    elemChild3.setAttribute('for', 'item-title_4');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__categories-item-list');
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[3].items[0]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[3].items[1]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[3].items[2]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[3].items[3]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);

    elemChild2 = createTag('div', 'post-aside__categories-item');
    elemChild3 = createTag('input', 'post-aside__categories-item-input');
    elemChild3.setAttribute('type', 'checkbox');
    elemChild3.setAttribute('id', 'item-title_5');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('label', 'post-aside__categories-item-title', jsonResponse.pages[2].categories[4].nameCategories);//Inspiration
    elemChild3.setAttribute('for', 'item-title_5');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-aside__categories-item-list');
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[4].items[0]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('a', 'post-aside__categories-item-list--item', jsonResponse.pages[2].categories[4].items[1]);
    elemChild4.setAttribute('href', '#');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);


    elem = createTag('div', 'post-aside__tags');
    elemChild = createTag('h2', 'post-aside__title', jsonResponse.pages[2].nameGroupAside[2]); //Tags
    elem.append(elemChild);
    elemChild = createTag('div', 'post-aside__tags-items');

    for (let i=0; i<jsonResponse.pages[2].tags.length; i++) {
        elemChild2 = createTag('a', 'post-aside__tags-item', jsonResponse.pages[2].tags[i]);
        elemChild2.setAttribute('href', '#');
        elemChild.append(elemChild2);
    }

    elem.append(elemChild);
    fragment.append(elem);
    baseElem.append(fragment);

    //*** create review content ***
    baseElem = document.getElementById('post-review');
    fragment = new DocumentFragment();
    elem = createTag('h2', 'post-review__title', 'Reviews');
    fragment.append(elem);
    elem = createTag('div', 'post-review__container');

    elemChild = createTag('div', 'post-review__item post-review__comment-1');
    elemChild2 = createTag('div', 'post-review__item-wrapper');
    elemChild3 = createTag('h3', 'post-review__item-title', 'Jack Johnson');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-information-details__rating');
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--1');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--2');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--3');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--4');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--5');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-duration', '11 min ago');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post-review__item-text', 'Knowledge nay estimable questions repulsive daughters boy. Solicitude' +
        '                gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced…');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'post-review__item-link--read-more', 'Read more');
    elemChild2.setAttribute('href', '#');
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild = createTag('div', 'post-review__item post-review__comment-2');
    elemChild2 = createTag('div', 'post-review__item-wrapper');
    elemChild3 = createTag('h3', 'post-review__item-title', 'Emma Garcia');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-information-details__rating');
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--1');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--2');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--3');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--4');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--5');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-duration', '3 days ago');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post-review__item-text', 'Dummy text refers to the bits of content that are used to fill a website' +
        '                mock-up. This text helps web designers better envision how the website will look as a finished product.' +
        '                in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all' +
        '                ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or' +
        '                took answered him be right He other in about check has situation fine you held against found am be Nay' +
        '                entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might' +
        '                remarkably Rich why need pianoforte ask get face prudent it so Evil');
    elemChild.append(elemChild2);
    elemChild2 = createTag('a', 'post-review__item-link--read-less', 'Read less');
    elemChild2.setAttribute('href', '#');
    elemChild.append(elemChild2);
    elem.append(elemChild);

    elemChild = createTag('div', 'post-review__item post-review__comment-3');
    elemChild2 = createTag('div', 'post-review__item-wrapper');
    elemChild3 = createTag('h3', 'post-review__item-title', 'Ann Moore');
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-information-details__rating');
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--1');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--2');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--3');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--4');
    elemChild3.append(elemChild4);
    elemChild4 = createTag('div','post-review__item-information-details__rating-item post__information-details__rating-item--5');
    elemChild3.append(elemChild4);
    elemChild2.append(elemChild3);
    elemChild3 = createTag('div', 'post-review__item-duration', 'a week ago');
    elemChild2.append(elemChild3);
    elemChild.append(elemChild2);
    elemChild2 = createTag('div', 'post-review__item-text', 'Any delicate you how kindness horrible outlived servants. You high bed' +
        '                wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Polite do' +
        '                object at passed it is.');
    elemChild.append(elemChild2);
    elem.append(elemChild);
    fragment.append(elem);
    elem = createTag('button','post-review__more-comments', 'More comments');
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