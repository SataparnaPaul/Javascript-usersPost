async  function dataGetter(endpoints) {
let promises = [];
promises = endpoints.map(
    (endpoint) => 
    new Promise((resolve,reject) => { 
        fetch(endpoint)
    .then((resp) => resp.json
.then((data) => resolve(data)))}));

let response = {
    posts: [],
    users:[]
    }
    [response.posts , response.users] = await Promise.all(promises);
    return response;
}

function mapper(users) {
    users.unshift({});
    let map = users.reduce((acc,user) => {
        acc[user.id] =user;
        return acc;
    });
    return function(userId) {
        return map[userId];
    }
}

export {dataGetter , mapper};