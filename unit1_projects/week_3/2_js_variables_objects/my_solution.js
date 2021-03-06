// I paired [by myself] on this challenge.




// Pseudocode
// 1. define secretNumber
// 2. make secretNumber equal 7
// 3. define password
// 4. make password equal 'just open the door'
// 5. define allowedIn
// 6. make allowedIn false
// 7. make an array called members
// 8. make the first thing in members "John"
// 9. make the fourth thing in members "Mary"


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = [];
members = ["John", "Stella", "David", "Mary"];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ["John", "Stella", "David", "Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// At first I didn't understand what I had to do with the Challenge.  I didn't understand the instructions.
// Then I looked at the driver code and realized what it was doing.  I still have trouble understanding how to
// use the Terminal so that is something I might have to pair with someone about.  I need to practice learning
// all the cool ways the Terminal does things.  Other than that, so far, the JavaScript language we learned so 
// far is pretty basic and easy to understand.  I didn't learn any new skills other than the basic JavaScript I
// reviewed by going through the Intro to JavaScript informationals.

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

