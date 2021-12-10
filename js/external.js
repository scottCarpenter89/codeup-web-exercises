"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my website!');


let colorPrompt = prompt('What is your favorite color?');

if (colorPrompt === 'green'){
    alert('Yo, that\'s my favorite color too!');
} else {
    alert('Ah, that\'s cool!');
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


