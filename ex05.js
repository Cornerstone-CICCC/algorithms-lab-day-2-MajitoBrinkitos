// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

//console.log(countConsonants("hello world")); // Expected output: 7

const word = "hello world";

function countConsonants(word){

    let countConsonants = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(i = 0; i < word.length; i++){
        const letters = word.charAt(i);
        if(!vowels.includes(letters) && /[a-z]/.test(letters)){
            countConsonants++;
        }
    }
    console.log(`${word} has ${countConsonants} consonants`);
}
    countConsonants(word);