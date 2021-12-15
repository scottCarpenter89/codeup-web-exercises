'use strict';

// Mini-Exercise:
// Create a new JS file under the js directory named intro-tests.js
// Write a function called count(input) that takes in a string and returns the number of characters.
// Test to ensure this function will:
    // return the accurate length of the string
    // return a false in the event the argument given is not a string
        // Account for: numbers, booleans, undefined, null

function count(input){
    // if the input is not a string
    if (typeof input !== 'string') {
        // return false
        console.log('The input is a string: ' + false);
    // otherwise...
    } else {
        // return the length variable
       return input.length;
    }
}

function countTest(countInput){
    // declare variable that calls the count function calling it expected
    let actualCount = count('carpenter');
    // declare a second variable called expected and set it to the string length
    let expectedCount = 9;
    // log a statement to the console comparing the length
    console.log('The length of the expected string is the same length as the actual string: ' + (actualCount === expectedCount));
}
countTest();


