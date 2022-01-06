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

// let array = [{object1}, {object2}];
// let arrayExample = [0, 1, 2]


let moreMovies = [
    {
        title: 'Jurassic Park',
        year: 1998
    },
    {
        title: 'Intersellar',
        year: 2015
    }
];

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

function favoriteMovieInfo(movieObj) {
    favMovies.forEach(function (object) {
        console.log(object);
    });
}

favoriteMovieInfo(favMovies);


