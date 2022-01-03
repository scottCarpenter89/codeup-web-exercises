'use strict';

/*Using the two provided variables, create a piece of logic which will determine if a person is qualified to be
extended an auto loan.

Requirements:
Their credit score must be over 680 AND have at least $4000 on-hand
OR, they must have at least $10000 on-hand

Scenario:
I have $12000 on-hand but have a 590 credit score. I get a loan.
I have $5000 on-hand with a 720 credit score. I get a loan
I have $3000 on-hand with a 720 credit score. I do not get a loan.
I have $9000 on-hand with a 590 credit score. I do not get a loan.
*/

/*let minCredit = 680;
let minCash = 4000;
let cashIsKing = 10000;

let creditScore = 720;
let cashOnHand = 5000;

if ((creditScore >= minCredit && cashOnHand >= minCash) || cashOnHand >= cashIsKing){
    console.log('Your loan has been approved!');
} else {
    console.log('We\'re sorry, we cannot approve your loan at this time.');
}*/

// 12/13/2021
function isFive(number){
    if (number === 5){
        return true;
    } else if (number === '5') {
        parseInt(number);
        return true;
    } else {
        return false;
    }
}

// console.log(isFive(5));
// console.log(isFive(0));
// console.log(isFive('5'));
// console.log(isFive(20));


// 12/14/2021

function isMultipleOfThree(input){
    let includeStrings = parseInt(input);
    return includeStrings % 3 === 0;
}

// console.log('This is a multiple of three: ' + isMultipleOfThree(9));
// console.log('This is a multiple of three: ' + isMultipleOfThree('9'));
// console.log('This is a multiple of three: ' + isMultipleOfThree(10));
// console.log('This is a multiple of three: ' + isMultipleOfThree(null));

// Maths!
// 1. Write a function called add(num1, num2) which returns the sum of a and b
// 2. Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
// 3. Write a function called sumOfSquares(a, b).
//     a. You should find the square of a, then the square of b.
//     b. Invoke add(num1, num2) and pass the new squared values in as arguments.

function add(num1, num2){
    return num1 + num2;
}

function square(numToSqr){
    return numToSqr * numToSqr
}

function sumOfSquares(a, b){
  let aSquared = square(a);
  let bSquared = square(b);
  return add(aSquared, bSquared);
}

// console.log(sumOfSquares(5, 12));
// console.log(sumOfSquares(5, 5));
// console.log(sumOfSquares(7, 3));

// FIZZ-BUZZZZZZZ
    // 1. Write a function named getFizzBuzz(startingNum) which performs the following actions:
    // 2. If startingNum is divisible by 3
        // a. console log "fizz"
    // 3. Else, if startingNum is divisible by 5
        // a. console log "buzz"
    // 4. If startingNum is divisible by 3 AND divisible by 5
        // a. return a string which says "FIZZ BUZZ"
    // 5. Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
    // 6. What if getFizzBuzz doesn't return a value (VOID)?
        // a. How do you want to handle that?

function getFizzBuzz(startingNum){
    if (startingNum % 3 === 0 && startingNum % 5 === 0){
        return console.log('FIZZ BUZZ');
    } else if (startingNum % 5 === 0){
        console.log('fizz');
    } else if (startingNum % 3 === 0){
        console.log('buzz');
    } else {
        return console.log(undefined);
    }
}

// getFizzBuzz(9);
// getFizzBuzz(10);
// getFizzBuzz(15);
// getFizzBuzz();

// getPaswordInput
    // 1. Define a function named getPassword() which performs the following actions:
    //     a. Using prompt(), alert(), variables, and a while-loop, ask the user to input their password until their entry matches your hard-coded password value.
    //     HINT: start by defining the correct password and don't forget to link your html file

function getPassword() {
// establish the password with a variable
    let validPassword = 'Delta89!_gra$$FED';
    let userPWInput = prompt('Please type in your password.');
    while (userPWInput !== validPassword){
        alert('Your password is incorrect. Please enter the correct password.');
        userPWInput = prompt('Please retry your password.');
    }
    alert('Your password is correct!');
}

getPassword();