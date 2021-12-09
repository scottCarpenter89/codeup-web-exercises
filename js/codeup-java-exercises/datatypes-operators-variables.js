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


/*console.log(isNaN(0));
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
// so, NaN does not have the same value as NaN, why?*/


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
console.log(sample.substring(6, 12));
// need help with this one



