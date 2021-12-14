// # Function Drills

// Functions using conditionals but not loops or arrays:

// 1. Make a function named isOdd(number)
function isOdd(number){
  /* if (number % 2 === 1){
       return true;
   } else {
       return false;
   }*/
   return number % 2 === 1;
}

console.log('The number is odd: ' + isOdd(1));
console.log('The number is odd: ' + isOdd(2));

// 2. Make a function named isEven(number)
function isEven(num){
    /*if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }*/
    return num % 2 === 0;
}

console.log('The number is even: ' + isEven(2));
console.log('The number is even: ' + isEven(1));

// 3. Make a function named identity(input) that returns the input exactly as provided.

function identity(input){
    return input;
}

console.log('Abra cadabra return what\'s already here: ' + identity('marshmallow'));
console.log('Abra cadabra return what\'s already here: ' + identity('gorilla yoga'));
console.log('Abra cadabra return what\'s already here: ' + identity(true));

// Make a function named isFive(input)

function isFive(input){
    return input === 5 || input === '5';
}

console.log('You are five years old, right?: ' + isFive(5));
console.log('You are five years old, right?: ' + isFive('5'));
console.log('You are five years old, right?: ' + isFive('banana'));

// Make a function named addFive(input) that adds five to some input.

function addFive(input){
    return input + 5;
}

console.log('Add five to this: ' + addFive(5));
console.log('Add five to this: ' + addFive('five'));

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){
    if (input % 5 === 0 && input > 0) {
        return true;
    } else {
        return false;
    }
}

console.log('Is this a multiple of five: ' + isMultipleOfFive(35));
console.log('Is this a multiple of five: ' + isMultipleOfFive(34));
console.log('Is this a multiple of five: ' + isMultipleOfFive(0));
console.log('Is this a multiple of five: ' + isMultipleOfFive(20));

// Make a function named isThree(input)
function isThree(input){
    let includeStrings = parseInt(input);
    return includeStrings === 3;
}

console.log('Is this number three: ' + isThree(3));
console.log('Is this number three: ' + isThree('3'));
console.log('Is this number three: ' + isThree(4));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input){
    let includeStrings = parseInt(input);
    return includeStrings % 3 === 0;
}

console.log('This is a multiple of three: ' + isMultipleOfThree(9));
console.log('This is a multiple of three: ' + isMultipleOfThree('9'));
console.log('This is a multiple of three: ' + isMultipleOfThree(10));
console.log('This is a multiple of three: ' + isMultipleOfThree(null));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input){
    let includeStrings = parseInt(input);
    return (includeStrings % 3 === 0 || includeStrings % 5 === 0) && includeStrings > 0;
}

console.log('This is a multiple of three or five: ' + isMultipleOfThreeAndFive(25));
console.log('This is a multiple of three or five: ' + isMultipleOfThreeAndFive(18));
console.log('This is a multiple of three or five: ' + isMultipleOfThreeAndFive('24'));
console.log('This is a multiple of three or five: ' + isMultipleOfThreeAndFive('50'));
console.log('This is a multiple of three or five: ' + isMultipleOfThreeAndFive(17));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    let parseTarget = parseInt(target);
    let parseN = parseInt(n);
    return parseTarget % parseN === 0;
}

console.log('N is a multiple of the target: ' + isMultipleOf(25, 5));
console.log('N is a multiple of the target: ' + isMultipleOf(14,3));
console.log('N is a multiple of the target: ' + isMultipleOf('30', '5'));
console.log('N is a multiple of the target: ' + isMultipleOf('17', '5'));

// Make a function named isTrue(boolean)
function isTrue(boolean){
    boolean = true;
    return boolean;
}

console.log('Wait, so you\'re telling me that false is: ' + isTrue(false));
console.log('Wait, so you\'re telling me that ghost monkeys are real?: ' + isTrue('ghost monkeys'));
console.log('Wait, so you\'re telling me that [sticky, rainbow, kitty, bombs] is a thing?: ' + isTrue(['sticky', 'rainbow', 'kitty', 'bombs']));

// Make a function named isFalse(boolean)
function isFalse(boolean){
    boolean = false;
    return boolean;
}

console.log('So, now you\'re saying that true is: ' + isFalse(true);