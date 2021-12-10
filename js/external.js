"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my website!');


let colorPrompt = prompt('What is your favorite color?');

if (colorPrompt === 'green'){
    alert('Yo, that\'s my favorite color too!');
} else {
    alert('That\'s cool!');
}

/*You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
 and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will
  you have to pay?*/
alert('Hey, let\'s calculate how much you should expect to pay for your video rentals.');
let littleMermaidRental = prompt('How many days did you have The Little Mermaid checked out?');
let brotherBearRental = prompt('How many days did you have Brother Bear checked out?');
let herculesRental = prompt('How many days did you have Hercules checked out?');
let dailyRentalPrice = 3;

let estimatedTotal = (parseInt(littleMermaidRental) * dailyRentalPrice) + (parseInt(brotherBearRental) * dailyRentalPrice) + (parseInt(herculesRental) * dailyRentalPrice);
confirm('You should expect to pay about $' + estimatedTotal + '.');

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate
 per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You
 worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/

let google = 400;
let amazon = 380;
let facebook = 350;

alert('Let\'s calculate your paycheck from the hours you worked at Google, Amazon, and Facebook last week.');
let googleHours = prompt('How many hours did you work for Google last week?');
let amazonHours = prompt('How many hours did you work for Amazon last week?');
let facebookHours = prompt('How many hours did you work for the Facebook last week?');

let payday = (google * parseInt(googleHours)) + (amazon * parseInt(amazonHours)) + (facebook * parseInt(facebookHours));
confirm('You made $' + payday + ' last week');

/*A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
her current schedule.*/

alert('We need to see if you eligible to enroll in anymore classes this semester.');
let totalHours = prompt('How many hours are you taking this semester?');
let scheduleConflicts = prompt('Does the course you want to enroll in occur at the same time as any of your other courses? Type "yes" or "no"');

let scheduleNotFull = parseInt(totalHours) <= 17;

if(scheduleConflicts === 'no' && scheduleNotFull){
    confirm('You can enroll in another class.');
} else {
    confirm('You cannot enroll in anymore classes.');
}

/*A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium
members do not need to buy a specific amount of products.*/

alert('Let\'s see if you qualify for our offer!!');

let numPurchases = prompt('How many items have you purchased today?');
let minimumPurchase = 2;
let isOfferValid = true;
let isPremiumMember = true;


if((parseInt(numPurchases) > minimumPurchase && isOfferValid) || isPremiumMember){
    confirm('Congratulations!! You qualify for our exclusive offer!');
} else{
    confirm('We\'re sorry, but you do not qualify for our offer at this time.');
}

