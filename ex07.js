// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

//console.log(validateEmail("test@example.com")); // Expected output: true
//console.log(validateEmail("invalid-email.com")); // Expected output: false

const email = "test@example.com";

function validateEmail(email){

    let thereIsSymbol = false;

    for(let i = 0; i < email.length; i++){
        if((email.charAt(i)) === '@'){
            thereIsSymbol = true;
            break;
        }
        }
        if(thereIsSymbol){
            console.log(`${email} is a valid email`);
        } else {
            console.log(`Try another email`);
        }
    }

validateEmail(email);