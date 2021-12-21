// // TODO: MINI EXERCISE
// // TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point


// function countEvenNumbers() {
//     let counter = 0;
//     while (counter < 25){
//         counter += 1;
//         if(counter % 2 === 0) {
//             console.log(counter);
//         } else {
//             continue;
//         }
//     }
// }

//countEvenNumbers();

// alternate strategy

// function altEvenCounter(){
//     let counter = 0;
//     while (counter < 25){
//         console.log(counter); // notice how putting the log before the increment includes 0 and doesn't require the
//         counter += 2;         // if as long as you increment by 2 and not 1
//     }
// }
//
// altEvenCounter();

// Write the code necessary to output the first 50 prime numbers
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 prime numbers.
// https://en.wikipedia.org/wiki/Prime_number

function primeNumberGenerator() {
    // // a prime number is only divisible by itself and one
    // create a counter and set to one
    let counter = 1;
    // while the counter is less than 50, do stuff
    while (counter <= 50) {
        // if the counter divisible by itself is equal to 1
        if (counter % counter === 1) {
            // log the number
            console.log(counter);
            // and add one to the counter
            counter++;
            // otherwise
        } else {
            // continue onto the next number
            continue;
        }
    }
}

//primeNumberGenerator();

console.log(14 / 14);
