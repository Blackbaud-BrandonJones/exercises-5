/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What value is stored in `givenName` right now?
// A: undefined
console.log(givenName);

var name = "Brett";
var myName = "Brett";

givenName = myName;
// Q: What is `givenName` set to now?
// A: "Brett"
console.log(givenName);

givenName = givenName;
// Q: What is `givenName` set to now?
// A: "Brett"
console.log(givenName);

var greeting = "Hello how are you"+ " " + givenName + "?";
console.log(greeting);

/*=========================================================
     Part 2: Simple Math
*/
var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: 40;
console.log(math);

math = high - "5";
// Q: What is `math` set to?
// A: 45;
console.log(math);

// Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
// Write Code Below:

var sum = high + low;
console.log(sum);

var total = high - low;
console.log(total);
var remainder = high / low;
console.log(remainder);
var multiplier = high * low;
console.log(multiplier);

/* =========================================================
     Part 3: Expressions
*/


// Create a variable to calculate your age
// The answer should read "NAME is XX years old"
// The answer should not be written in a comment.
var born = 1900 + 86;
var today = 1900 + 117;

// Answers Below:
var age = today - born;
console.log("Brandon is " + age + " years old");

// Store some information following in variables.
var yourName = "Brandon";
var instructorName = "Calvin";

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

console.log(statement);


var myAge = 45;
var isOld;

if (myAge > 100) {
  isOld = true;
}

else if (myAge > 35) {
  isOld = "You're in your prime!";
}

else {
  isOld = false;
}

// asndgaylksd;a

/*
anything below here

and above here
*/



console.log(isOld);

var firstName = "Julia";
var lastName = "Roberts";
var fullName = firstName + " " + lastName;

console.log(fullName); // Julia Roberts
var yearBorn = 1975;
var currentYear = 2016;
var age = currentYear - yearBorn;

console.log(age); // 41
