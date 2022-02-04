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
function isFive(number) {
    if (number === 5) {
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

function isMultipleOfThree(input) {
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

function add(num1, num2) {
    return num1 + num2;
}

function square(numToSqr) {
    return numToSqr * numToSqr
}

function sumOfSquares(a, b) {
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

function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return console.log('FIZZ BUZZ');
    } else if (startingNum % 5 === 0) {
        console.log('fizz');
    } else if (startingNum % 3 === 0) {
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
    let attempts = 1;
    // can also use do while and start attempts from 0 with initializing prompt inside the do{}
    // let attempts = 0;
    // do {
    // prompt = ('Please enter your password');
    // attempts++;
    // } while (validPassword !== userPWInput && attempts < 3);
    while (userPWInput !== validPassword && attempts < 3) {
        alert('Your password is incorrect. Please enter the correct password.');
        userPWInput = prompt('Please retry your password.');
        attempts++;
    }
    if (attempts > 2) {
        alert('You are out of attempts. Please try again later.');
    } else {
        alert('Your password is correct!');
    }
}

//getPassword();

// getMeaningOfLife
// 1. Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
//     a. this function will use a while loop to compare its current number (a variable named counter) against the meaningfulNum.
// 2. While the counter is not equivalent to the meaningfulNum, continue the loop.
//     a. Once that condition is broken, console log a string telling the user "The meaning of life, the universe, and everything is [your meaningful number]"
// 3. Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value of meaningfulNum is a non-numeric?
//     a. Write some code to account for this case. How the function handles the situation is up to you!
// 4. Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42, console log a separate message at the end of the function to say: "Did you bring your towel?"

function getMeaningOfLife(meaningfulNum) {
    let counter = 0;
    meaningfulNum = parseInt(meaningfulNum);
    if (meaningfulNum) {
        while (counter !== meaningfulNum) {
            counter++;
        }
    }
    hitchHiker(meaningfulNum);
}


function hitchHiker(num) {
    if (num === 42) {
        console.log('Did you bring your towel?');
    } else if (isNaN(num)) {
        console.log('Numbers have meaning friend. Continue your quest.');
    } else {
        console.log('The meaning of life, the universe, and everything is ' + num + '.');
    }
}

// getMeaningOfLife('bananas');
// getMeaningOfLife(23);
// getMeaningOfLife(42);

// Create a function called arrayToString.
//     The function takes a parameter called myArray.
//     It returns a string that is the concatenation of all the elements in myArray.
//     This function is essentially your own version of join.
//     Therefore, you cannot use join in your function body :slightly_smiling_face:
//     Hint: use a loop

function arrayToString(myArray) {
    let resultString = '';
    for (let i = 0; i < myArray.length; i++) {
        resultString += myArray[i] + ' ';
    }
    return resultString;
}

// let duckDayArray = ['Happy', 'national', 'rubber', 'duck', 'day'];
// console.log(arrayToString(duckDayArray));

// JavaScript Warmup:
//     Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
// Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances.

function removeAll(arrayInput, removeValue) {
    // any undesired array values append to empty array
    let removedValues = [];
    let desiredArray = [];
    // for each loop to cycle through each value
    // for (let i = 0; i < arrayInput.length; i++){
    //     if (arrayInput[i] === removeValue){
    //         removedValues.push(arrayInput[i]);
    //     } else {
    //         desiredArray.push(arrayInput[i]);
    //     }
    // }
    arrayInput.forEach(function (element) {
        if (element === removeValue) {
            removedValues.push(element);
        } else {
            desiredArray.push(element);
        }
    });
    return desiredArray;

}

// var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// console.log(removeAll(bugs, "ant"));
// console.log(removeAll(bugs, 'mosquito'));
// console.log(removeAll(bugs, 'roach'));

// Write a JS function called getNthCat that takes an array of cat objects as a first parameter called cats, and n as a second parameter.
//     The function returns the cat object at index n in the cats array.
//     For example:
function getNthCat(cats, n) {
    // first script I wrote to get the object
    // for (let catObject = 0; catObject < cats.length; catObject++){
    //     if (catObject === n) {
    //         return cats[catObject];
    //     }
    // }

    // much more simple and returns the same thing
    return cats[n];
}

var myCats = [
    {
        catName: "Fifi",
        age: 5
    },
    {
        catName: "Fluffy",
        age: 3
    },
    {
        catName: "Abby",
        age: 7
    },
    {
        catName: "Biscuit",
        age: 4
    },
];

// print out the cat at index 1
// console.log(getNthCat(myCats, 0));
// console.log(getNthCat(myCats, 1));
// console.log(getNthCat(myCats, 2));
// console.log(getNthCat(myCats, 3));
// console.log(getNthCat(myCats, 4));

function reverseString(inputString) {
    // let resultString = '';
    // for (let i = inputString.length - 1; i > -1; i--) {
    //     resultString += inputString[i];
    // }
    // console.log(resultString);

    /*--------------------------OR------------------------*/
    let stringToArray = inputString.split('');
    let ArrayToStringReversed = stringToArray.reverse();
    console.log(ArrayToStringReversed.join(''));

}

// reverseString('hello');

// 1/26/2022 write a function that takes in an array and returns the average

function findAverage(gradeArray) {
    let gradesSum = 0;

    for (let i = 0; i < gradeArray.length; i++) {
        gradesSum += gradeArray[i];
    }
    let average = gradesSum / gradeArray.length;
    console.log(average);
}

let avg1 = [95, 74, 86, 100];
// findAverage(avg1)

// 1/26/2022 write a function called sumOfSquares(a, b)
// takes 2 parameters called a and b
// returns the sum of the squares of a and b
// i.e., (a to the power of 2) + (b to the power of 2)
// e.g., console.log(sumOfSquares(2, 3));
// will return 13

function sumOfSquares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

// console.log(sumOfSquares(4, 3));
// console.log(sumOfSquares(2,3));
// console.log(sumOfSquares(5,5));

// 2/1/2022

// Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
//     returns "first" if the first string parameter is longer
// returns "second" if the second parameter is longer
// returns "neither" if they are the same length
// returns false if either or both of the parameters are not strings

// function whichStringIsLonger(input1, input2) {
//     let parameterLength1 = input1.length;
//     let parameterLength2 = input2.length;
//     if (typeof input1 !== 'string' || typeof input2 !== 'string') {
//         return false;
//     }
//     if (parameterLength1 > parameterLength2) {
//         return 'first';
//     }
//     if (parameterLength1 < parameterLength2) {
//         return 'second';
//     }
//     return 'neither';
// }
//
// console.log(whichStringIsLonger("bobby", "lou")); // returns first
// console.log(whichStringIsLonger("bob", "louise")); // returns second
// console.log(whichStringIsLonger("bob", "lou")); // returns neither
// console.log(whichStringIsLonger("bobby", 2)); // returns false
// console.log(whichStringIsLonger(1, "lou")); // returns false

// 2/4/2022

// Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42' (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high' with the values of those respective properties set to the corresponding values in the input string.
//     NOTE: the values in the object should be of the number type
// Example input: '35, 42'
// Example return: {low: 35, high: 42}

// function convertLowHighToObject (lowHigh) {
// let lowHighArray = lowHigh.split(', ');
//     return {
//         low: parseInt(lowHighArray[0]),
//         high: parseInt(lowHighArray[0])
//     }
// }
//
// console.log(convertLowHighToObject('23, 54'));
// console.log(convertLowHighToObject('-17, 57'));
// console.log(convertLowHighToObject('80, 1000'));
// console.log(convertLowHighToObject('\'raymonds house right now', '76\''));