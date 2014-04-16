// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
set variable to adam to empty array
2. Give adam a name property with the value "Adam".
set name in adam to the value "Adam"
3. Add a spouse property to terah and assign it the value of adam.
set spouse to "adam" in object terah
4. Change the value of the terah weight property to 125.
set weight in object terah to 125
5. Remove the eyeColor property from terah.
delete eyeColor from terah.
6. Add a spouse property to adam and assign it the value of terah.
set spouse to "terah" in object adam
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
set children property to empty array for object terah.
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
set new property carson for children and give it an empty array.
set property name as "Carson" for object carson.
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
set new property carter for children and give it an empty array.
set property name as "Carter" for object carter.
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
set new property colton for children and give it an empty array.
set property name as "Colton" for object colton.
11. Add a children property to adam and assign it the value of terah children.
set property children in adam array to property children in terah array.

*/

// __________________________________________
// Write your code below.

var adam = [];
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = [];
terah.children.carson = [];
terah.children.carson.name = "Carson";
terah.children.carter = [];
terah.children.carter.name = "Carter";
terah.children.colton = [];
terah.children.colton.name = "Colton";
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I still don't understand psuedocoding that much.  I almost felt like the psuedocode i wrote was
// just rephrasing the question.  I need feedback on this.  I am having a pairing session with one of my
// accountability partners so I will review this.  The only code I didn't know was how to remove a property 
// that wasn't in the beginning or end of the array.  I researched this and found "delete" as the solution.
// I enjoyed this because it gave me more practice with the terminal.  One thing I don't know about the terminal
// is how to exit the thinking process of the terminal if I typed somethign wrong.  I will go to office hours for this.
// This challenge was very similar to the previous challenge.  I think it is a good exercise.

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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)