// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

//console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3

const arr = [1, 2, 4, 5, 6];

function findMissingNumber(){

    for(let i = 1; i <= arr.length + 1; i++){
     if(!arr.includes(i)){
        console.log(`${i} is the missing number`);
        return i;
         }
    }
}
findMissingNumber();