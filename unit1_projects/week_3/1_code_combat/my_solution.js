// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// plan ()

// This is your code controlling Tharin!

this.moveDown();
this.moveDown();
this.moveRight(); 
this.moveUp();

// Edit it anywhere you like, add comments like these

// Follow the same "this.action();" format
// Code is case-sensitive.

// move up one
// move right 2
// move down 1
// attack

this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();
 
// Grab the Mushroom

// move up one
// move right
// move left
// move up
// attack

this.moveUp();
this.moveRight(); 
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();
 
 // Drink me
 
 // attack munchkin 1
 // move down
 // move up
 // move right
 // attack munchkin 2
 
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
 // Taunt the Guards
 
 // move right
 // move up 
 // move right
 // say something
 // move down
 // move right
 // move up
 // move right

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("something"):
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// It's a trap

// Taunt the Ogre and run for cover!
// 
// move down twice
// lure ogre
// move up twice
// tell them to attack

this.moveDown();
this.moveDown();
this.say("hey");
this.moveUp();
this.moveUp();
this.say("attack");

// Taunt
// 
// say something to ogre 4 times

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!

this.say("arg");
this.say("rawr");
this.say("hi");

// cowardly taunt
// 
// move to xy that is close
// say something
// move back to safe spot

this.moveXY(52,37);
this.say("rawr");
this.moveXY(70,10);

// Commanding Followers
// 
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow me")
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.moveXY(62,41);
this.say("attack");
// Make sure Tharin is safe!
// 

// Mobile Artillery
// 

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.

// attack target
// attack target closer to me
// do it again
this.moveXY(26,57);
this.attackXY(49,68);
this.attackXY(36,60);

this.moveXY(42,46);
this.attackXY(68,53);
this.attackXY(57,47);




// What is this referring to? Think programming-wise rather than in the terms of the game.

"This" refers to whatever object is calling the function.

// What does the () do in JavaScript?

that is where you put in the parameters.  If there are no parameters, javascript requires you to put in the parenthesis anyway.

// What is the point of the semicolons?

to separage statements.

// Reflection:
// Write your reflection here.

I thought this challenge was a little stupid.  I hated having to go through the game to "learn"
something.  The challenges were easy to figure out but the program was slow so it was irritating.
I think there could have been a better way to learn this.  I did not have trouble with the challenge
in a technical standpoint so the only problem I faced was getting the game to work.  So far,
since this Challenge was so basic, there isnt any concept that I am not understanding at the moment.
For the next DBC Phase 0 group, I suggest learning JavaScript in another way.










