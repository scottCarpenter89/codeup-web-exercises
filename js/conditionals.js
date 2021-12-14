"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Exercise 1
    // Create a function called analyzeColor1 that takes a parameter called color
//In your function, use ONLY if statements to print the following:
    //“blue is the color of the sky” if the value of color is “blue”
    //“red is the color of love” if the value of color is “red”
    //“green is the color of envy” if the value of color is “green”
    //“I don’t know that color” if the value of color is anything else
    //HINT: use return in the conditional code blocks to prevent from printing multiple times for the same argument
    //Add, commit, and push to GitHub.

function analyzeColor1(color){
    if (color === 'blue'){
        return 'blue is the color of the sky';
    } else if (color === 'red'){
        return 'red is the color of love';
    } else if (color === 'green'){
        return 'green is the color of envy';
    } else {
        return 'I don\'t know that color';
    }
}

/*console.log(analyzeColor1('blue'));
console.log(analyzeColor1('red'));
console.log(analyzeColor1('green'));
console.log(analyzeColor1('burgundy'));*/

function analyzeColor(input) {
    if (input === 'green') {
       return 'Did you know the sun emits more green light than any other color?';
        //alert('Did you know the sun emits more green light than any other color?');
    } else if (input === 'red'){
       console.log('Sunday, bloody Sunday!');
        //alert('Sunday, bloody Sunday!');
    } else if (input === 'orange'){
       console.log('It\'s kind of weird that orange is both a color and an object. Thanks english...');
        //alert('It\'s kind of weird that orange is both a color and an object. Thanks english...');
    } else if (input === 'yellow'){
       // console.log('I love yellow snow!');
        alert('I love yellow snow!');
    } else if (input === 'purple'){
       // console.log('Purple haze all in my brain! Lately things just don\'t seem the same! Actin\' funny and I don\'t know why!' +
             // ' \'Scuze me while I kiss the sky!');
        alert('Purple haze all in my brain! Lately things just don\'t seem the same! Actin\' funny and I don\'t know why!' +
            ' \'Scuze me while I kiss the sky!');
    } else if (input === 'blue') {
       // console.log('Smurfs are blue.');
        alert('Smurfs are blue.');
    } else if(input === 'violent') {
       // console.log('Violence? Look, I don\'t want any trouble buddy');
        alert('Violence? Look, I don\'t want any trouble buddy');
    } else if(input === 'indigo'){
       // console.log('Indigo? Sounds like Windigo!');
        alert('Indigo? Sounds like Windigo!');
    } else {
       // console.log('What\'s that?');
        alert('What\'s that?');
    }
}


console.log(analyzeColor('green'));
console.log(analyzeColor('red'));
console.log(analyzeColor('orange'));
// console.log(analyzeColor('purple'));
// console.log(analyzeColor('blue'));
// console.log(analyzeColor('yellow'))
// console.log(analyzeColor(randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function colorSwitch(input){
    switch (input){
        case 'red':
            console.log('Sunday, bloody Sunday!');
            break;
        case 'green':
            console.log('Green is my favorite color!');
            break;
        case 'yellow':
            console.log('Don\'t eat yellow snow, trust me');
            break;
        case 'blue':
            console.log('I love the blues');
            break;
        case 'violet':
            console.log('Violet, why not just purple?');
            break;
        default:
            console.log('I don\'t know that color');
            break;

    }
}

/*
console.log(colorSwitch('red'));
console.log(colorSwitch('green'));
console.log(colorSwitch('yellow'));
console.log(colorSwitch('blue'));
console.log(colorSwitch('violet'));
console.log(colorSwitch('indigo'));
*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/*let colorDialog = prompt('Hey, what\'s your favorite color?');
analyzeColor(colorDialog);*/


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNum, price){
    switch(luckyNum) {
        case 1:
            return 'Congratulations! You were choosen for our exclusive discount offer! You will get 10% off your' +
                ' purchase order, bringing your total down to $' + (price - (price * .1)) + '!';
            break;
        case 2:
            return 'Congratulations! You were choosen for our exclusive discount offer! You will get 25% off your' +
                ' purchase order, bringing your total down to $' + (price - (price * .25)) + '!';
            break;
        case 3:
            return 'Congratulations! You were choosen for our exclusive discount offer! You will get 35% off your' +
                ' purchase order, bringing your total down to $' + (price - (price * .35)) + '!';
            break;
        case 4:
            return 'Congratulations! You were choosen for our exclusive discount offer! You will get 50% off your' +
                ' purchase order, bringing your total down to $' + (price - (price * .5)) + '!';
            break;
        case 5:
            return 'Congratulations!!! You are our lucky customer! Our random coupon generator has selected your ' +
                'purchase to be completely free!';
            break;
        default:
            return 'We\'re sorry, but your purchase did not qualify for an exclusive offer at this time. Thank you ' +
                'for shopping with us!';
            break;
    }

}


function getRandomInt(max){
    return Math.floor((Math.random() * 6) + 1);
}

// console.log(calculateTotal(getRandomInt(6), 100));
// console.log(calculateTotal(getRandomInt(6), 100));
// console.log(calculateTotal(getRandomInt(6), 100));
// console.log(calculateTotal(getRandomInt(6), 100));
// console.log(calculateTotal(getRandomInt(6), 100));
// console.log(calculateTotal(getRandomInt(6), 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// write a function called numIdentifier(number)
function numIdentifier(number){
    // write a conditional to evaluate even or odd numbers
    if (number % 2 === 0){
        alert('Your number is even!');
    } else {
        alert('Your number is odd!');
    }
    // write a variable that adds the number with 100
    let addHundred = number + 100;
    alert('Your number plus 100 is : ' + addHundred);
    // evaluate whether the number is 1/-1/0 with Math.sign in a variable
    let negNumber = -Math.abs(1);
    // if the variable is 1
    if (Math.sign(number) === 1){
        // then alert a positive statement
        alert('Your number is positive!');
    // if the variable is -1
    } else if (Math.sign(number) === negNumber){
        // then alert a negative statement
        alert('Your number is negative!');
    }
}
// write a function called isInputNaN(userInput)
function isInputNaN(userInput) {
    // if it is NaN
    userInput = parseInt(userInput);
    if (!isNaN(userInput)) {
        // then it will alert the user their input is an incorrect data type
        return numIdentifier(userInput);
        // if the argument is a number
    } else {
        // then it will send the user input to numIdentifier
        alert('Invalid data type. Please enter a number.');
        // Why does this loop at the end of the script every time?
    }
}

// write a function that asks you whether you want to enter a number
function letsPlay(userInput){
    if (userInput === true){
       return isInputNaN(prompt('Okay what number would you like me to evaluate?'));
    } else {
        alert('Maybe some other time then.');
    }
}
// write a variable assigned to confirm asking the user if they want to input a number
let pickANum = confirm('Hi, would you like for me to evaluate a number?');
letsPlay(pickANum);
// funnel their input into isInputNaN with a prompt
// isInputNaN(pickANum);