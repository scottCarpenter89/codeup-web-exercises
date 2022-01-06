'use strict';

// *** MINI EXERCISE 10 minutes ***
// Declare an array of two objects for movies
//     that have the following member values:
//     title (string)
//     year released (int)
//      rating (string)
//      director (string)
//      imdb rating (decimal)
//      academy award win (boolean)
// Use imdb.com to look up the info or make up your own info
// write a printMovie function that takes a movie as a parameter and prints its info.
//     call it with each of your array elements.
//     write a printMovies function that takes an array as a parameter, iterates over the array, and calls printMovie on each of the array elements

// *** Continuing MINI EXERCISE until lunch ***
// Change the director member of your movies to an object
// with firstName and lastName members
// Make an array member for your movies called genres.
// It is an array of string elements where each element
// is one of your movies’ genres from imdb.com
// and change your printMovie function
// please cupdate as you complete this ungraded practice exercise

// *** last part of MINI EXERCISE ***
// Add a rate(rating) function to each of your movie objects.
//     The function takes an int parameter called rating
// Modify rate(rating) to set a myRating property on that object
// modify printMovie to display myRating for each movie
// 15 minutes

function printMovie(movieObj) {
    movieObj.forEach(function (object) {
        console.log(object);
    });
}


function changeDirectorToObj(movieObjs) {
    // needs to loop over the array and access the property to change to an obj
    for (let i = 0; i < movieObjs.length; i++) {
        let nameSplitter = movieObjs[i].director.split(' ');
        movieObjs[i].director = {
            firstName: nameSplitter[0],
            lastName: nameSplitter[1]
        }
    }
    return genreArray(movieObjs);
}

function genreArray(movieObjs) {
    for (let i = 0; i < movieObjs.length; i++) {
        movieObjs[i].genre = [];
        if (movieObjs[i].title === 'Fight Club') {
            movieObjs[i].genre = ['drama'];

        } else {
            movieObjs[i].genre = ['action', 'adventure'];

        }
    }
    return rate(movieObjs);
}

function rate(rating) {
    rating.forEach(function (movie) {
        movie['myRating'] = movie['rating'];
        if (movie.title === 'Fight Club') {
            movie.myRating = 11;
        } else {
            movie.myRating = 10;
        }
    });
    return printMovie(rating);
}


let favMovies = [];
favMovies[0] = {
    title: 'Fight Club',
    year: 1999,
    rating: 'R',
    director: 'David Fincher',
    imdbRating: 8.8,
    academyAwardWin: false
};

favMovies[1] = {
    title: 'Inception',
    year: 2010,
    rating: 'PG-13',
    director: 'Christopher Nolan',
    imdbRating: 8.8,
    academyAwardWin: true
};


changeDirectorToObj(favMovies);



