function getSum(a, b) {
    functionSum = a;
for (let i = a; i <= b; i++){
    functionSum += [i];
}
return functionSum;
}

console.log(getSum(0, -1)); //Expected -1
console.log(getSum(2, 2)); //Expected 2
console.log(getSum(1, 5)); //Expected 15