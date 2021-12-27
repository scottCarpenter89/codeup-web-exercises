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

// console.log(showMultiplicationTable(4));

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even. For example:

function randomNumberGenerator() {
    // create a for loop that initiates at 20; runs until 200; and increments by 50
    for (i = 0; i <= 10; i++) {
        // let the return variable equal a whole integer of a random number times the multiplier
        let randomNumberProduct = Math.floor(Math.random() * 200);
        if (randomNumberProduct > 20 && randomNumberProduct % 2 === 0){
            console.log(randomNumberProduct + ' is even.');
        } else if (randomNumberProduct > 20 && randomNumberProduct % 2 === 1) {
            console.log(randomNumberProduct + ' is odd.');
        } else {
            continue;
        }
    }
}

// randomNumberGenerator();

// 4. Create a for loop that uses console.log to create the output shown below.

function numberPrinter() {
    // create a variable that counts from 1
    let count = 1;
    let logger = '';
    // create a for loop that starts at 0, where the count is less than 10, and increments by 1
    for (let i = 1; i < 10; i++) {
        // if the count is less than to i,
        if (count <= i) {
            // then it will log the string version of the number and concatenate it to itself
            // it will also add one to the count
            logger += count.toString();
            console.log(logger);
            count++
            // otherwise, if the count greater than i
        } else {
            // then it will increase the count by one and continue
        }
    }
}
numberPrinter();

// 5. Create a for loop that uses console.log to create the output shown below.

function decrementer(){

    for (i = 100; 0 < i; i-=5){
        console.log(i);
    }
}

decrementer();

