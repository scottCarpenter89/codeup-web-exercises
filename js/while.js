// 1. Create a file named while.js in the js directory.
//
// 2. Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


function baseTwo(){
    // need to create an expression that raises to two to a power and then adds one to the power
    let power = 1;
    while (2 ** power <= 65536){
        console.log(2 ** power);
        power++;
    }
}

baseTwo();