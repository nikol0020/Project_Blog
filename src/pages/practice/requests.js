fetch('https://api.github.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let dataSortId = data.sort((a, b) => b.id - a.id);
        return dataSortId;
    })
    .then((users) => {
        users.forEach(user => {
            console.log(`
       task with fetch \n
       user.id ${user.id},
       user.login ${user.login},
       user.avatar_url ${user.avatar_url},
       user.type ${user.type}`
            );
        })
    });



let request = new XMLHttpRequest();
request.open("GET","https://api.github.com/users", false);
request.send();
if (request.status !== 200) {
    console.log(request.status + ': ' + request.statusText );
} else {
    let users = request.responseText;
    let firstUserData = JSON.parse(users)[0];
    console.log( 'task with XMLHttpRequest' + '\n\n' +
        'firstUserData.id ' + firstUserData.id + '\n'+
        'firstUserData.login ' + firstUserData.login + '\n'+
        'firstUserData.avatar_url ' + firstUserData.avatar_url
    );
}
