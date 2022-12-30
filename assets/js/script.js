// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays & variables
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start function

function generatePassword () {
  // ask for password length user input
  passwordLength = prompt("How many characters would you like the password to be? Choose between 8 and 128.");
  console.log ("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Must Select Password Length");
  }
  else if (passwordLength <8 || passwordLength >128) {
    passwordLength = prompt("You must choose a number between 8 and 128");
    console.log ("Password length " + passwordLength);
  }
  if (passwordLength <8 || passwordLength >128) {
    alert("Must choose a number betweeen 8 and 128");
    return alert("Click Generate Password to enter value")
  }
  // asking user for desire for specific character types
    confirmNumber = confirm("Include numbers in password? Ok for yes, cancel for no.");
      console.log("Number " + confirmNumber);

    confirmSpecial = confirm("Include special characters in password? Ok for yes, cancel for no.");
      console.log("Special Character " + confirmSpecial);

    confirmLower = confirm("Include upper case letters in password? Ok for yes, cancel for no.");
      console.log("Lower case " + confirmLower);

    confirmUpper = confirm("Include lower case letters in password? Ok for yes, cancel for no.");
      console.log("Upper case " + confirmUpper);
  
// If, No true variable - then
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose at least one criteria - please try again");
  return
}
// situation with all 4 true variables
 else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = letterLower.concat(letterUpper, numberList, specialChar);
  console.log(userChoices);
}
// situations with 3 true variables
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = letterLower.concat(letterUpper, numberList);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = letterLower.concat(letterUpper, specialChar);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = letterLower.concat(numberList, specialChar);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = letterUpper.concat(numberList, specialChar);
  console.log(userChoices);
}
// sitautions with 2 true variables
else if (confirmUpper && confirmNumber) {
  userChoices = letterUpper.concat(numberList);
  console.log(userChoices);
}
else if (confirmUpper && confirmSpecial) {
  userChoices = letterUpper.concat(specialChar);
  console.log(userChoices);
}
else if (confirmNumber && confirmSpecial) {
  userChoices = numberList.concat(specialChar);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper) {
  userChoices = letterLower.concat(letterUpper);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = letterLower.concat(numberList);
  console.log(userChoices);
}
else if (confirmLower && confirmSpecial) {
  userChoices = letterLower.concat(specialChar);
  console.log(userChoices);
}
// situations with 1 true variable
else if (confirmNumber) {
  userChoices = numberList;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = specialChar;
  console.log(userChoices);
}
else if (confirmLower) {
  userChoices = letterLower;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = letterUpper;
  console.log(userChoices);
}

// Empty variable for the password length
var passwordEmpty = [];

// Loop for random character selection
for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordEmpty.push(allChoices);
  console.log(allChoices);
}

// Join and return the password 
var password = passwordEmpty.join("");
console.log("Your Pasword is: " + password);
return password;

}

