// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Stella Kim
//  2. Josh Jeong


// 1. "YOU SIGNED... WHO?!"

function Client(name, age, quote)
{
    this.name = name;
    this.age = age;
    this.quote = quote;
}

// 2. "Here they Come!"

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

var clientList = [adamSandler, kristenBell, jimCarrey];

// 3. "TIME IS MONEY!"



//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

for(var i=0; i<clientList.length; i++) {  
  console.log(i+1+".");
  console.log("   "+ clientList[i].name);
  console.log("   "+ clientList[i].age);
  console.log("   "+ clientList[i].quote);
}

// ** BONUS **


//  Your Reflection:
//  
//  I think this was a good pairing session.  I realized I don't know basic JavaScript
// enough well, but neither did my partner so it was cool learning it together.
// He listened very well and was good at asking questions.  We both learned how to
// use the node more as well.
