'use strict';

//home work 
//task #1 (plus before promt tell us that the prompt will get only numeric value)
let numberOfFilms = +prompt('Please enter number of films:', '');
console.log(numberOfFilms);

//task #2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//task#3
let a = prompt('What is the last movie you have watched?', ''),
    b = prompt('How would you rate the movie?', ''),
    c = prompt('What is the last movie you have watched?', ''),
    d = prompt('How would you rate the movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);