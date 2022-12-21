class Post {
    #elem;
    #jsonResponse;
    #jsonResponseMock = this.jsonMock();

    constructor() {
    }

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

    jsonMovie() {
        let j = 0,
            idItems,
            request = new XMLHttpRequest();

        request.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=48c5e7a8ab1705fe359b85bfab16d6e0", true);

        request.send();

        request.onload = () => {

            if (request.status !== 200) {
                console.log(request.status);
                console.log(request.status + ': ' + request.statusText);
            } else {
                this.#jsonResponse = JSON.parse(request.responseText); // json movie
                console.log(this.#jsonResponse);

                for (let i = 0; i < 4; i++) {
                    idItems = this.#jsonResponse.results[i].id;
                    this.jsonPdp(idItems, i, j);

                    if (j < 3) {
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

    jsonPdp(idItems, i, j) {
        let jsonResponsePdp;
        let request = new XMLHttpRequest();

        request.open("GET", `https://api.themoviedb.org/3/movie/${idItems}?api_key=48c5e7a8ab1705fe359b85bfab16d6e0`, true);

        request.send();

        request.onload = () => {

            if (request.status !== 200) {
                console.log(request.status);
                console.log(request.status + ': ' + request.statusText);
            } else {
                jsonResponsePdp = JSON.parse(request.responseText);
                console.log('responsePdp', jsonResponsePdp);
                this.createSectionBlogPage(jsonResponsePdp, i, j);
            }
        };

        request.onerror = () => {
            console.log('error', request.response);
        };
    }

    // createBlogPage(jsonResponsePdp) {
    //
    // }

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let baseElem = document.getElementById('blogContainer');
        let fragment = new DocumentFragment();
        let elem, elemChild, elemChild2, elemChild3, elemChild4, elemChild5;
        let baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

        //!*** create section with video content ***

        //media
        elem = this.createTag('article', 'post');
        elemChild = this.createTag('section', 'post__media post__media--video');
        elemChild2 = this.createTag('img', 'post__media-img');
        elemChild2.setAttribute('src', baseUrl + this.#jsonResponse.results[i].backdrop_path);
        elemChild.append(elemChild2);
        elem.append(elemChild);
        // type
        elemChild = this.createTag('section', 'post__article');
        elemChild2 = this.createTag('div', 'post__type');
        elemChild3 = this.createTag('img', 'post__type-img');
        elemChild3.setAttribute('src', this.#jsonResponseMock.pages[1].posts[j].mediaType); //  j от 0 до 3
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        //information
        elemChild2 = this.createTag('div', 'post__information');
        elemChild3 = this.createTag('div', 'post__information__avatar');
        elemChild4 = this.createTag('img', 'post__information__avatar--img');
        elemChild4.setAttribute('src', baseUrl + this.#jsonResponse.results[i].poster_path);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        elemChild2 = this.createTag('div', 'post__information--description');
        elemChild3 = this.createTag('div', 'post__information__name', jsonResponsePdp.production_companies[0].name);
        elemChild2.append(elemChild3);
        elemChild3 = this.createTag('div', 'post__information-details');
        elemChild4 = this.createTag('div', 'post__information-details--date', this.#jsonResponse.results[i].release_date);
        elemChild3.append(elemChild4);
        elemChild4 = this.createTag('div', 'post__information-details--duration', `${jsonResponsePdp.runtime} min`);
        elemChild3.append(elemChild4);
        elemChild4 = this.createTag('div', 'post__information-details--comment', this.#jsonResponse.results[i].vote_count);
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
        // title
        elemChild2 = this.createTag('h2', 'post__title', this.#jsonResponse.results[i].original_title);
        elemChild.append(elemChild2);
        elemChild2 = this.createTag('p', 'post__context', this.#jsonResponse.results[i].overview);
        elemChild.append(elemChild2);
        // button
        elemChild2 = this.createTag('button', 'read-more', 'Read more');
        elemChild.append(elemChild2);
        elem.append(elemChild);

        fragment.append(elem);
        baseElem.append(fragment);
    }
}

const blog = new Post();

blog.jsonMovie();