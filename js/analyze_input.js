/*
1. Create a file named analyze_input.js in the js directory.
2. In that file, write a program that receives user input and analyzes the input differently if the input is a number or a string. If the input is a string, it will analyze the string differently if it is length 1.
3. Following are the rules of analysis:
If the input is a number:
Output if the number is odd or even (zero is considered even). Use your function from Exercise 2 for this functionality.
Output if the number is negative, positive, or zero
If the input is a string:
If the string’s length is 1, output if the string (or char) is a vowel or not
Otherwise, output the length of the string
4. Design your program to include a switch and at least one if/else. You must also make separate functions for all of the following program functionality:
Determining if the input is a number, string, or otherwise. This function should be called analyzeInput
Determining if a number is odd or even. Re-use your Exercise 2 function for this.
Determining if a number is <, >, or equal to zero
Determining if the string is a single character or not
Determining if the length 1 string is a vowel or not
5. Add, commit, and push to GitHub.
*/

let askForInput = prompt('Type in anything and I will tell you all about your data type.');
analyzeInput(askForInput);
// 1. function analyzing num or str
function analyzeInput(userInput){
    // create conditional that differentiates strings from numbers
    let testInt = parseInt(userInput);
    // if string
    if (isNaN(testInt)) {
        // send to stringLength()
        alert('Your input is a string.');
        return stringLength(userInput);
        // else if number
    } else if (typeof testInt === 'number') {
        // send to evaluateToZero()
        alert('Your input is a number.');
        return evaluateToZero(testInt);
        // otherwise return 'invalid datatype'
    } else {
        alert('Your datatype is invalid. Please use a string or a number.');
    }
}
// 2a. function analyzing odd or even
function oddOrEven(number){
    // create a variable that takes the absolute value of the input
    let absoluteNumber = Math.abs(number);
    // if the input is odd
    if (absoluteNumber % 2 === 1) {
        // it returns an alert
        alert(number + ' is odd');
        // otherwise
    } else {
        // it returns an alert
        alert(number + ' is even.')
    }
}
// 2a. function analyzing if <, >, = to zero
function evaluateToZero(number){

    // if the number is greater than 1
    if (number > 1) {
        // it returns an alert and sends to oddOrEven()
        alert(number + ' is positive.');
        return oddOrEven(number);
        // if it is less than 1
    } else if (number < 1){
        // it returns an alert and sends it to oddOrEven()
        alert(number + ' is negative.');
        return oddOrEven(number);
        // if it is equal to zero
    } else {
        // it returns an alert and sends it to oddOrEven()
        alert('Your number is 0.');
    }
}
// 2b. function analyzing if single character
function stringLength(string){
    // if the string length is greater than 1
    if (string.length > 1) {
        // it returns an alert
        alert('Your string length is greater than one character.');
        // otherwise
    } else {
        // it runs it through isVowel()
        return isVowel(string);
    }
}
// 3b. function analyzing if single character is vowel or not
    // use switch
function isVowel(character){
    // using a switch evaluate the string to see if each case matches the input and returns an alert
    switch(character){
        case 'a':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        case 'e':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        case 'i':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        case 'o':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        case 'u':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        case 'y':
            alert('Your character: ' + character + ', is a vowel.');
            break;
        default:
            alert('Your character: ' + character + ', is a vowel.');
            break;
    }
}

