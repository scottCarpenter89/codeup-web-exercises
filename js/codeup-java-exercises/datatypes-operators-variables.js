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
isNaN(1)
// false
isNaN("")
// true
isNaN("string")
// true
isNaN("0")
// false
isNaN("1")
// false
isNaN("3.145")
// false
isNaN(Number.MAX_VALUE)
// false
isNaN(Infinity)
// false
isNaN("true")
// true
isNaN(true)
// true
isNaN("false")
// true
isNaN(false)
// true
// to illustrate why the isNaN() function is needed:
NaN == NaN





