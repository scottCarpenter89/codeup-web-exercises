(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Scott', 'Sarah', 'Connor', 'Caroline'];
    console.log(`\n`);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('Here is the length of the array I created:');
    console.log(names.length);
    console.log(`\n`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(`Here are each names accessed from the array using console logs:`)
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log(`\n`);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log(`Here are the names using a for loop:`);
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    console.log(`\n`);

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    console.log(`Here are the names using the forEach function:`);
    names.forEach(function(name){
        console.log(name);
    });

    console.log(`\n`);

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function returnFirstElement(nameArray) {
        let firstElement = nameArray.shift();
        console.log(`Here is the first name in the array: ${firstElement}`);

    }

    function returnSecondElement(nameArray) {
        let secondElement = nameArray.slice(1,2);
        console.log(`Here is the second name in the array: ${secondElement}`);
    }

    function returnLastElement(nameArray) {
        let lastElement = nameArray.pop();
        console.log(`Here is the last name in the array: ${lastElement}`);
    }

    returnFirstElement(names);
    console.log(`\n`);
    returnSecondElement(names);
    console.log(`\n`);
    returnLastElement(names);

})();