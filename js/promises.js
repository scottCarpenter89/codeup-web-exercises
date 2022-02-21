"use strict";


let getMyEvents = fetch('https://api.github.com/users/scottCarpenter89/events', {
    headers: {'Authorization': `token ${SCOTT_GITHUB_API}`}

}).then((result) => {
    return result.json();
}).then((jsonData) => {
    return jsonData[0].repo.name;
}).catch((error) => {
    return `ERROR: ${error}`;
});


let getMyLastCommit = fetch(`https://api.github.com/repos/scottCarpenter89/codeup-web-exercises/commits`, {
    headers: {'Authorization': `token ${SCOTT_GITHUB_API}`}
}).then((result) => {
    return result.json();
}).then((jsonData) => {
    return jsonData[0].commit.committer.date;
}).catch((error) => {
    return `ERROR: ${error}`;
});
console.log(getMyLastCommit);



function wait(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(milliseconds)
        }, milliseconds);
    });

}

wait(1000).then((result) => console.log(`You\'ll see this after ${result} milliseconds or ${result / 1000} second(s)`));
wait(3000).then((result) => console.log(`You\'ll see this after ${result} milliseconds  or ${result / 1000} second(s)`));