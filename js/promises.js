"use strict";


let getMyLastCommit = fetch('https://api.github.com/users/scottCarpenter89/events/public', {headers: {'Authorization': `token ${SCOTT_GITHUB_API}`}

}).then((result) => {
    return result.json();
}).then((jsonData) => {
    return jsonData[0];
}).catch((error) => {
    return `ERROR: ${error}`;
});

console.log(getMyLastCommit);
