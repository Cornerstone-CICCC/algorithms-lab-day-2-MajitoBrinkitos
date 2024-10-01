// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

//console.log(capitalizeWords("hello world")); // Expected output: "Hello World"

//SOLUTION

//Variable that stores the words
const words = "hello world";

function capitalizeWords(){
  
  //split array
  const arrWords = words.split(" ");
  
  for ( let i = 0; i < arrWords.length; i++){
    arrWords[i] = arrWords[i].slice(0,1).toUpperCase() + arrWords[i].slice(1);
  }
  
  console.log(arrWords.join(" "));
}
  capitalizeWords();
