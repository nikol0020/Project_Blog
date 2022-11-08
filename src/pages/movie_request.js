function jsonMock() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.themoviedb.org/3//movie/popular?api_key=48c5e7a8ab1705fe359b85bfab16d6e0", true);
    request.send();
    if (request.status !== 200) {
        console.log(request.status + ': ' + request.statusText);
    } else {
        let jsonResponse = JSON.parse(request.responseText);
        console.log( jsonResponse );
        // console.log(jsonResponse.pages[0].section[0].title);
        return JSON.parse(request.responseText);
    }
}

jsonMock();