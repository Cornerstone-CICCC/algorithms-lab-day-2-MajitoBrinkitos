// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

//console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9

let array = [3, 1, 4, 1, 5, 9];

function findMax() {

  let maxNumber = 0;
  
    for(let i = 1; i < array.length; i++){
        if(array[i] > array[maxNumber]){
            maxNumber = array[i]; //updates the index of maxNumber
        }
    }
  console.log(`the max number in the array is ${maxNumber}`);
}

findMax();