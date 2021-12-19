
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(number) {
    // create a counter variable and set it to 1
    let counter = 1;
    // use a do while loop to multiply the count while it is less than or equal to ten
    do {
        console.log(counter * number);
        counter++;
    } while (counter <= 10);
        // return the product of the input number times the counter

}

console.log(showMultiplicationTable(4));