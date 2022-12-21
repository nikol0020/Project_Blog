class Post {
    #elem;
    jsonResponse;
    jsonResponseMock = this.jsonMock();
    baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    baseElem = document.getElementById('blogContainer');
    paramRequired = 'language=en-US&page=1&include_adult=false&api_key=48c5e7a8ab1705fe359b85bfab16d6e0';
    filter; // person movie = title
    query;
    pnf = 0;
    checkPnf = [];
    maxQuantityMovieOnPage = 4;

    createTag(tagName, className_, text = '') {
        this.#elem = document.createElement(`${tagName}`);
        this.#elem.className = `${className_}`;
        this.#elem.innerText = `${text}`
        return this.#elem;
    }

    jsonMock() {
        let request = new XMLHttpRequest();

        request.open("GET", "https://run.mocky.io/v3/efd713de-54da-4ce0-87ec-b8a6b7129399", false);
        request.send();

        if (request.status !== 200) {
            console.log(request.status + ': ' + request.statusText);
        } else {
            return JSON.parse(request.responseText); //  тип поста
        }
    }

    search(paramRequired) {
        const filterButton = document.getElementById('filters');
        const searchField = document.getElementById('searchField');
        const searchSubmit = document.getElementById('searchSubmit');
        const searchClear = document.getElementById('searchClear');
        let searchValue, filterValue;
        let _this = this;

        function searchClearHandler() {
            searchValue = searchField.value;
            console.log('----searchClearHandler----');

            if (searchValue) {
                searchValue = '';
                return searchField.value = searchValue;
            }
        }

        function searchSubmitHandler() {

            filterValue = filterButton.value;
            searchValue = searchField.value;

            if (searchValue) {
                _this.jsonMovie(paramRequired, filterValue, searchValue);
            }


            console.log('7777777');
            // showPopUp(_this.pnf);
        }

        // function showPopUp(pnf) {
        //     let condPopUp = document.getElementById('elemNotFoundMessage');
        //     let elemHead = document.getElementById('blogContainer');
        //
        //     if (!elemHead.firstChild) {
        //     if (pnf) {
        //         _this.notFoundPopUp();
        //     }

        /*if (elemHead.firstChild && condPopUp) {
            if (condPopUp) {
                condPopUp.remove();
            }
        }*/

        // }

        function keySubmitHandler(e) {
            if (e.key === 'Enter') {
                e.stopPropagation();
                searchSubmitHandler();
            }
        }

        searchClear.addEventListener('click', searchClearHandler);
        searchSubmit.addEventListener('click', searchSubmitHandler);
        searchField.addEventListener('keyup', keySubmitHandler);
    }

    notFoundPopUp() {
        let baseElem = document.getElementById('blogContainer')
        let fragment = new DocumentFragment();
        let elem, elemChild;

        elem = this.createTag('div', 'post__information');
        elem.setAttribute('id', 'elemNotFoundMessage');
        // elem.setAttribute('style', 'zoom: 0.8');
        elemChild = this.createTag('img', 'post__information');
        elemChild.setAttribute('src', '../images/img/fnf.png');

        // elemChild.setAttribute('style', 'margin: 0 auto');
        elem.append(elemChild);
        fragment.append(elem);

        baseElem.append(fragment);
    }

    setLocation(filter, query) {
        let currLocation;

        if (filter === 'person') {
            filter = 'author';  //person
        } else {
            filter = 'title'  //movie
        }

        currLocation = `?${filter}=${query}`;

        try {
            history.pushState(null, null, currLocation);
            return;
        } catch (e) {
        }
        location.hash = currLocation;
    }

    urlParser() {
        // let currentUrl = location.href;  // получить текущий урл со строки состояния
        let queryParam, urlParams;

        queryParam = location.search;  // dates after ?
        urlParams = new URLSearchParams(queryParam); //  создает объект квери параметров

        for (let [filter, query] of urlParams) {
            console.log(`${filter} : ${query}`);
            if (filter === 'author') {
                this.filter = 'person';  //person [0]
                this.query = query;
                document.getElementById('filters').querySelectorAll('option')[0].selected = true;
                document.getElementById('filters').querySelectorAll('option')[1].selected = false;
                document.getElementById('searchField').value = query;
            }
            if (filter === 'title') {
                this.filter = 'movie'  //movie [1]
                this.query = query;
                document.getElementById('filters').querySelectorAll('option')[1].selected = true;
                document.getElementById('filters').querySelectorAll('option')[0].selected = false;
                document.getElementById('searchField').value = query;
            }
        }

        this.jsonMovie(this.paramRequired, this.filter, this.query);
        this.search(this.paramRequired, this.filter, this.query);
    }

    jsonMovie(paramRequired, filter, query) {
        let request = new XMLHttpRequest();
        let idItem, j = 0;

        if (query) {
            console.log('with query');
            this.urlSearch = `https://api.themoviedb.org/3/search/${filter}?${paramRequired}&query=${query}`;
            this.setLocation(filter, query);
            request.open("GET", `${this.urlSearch}`, true);
        } else {
            request.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=48c5e7a8ab1705fe359b85bfab16d6e0", true);
            console.log('without query');
            this.search();
        }

        this.pnf = 0;
        request.send();

        request.onload = () => {
            if (request.status !== 200) {
                console.log(request.status);
                console.log(request.status + ': ' + request.statusText);
                console.log('ERROR');
                this.pnf = 1;
            } else {
                this.jsonResponse = JSON.parse(request.responseText); // json movie
                this.baseElem.innerText = '';
                for (let i = 0; i < this.maxQuantityMovieOnPage; i++) {
                    idItem = this.jsonResponse.results[i].id;
                    // try {
                    //     idItem = this.jsonResponse.results[i].id;
                    // } catch {
                    // }
                    this.jsonPdp(idItem, i, j);
                    if (j < 3) {    // j - п.н. поста для запроса jsonResponseMock mediaType
                        j++;
                    } else {
                        j = 0;
                    }
                }
            }
        };

        request.onerror = () => {
            console.log('error', request.response);
        };
    }

    jsonPdp(idItem, i, j) {
        let jsonResponsePdp;
        let request = new XMLHttpRequest();
        request.open("GET", `https://api.themoviedb.org/3/movie/${idItem}?api_key=48c5e7a8ab1705fe359b85bfab16d6e0`, true);

        request.send();

        request.onload = () => {
            if (request.status !== 200) {
                console.log(request.status);
                console.log(request.status + ': ' + request.statusText);
                this.pnf = 1;
            } else {
                jsonResponsePdp = JSON.parse(request.responseText);
                this.createSectionBlogPage(jsonResponsePdp, i, j);
                this.pnf = 0;
            }

            this.checkPnf.push(this.pnf);
            console.log('222222', this.checkPnf);
            if (!this.checkPnf.includes(0) && ((i + 1) / this.maxQuantityMovieOnPage) === 1) {
                console.log('55555555');
                this.baseElem.innerText = '';
                this.notFoundPopUp();
            }
        };

        request.onerror = () => {
            console.log('error', request.response);
        };
    }

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle = this.createTag('article', 'post');
        let fragment = new DocumentFragment();

        elemArticle.append(this.elemPostInformation(jsonResponsePdp, i, j));
        fragment.append(elemArticle);
        this.baseElem.append(fragment);

        elemArticle.append(this.articleContent(jsonResponsePdp, i));
        this.baseElem.append(elemArticle);

        return elemArticle;
    }

    //elemPostInformation
    elemPostInformation(jsonResponsePdp, i, j) {
        let strUrl = this.baseUrl + this.jsonResponse.results[i].backdrop_path;
        let strUrlPoster = this.baseUrl + this.jsonResponse.results[i].poster_path;
        let fragmentPostInformation = new DocumentFragment();
        let elemChild, elemChild2, elemChild3, elemChild4, elemChild5;

        // type
        elemChild = this.createTag('section', 'post__article');
        elemChild.setAttribute('id', jsonResponsePdp.id);
        elemChild2 = this.createTag('div', 'post__type');
        elemChild3 = this.createTag('img', 'post__type-img');
        elemChild3.setAttribute('src', this.jsonResponseMock.pages[1].posts[j].mediaType);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);

        //information
        elemChild2 = this.createTag('div', 'post__information');
        elemChild3 = this.createTag('div', 'post__information__avatar');
        elemChild4 = this.createTag('img', 'post__information__avatar--img');
        // elemChild4.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].poster_path);
        if (strUrlPoster.includes('undefined') || strUrlPoster.includes('null')) {
            elemChild4.setAttribute('src', '../images/img/fnf.png');
        } else {
            elemChild4.setAttribute('src', `${strUrlPoster}`);
        }
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        elemChild2 = this.createTag('div', 'post__information--description');
        try {
            if (this.jsonResponse.results[i].name) {
                elemChild3 = this.createTag('div', 'post__information__name', this.jsonResponse.results[i].name);
            } else {
                elemChild3 = this.createTag('div', 'post__information__name', jsonResponsePdp.production_companies[0].name);
            }
        } catch {
            elemChild3 = this.createTag('div', 'post__information__name', 'Paramount Pictures');
        }
        elemChild2.append(elemChild3);
        elemChild3 = this.createTag('div', 'post__information-details');
        elemChild4 = this.createTag('div', 'post__information-details--date', this.jsonResponse.results[i].release_date);
        elemChild3.append(elemChild4);
        elemChild4 = this.createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
        elemChild3.append(elemChild4);
        elemChild4 = this.createTag('div', 'post__information-details--comment', this.jsonResponse.results[i].vote_count);
        elemChild3.append(elemChild4);
        elemChild4 = this.createTag('div', 'post__information-details__rating');
        elemChild5 = this.createTag('div', 'post__information-details__rating-item post__information-details__rating-item--1');
        elemChild4.append(elemChild5);
        elemChild5 = this.createTag('div', 'post__information-details__rating-item post__information-details__rating-item--2');
        elemChild4.append(elemChild5);
        elemChild5 = this.createTag('div', 'post__information-details__rating-item post__information-details__rating-item--3');
        elemChild4.append(elemChild5);
        elemChild5 = this.createTag('div', 'post__information-details__rating-item post__information-details__rating-item--4');
        elemChild4.append(elemChild5);
        elemChild5 = this.createTag('div', 'post__information-details__rating-item post__information-details__rating-item--5');
        elemChild4.append(elemChild5);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        fragmentPostInformation.append(elemChild);

        return fragmentPostInformation;
    }

    // postContent
    articleContent(jsonResponsePdp, i) {
        let fragmentArticleContent = new DocumentFragment();
        let elemChild = document.getElementById(`${jsonResponsePdp.id}`);
        let elemChild2;

        elemChild2 = this.createTag('h2', 'post__title', this.jsonResponse.results[i].original_title);
        fragmentArticleContent.append(elemChild2);
        elemChild2 = this.createTag('p', 'post__context', this.jsonResponse.results[i].overview);
        fragmentArticleContent.append(elemChild2);

        // button
        elemChild2 = this.createTag('button', 'read-more', 'Read more');
        fragmentArticleContent.append(elemChild2);
        elemChild.append(fragmentArticleContent);

        return elemChild;
    }
}

class TypeVideo
    extends Post {

    modCreateSectionBlogPage = super.createSectionBlogPage;

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle;

        elemArticle = this.modCreateSectionBlogPage(jsonResponsePdp, i, j);
        elemArticle.prepend(this.elemMediaVideo(jsonResponsePdp, i));
    }

    //mediaVideo
    elemMediaVideo(jsonResponsePdp, i) {
        let strUrl = this.baseUrl + this.jsonResponse.results[i].backdrop_path;
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media--video');
        elemChild2 = this.createTag('img', 'post__media-img');
        if (strUrl.includes('undefined') || strUrl.includes('null')) {
            elemChild2.setAttribute('src', '../images/img/fnf.png');
        } else {
            elemChild2.setAttribute('src', this.baseUrl + `${strUrl}`);
        }
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }
}

class TypePicture extends Post {

    modCreateSectionBlogPage = super.createSectionBlogPage;

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle;

        elemArticle = this.modCreateSectionBlogPage(jsonResponsePdp, i, j);
        elemArticle.prepend(this.elemMediaPicture(jsonResponsePdp, i));
    }

    //mediaPicture
    elemMediaPicture(jsonResponsePdp, i) {
        let strUrl = this.jsonResponse.results[i].backdrop_path;
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media');
        elemChild2 = this.createTag('img', 'post__media-img');
        if (strUrl.includes('undefined') || strUrl.includes('null')) {
            elemChild2.setAttribute('src', '../images/img/fnf.png');
        } else {
            elemChild2.setAttribute('src', this.baseUrl + `${strUrl}`);
        }
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }
}

class TypeAudio extends Post {

    modCreateSectionBlogPage = super.createSectionBlogPage;

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle;
        let insertAudio;

        elemArticle = this.modCreateSectionBlogPage(jsonResponsePdp, i, j);
        elemArticle.prepend(this.elemMediaPicture(jsonResponsePdp, i));

        insertAudio = document.querySelectorAll('.post__title');
        insertAudio[j].append(this.elemMediaAudio(jsonResponsePdp, i, j));
    }

    //mediaPicture
    elemMediaPicture(jsonResponsePdp, i) {
        let strUrl = this.baseUrl + this.jsonResponse.results[i].backdrop_path;
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media');
        elemChild2 = this.createTag('img', 'post__media-img');
        // elemChild2.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].backdrop_path);
        if (strUrl.includes('undefined') || strUrl.includes('null')) {
            elemChild2.setAttribute('src', '../images/img/fnf.png');
        } else {
            elemChild2.setAttribute('src', this.baseUrl + `${strUrl}`);
        }
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }

    //mediaAudio
    elemMediaAudio(jsonResponsePdp, i, j) {
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2, elemChild3;

        elemChild = this.createTag('div', 'post__audio');
        elemChild2 = this.createTag('audio', 'post__audio-file');
        elemChild2.setAttribute('controls', '');
        elemChild3 = this.createTag('source', '');
        elemChild3.setAttribute('src', '#');
        elemChild3.setAttribute('type', 'audio/ogg');
        elemChild2.append(elemChild3);
        elemChild3 = this.createTag('source', '');
        elemChild3.setAttribute('src', '#');
        elemChild3.setAttribute('type', 'audio/mpeg');
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }
}

// const postTypePicture = new TypePicture();
// postTypePicture.urlParser();

// const postTypeAudio = new TypeAudio();
// postTypeAudio.urlParser();

// const postTypeText = new Post();
// postTypeText.urlParser();

const postTypeVideo = new TypeVideo();
postTypeVideo.urlParser();