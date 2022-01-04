// Mini Exercise
// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

let favoriteArtists = ['Jimi Hendrix', 'The Black Keys', 'AC/DC','Audioslave', 'Led Zeppelin'];

function artistLister(artistArray) {
    let firstThreeArtists = artistArray.slice(0,3)
    for (let i = 0; i < firstThreeArtists.length; i++) {
        console.log(artistArray[i]);
    }
}

artistLister(favoriteArtists);