'use strict';

// 1. Create a file named break_and_continue.js in the js directory.
// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


function allOddsExcept(input){
    console.log('Here is the number to skip: ' + input);

        for (let i = 1; i < 50; i++){
            if (i % 2 === 1 && i !== input){
                console.log('Here is an odd number: ' + i);
            } else if (i === input){
                console.log('Yikes! Skipping number: ' + input);
            } else {
            }
        }

}

function isValidInput(input){
    if (input > 1 && input < 50){
        return allOddsExcept(isValidInput());
    } else {
        prompt('Please enter a valid odd number between 1 and 50');
    }
}

let oneToFifty = prompt('Enter an odd number between 1 and 50');
isValidInput(oneToFifty);