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

console.log(isFive(5));
console.log(isFive(0));
console.log(isFive('5'));
console.log(isFive(20));


// 12/14/2021

function isMultipleOfThree(input){
    let includeStrings = parseInt(input);
    return includeStrings % 3 === 0;
}

console.log('This is a multiple of three: ' + isMultipleOfThree(9));
console.log('This is a multiple of three: ' + isMultipleOfThree('9'));
console.log('This is a multiple of three: ' + isMultipleOfThree(10));
console.log('This is a multiple of three: ' + isMultipleOfThree(null));