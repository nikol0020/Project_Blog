class Post {
    #elem;
    jsonResponse;
    jsonResponseMock = this.jsonMock();
    baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    baseElem = document.getElementById('blogContainer');

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
            idItem,
            request = new XMLHttpRequest();

        request.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=48c5e7a8ab1705fe359b85bfab16d6e0", true);
        request.send();

        request.onload = () => {
            if (request.status !== 200) {
                console.log(request.status);
                console.log(request.status + ': ' + request.statusText);
            } else {
                this.jsonResponse = JSON.parse(request.responseText); // json movie


                for (let i = 0; i < 4; i++) {   //  i - п.н. поста для запроса jsonResponse
                    idItem = this.jsonResponse.results[i].id;
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
            } else {
                jsonResponsePdp = JSON.parse(request.responseText);
                this.createSectionBlogPage(jsonResponsePdp, i, j);
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
        elemChild4.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].poster_path);
        elemChild3.append(elemChild4);
        elemChild2.append(elemChild3);
        elemChild.append(elemChild2);
        elemChild2 = this.createTag('div', 'post__information--description');
        elemChild3 = this.createTag('div', 'post__information__name', jsonResponsePdp.production_companies[0].name);
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

const postTypeText = new Post();

// postTypeText.jsonMovie();

class TypeVideo extends Post {

    modCreateSectionBlogPage = super.createSectionBlogPage;

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle;

        elemArticle = this.modCreateSectionBlogPage(jsonResponsePdp, i, j);
        elemArticle.prepend(this.elemMediaVideo(jsonResponsePdp, i));
    }

    //mediaVideo
    elemMediaVideo(jsonResponsePdp, i) {
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media--video');
        elemChild2 = this.createTag('img', 'post__media-img');
        elemChild2.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].backdrop_path);
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }
}

const postTypeVideo = new TypeVideo();
postTypeVideo.jsonMovie();

class TypePicture extends Post {

    modCreateSectionBlogPage = super.createSectionBlogPage;

    createSectionBlogPage(jsonResponsePdp, i, j) {
        let elemArticle;

        elemArticle = this.modCreateSectionBlogPage(jsonResponsePdp, i, j);
        elemArticle.prepend(this.elemMediaPicture(jsonResponsePdp, i));
    }

    //mediaPicture
    elemMediaPicture(jsonResponsePdp, i) {
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media');
        elemChild2 = this.createTag('img', 'post__media-img');
        elemChild2.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].backdrop_path);
        elemChild.append(elemChild2);
        fragmentMedia.append(elemChild);

        return fragmentMedia;
    }
}

const postTypePicture = new TypePicture();
// postTypePicture.jsonMovie();

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
        let fragmentMedia = new DocumentFragment();
        let elemChild, elemChild2;

        elemChild = this.createTag('section', 'post__media post__media');
        elemChild2 = this.createTag('img', 'post__media-img');
        elemChild2.setAttribute('src', this.baseUrl + this.jsonResponse.results[i].backdrop_path);
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

const postTypeAudio = new TypeAudio();
// postTypeAudio.jsonMovie();




