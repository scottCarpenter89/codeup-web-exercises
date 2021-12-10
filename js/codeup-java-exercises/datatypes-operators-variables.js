/* Exercises -- Review the code blocks and attempt to predict their outcome before running in the console */

var a = 1;
var b = a++;
var c = ++a;
/* what is the value of a, b, and c?
    a ----> 1
    b ----> 2
    c ----> 3 */

console.log(a);
console.log(b);
console.log(c);


var d = "hello";
var e = false;

console.log(d++); // hellohello
// I guess you can't increment strings together bc they are not numbers
console.log(e++); // falsefalse
// I'm thinking this turned out to be zero bc booleans are binary (which is numberial) where true = 1, and false = 0


var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);
// it is NaN, maybe because 2 has nothing to append to from the operation bc perplexed is undefined


var price = 2.7;
console.log(price.toFixed(2)); // ----> 2.70


/*var price = "2.7";
console.log(price.toFixed(2)); // ----> error
// price is a string object and toFixed() is a method that is only a property of numbers*/


console.log(isNaN(0));
// false
console.log(isNaN(1));
// false
console.log(isNaN(""));
// true ----> why is an empty string a number? is it bc it's undefined?
console.log(isNaN("string"));
// true
console.log(isNaN("0"));
// false
console.log(isNaN("1"));
// false
console.log(isNaN("3.145"));
// false
console.log(isNaN(Number.MAX_VALUE));
// false
console.log(isNaN(Infinity));
// false
console.log(isNaN("true"));
// true ----> false. why?
console.log(isNaN(true));
// true ----> false. why?
console.log(isNaN("false"));
// true ----> false. why?
console.log(isNaN(false));
// true
// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);
// so, NaN does not have the same value as NaN, why?


console.log(!true); // ----> false

console.log(!false); // ----> true

console.log(!!true); // ----> true

console.log(!!false); // ----> false

console.log(!!0); // ----> 0
// missed it. why?
console.log(!!-0); // ----> -0
// missed it. why?
console.log(!!1); // ----> 1
// missed it. why?
console.log(!!-1); // ----> -1
// missed it. why?
console.log(!!0.1); // ----> 0.1
// missed it. why?
console.log(!!"hello"); // ----> hello
// missed it. why?
console.log(!!""); // ----> undefined
// missed it. why?
console.log(!!''); // ----> undefined
// missed it. why?
console.log(!!"false"); // ----> "false"
// missed it. why?
console.log(!!"0"); // ----> "0"
// missed it. why?

// Execute the following statement in the Chrome JavaScript console and then follow the directions below.

var sample = "Hello Codeup";
//Use .length to find the number of characters in the string.
console.log(sample.length);
// Try to make the sample string all upper or all lower case.
console.log(sample.toLowerCase());
//Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sample = sample + " Students";
console.log(sample);
//Replace "Students" with "Class".
console.log(sample.replace("Students", "Class"));
//Find the index of "c" using .indexOf(). What do you observe?
console.log(sample.indexOf("c"));
//Find the index of "C" using .indexOf().
console.log(sample.indexOf("C"));
//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
console.log(sample.substring(sample.indexOf('C'), sample.indexOf('S')));
// need help with this one
    // update: might meet the problem parameters now?


/*
Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about
the real operations to get the values, the goal of these exercises is to understand how real world conditions can be
represented with code.
*/

 /*You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
 and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will
  you have to pay?*/

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let dailyRentalPrice = 3;

let estimatedTotal = (littleMermaid * dailyRentalPrice) + (brotherBear * dailyRentalPrice) + (hercules * dailyRentalPrice);
console.log('You can expected to pay about $' + estimatedTotal + ' dollars.');

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
 per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You
 worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

let google = 400;
let amazon = 380;
let facebook = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

let payday = (google * googleHours) + (amazon * amazonHours) + (facebook * facebookHours);
console.log(payday);

/*A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
her current schedule.*/

let scheduleNotFull = true;
let noClassConflicts = true;

if(scheduleNotFull && noClassConflicts){
    console.log('The student can enroll in another class.');
} else {
    console.log('The student cannot enroll for anymore classes.');
}

/*A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
members do not need to buy a specific amount of products.*/

let numPurchases = 3;
let minimumPurchase = 2;
let isOfferValid = true;
let isPremiumMember = true;

if((numPurchases > minimumPurchase && isOfferValid) || isPremiumMember){
    console.log('This purchase qualifies for the offer.');
} else{
    console.log('This purchase does not qualify for the offer.');
}

// Use the following code to follow the instructions below:

var username = 'codeup';
var password = 'notastrongpassword';

// the password must be at least 5 characters
let charMin = 5;
// the password must not include the username
let reusedUsername = password.indexOf(username) === -1;
// the username must be no more than 20 characters
let charMax = 20;
// neither the username or password can start or end with whitespace
let noUsernameSpace = username.indexOf(' ') === -1;
// console.log(noUsernameSpace);
let noPasswordSpace = username.indexOf(' ') === -1;
// console.log(noPasswordSpace);

if (password.length >= charMin && password.length <= charMax && noUsernameSpace && reusedUsername){
    console.log('Valid password');
} else{
    console.log('Invalid password');
}

if (noUsernameSpace){
    console.log('Valid username');
} else{
    console.log('Invalid username');
}