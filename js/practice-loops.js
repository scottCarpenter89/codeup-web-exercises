// // TODO: MINI EXERCISE
// // TODO: print all even numbers between 0 and 25;
// let counter = 0; // starting point


function countEvenNumbers() {
    let counter = 0;
    while (counter < 25){
        counter += 1;
        if(counter % 2 === 0) {
            console.log(counter);
        } else {
            continue;
        }
    }
}

countEvenNumbers();