'use strict';

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*

function oddLoop(numIterations) {
    // for loop need to accept the function parameter as the condition
    for (let i = 0; i <= numIterations; i++) {
        // if the index is odd it logs, otherwise it continues to the next iteration
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// oddLoop(5);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds

function evensAndOdds(numIterations) {
    // needs to accept the function parameter as the condition in the loop
    for (let i = 1; i <= numIterations; i++) {
        // if the index is odd,
        if (i % 2 === 1) {
            // then it logs an odd statement
            console.log(`${i} : This is an odd iteration`);
        } else {
            console.log(`${i} : This is an even iteration`);
        }
    }
}

// evensAndOdds(10);

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

function enterPassword(passwordInput){
    // create a password variable
    let password = 'eat-em-up-kats';
    // create a variable that establishes permitted attempts
    let allowedAttempts = 3
    // for loop uses the attempt variable as its condition
    for (let i = 1; i < passwordInput.length; i++) {
        // if the input is not equal to the password
        if (passwordInput !== password && i < allowedAttempts) {
            // then it logs incorrect and continues
            console.log(`Incorrect password`);
            continue;
        } else if (passwordInput !== password && i === allowedAttempts) {
            console.log(`Too many attempts. Try again later.`);
            break;
        } else {
            // otherwise it logs correct and breaks the loop
            console.log(`Correct. Logged-in.`);
            break;
        }
    }
}

enterPassword(['gig-em', 'axe-em-jacks', 'sooners', 'longhorns']);
enterPassword('eat-em-up-kats');