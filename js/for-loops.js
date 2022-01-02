'use strict';

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(number) {
    // create a counter variable and set it to 1
    let counter = 1;
    // use a do while loop to multiply the count while it is less than or equal to ten
    do {
        console.log(counter * number);
        counter++;
    } while (counter <= 10);
    // return the product of the input number times the counter

}

console.log(showMultiplicationTable(4));

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even. For example:

function randomNumberGenerator() {
    // create a for loop that initiates at 20; runs until 200; and increments by 50
    for (let i = 0; i <= 10; i++) {
        // let the return variable equal a whole integer of a random number times the multiplier
        let randomNumberProduct = Math.floor(Math.random() * 200);
        if (randomNumberProduct > 20 && randomNumberProduct % 2 === 0) {
            console.log(randomNumberProduct + ' is even.');
        } else if (randomNumberProduct > 20 && randomNumberProduct % 2 === 1) {
            console.log(randomNumberProduct + ' is odd.');
        } else {
        }
    }
}

randomNumberGenerator();

// 4. Create a for loop that uses console.log to create the output shown below.

function numberPrinter() {
    for (let outer = 1; outer < 10; outer++) {
        let logger = '';
        for (let inner = 1; inner <= outer; inner++){
            logger += outer;
        }
        console.log(logger);
    }
}

numberPrinter();

// 5. Create a for loop that uses console.log to create the output shown below.

function decrements() {

    for (let i = 100; 0 < i; i -= 5) {
        console.log(i);
    }
}

decrements();



