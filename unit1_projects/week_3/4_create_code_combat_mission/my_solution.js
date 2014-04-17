// I worked [with: Ken Mendonca] on this challenge

// Your mission description:
// The mission for Tharin is to ask the village people for clues to find the treasure hidden in the castle. 
// Each village person he encounters give him a clue to make him one step closer to the treasure. 
// 
// 

// Pseudocode
// Tharin walks right twice to the nearest villager
// Tharin asks for clue
// Villager1 says "answer a riddle first"
// Villager1 prompts a question
//  - if answer is right villager gives clue
//  - else villager asks question again
// Set variable asking back to true
// Tharin follows command which is walking four steps to the left
// Tharin meets second villager
// Tharin asks for clue
// Villager2 prompts a question
//  - if answer is right villager gives clue
//  - else villager asks question again
// Tharin follows command and walks two steps up 
// Tharin says "hooray!"


// Initial Code

var this = { Tharin };
var villager1 = { Smith };
var villager2 = { Steve };
var asking = true;

this.moveRight();
this.moveRight();
this.say("Hey there, do you know how I can get to the treasure?");
villager1.say("I will only tell you if you answer this riddle:")
while (asking) {
    var clue = villager1.prompt("Give me food and I will live. Give me water and I will die. What am I?");
    if (clue = "fire" || "Fire") {
        console.log("Correct! Go see Steve around the corner four steps to your left.");
        asking = false;
    } else {
        villager1.say("Wrong, try again.");
    }
}
asking = true;
this.moveLeft();
this.moveLeft();
this.moveLeft();
this.moveLeft();

this.say("Hey there, do you know how I can get to the treasure?");
villager2.say("I will only tell you if you answer this riddle:")

while (asking) {
    var clue = villager2.prompt("What bone has a sense of humor?");
    if (clue = "humerus") {
        console.log("Correct! The treasure is 2 steps north.");
        asking = false;
    } else {
        villager2.say("Wrong, try again.");
    }
}
this.moveUp();
this.moveUp();
this.say("Hooray!");

// Refactored Code

var this // "Tharin";
var villager1 = "Smith";
var villager2 = "Steve";
var asking = true;

this.moveRight();
this.moveRight();
this.say("Hey there, do you know how I can get to the treasure?");
villager1.say("I will only tell you if you answer this riddle:")

while (asking) {
    var clue = prompt("Give me food and I will live. Give me water and I will die. What am I?");
    if (clue === "fire" || "Fire") {
        console.log("Correct! Go see Steve around the corner four steps to your left.");
        asking = false;
    } else {
        villager1.say("Wrong, try again.");
    }
}

asking = true;
this.moveLeft();
this.moveLeft();
this.moveLeft();
this.moveLeft();
this.say("Hey there, do you know how I can get to the treasure?");
villager2.say("I will only tell you if you answer this riddle:")
while (asking) {
    var clue = prompt("What bone has a sense of humor?");
    if (clue === "humerus") {
        console.log("Correct! The treasure is 2 steps north.");
        asking = false;
    } else {
        villager2.say("Wrong, try again.");
    }
}
this.moveUp();
this.moveUp();
this.say("Hooray!");

// Reflection
// 
// This was a difficult challenge only because I didn't really know where to start.  Also,
// I wasn't sure if "moveLeft" was actually a function or not.  I guess I didn't read the directions
// clear enough to know that it doesn't actually have to work.  Before this, I thought JavaScript was
// pretty easy but then I realized that I have no idea how to implement it into HTML.  This is something
// I need to learn.  I really wish to learn about ascii art as well.  I will research this later and come back.
// I worked with Ken on this and we both were pretty lost but both tried our best to get it together.
// Resources we used were google searching for how prompt works.  Also researching riddles for our
// combat (hehehe).  I think the biggest challenge to coding this was building the while loop correctly.
// THe second biggest challenge was actually coming up with the idea of the combat.  I think brainstorming
// on this was useful because it forces us to be creative.




