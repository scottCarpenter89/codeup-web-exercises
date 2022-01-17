function getSum(a, b) {
    functionSum = a;
    console.log(b);
for (let i = a; i <= b; i++){
    numberToString = parseInt([i]);
    functionSum += numberToString;
}
return functionSum;
}

console.log(getSum(0, -1)); //Expected -1
console.log(getSum(2, 2)); //Expected 2
console.log(getSum(1, 5)); //Expected 15