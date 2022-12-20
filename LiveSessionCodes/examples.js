
// Define a variable

"use strict";       // forces you to declare all variables
var name = "abc";   // used mainly for global variables
let age = 7;        // used for block level variables - between{}

// constants
const PI = 3.14;


// conditional statements

if (age > 50) // joining a few questions together by using && and ||
    document.printIn("old");
else 
    document.printIn(("young"));


let carCloor = "red";
switch(carCloor){
    case "red": 
        document.printIn("A red car");
        break;
    case "white": 
        document.printIn("A white car");
        break;
    default:         
        document.printIn("I do not know the color");
} 



// looping statements

// PRETEST LOOPS - ini; test; way-out

for(let i = 0; i < 10; i++){}   // good for when you know how many times you wnat to repeat

let j = 0;   // ini 
while(j < 10) {                // good for when you do not know how many times to repeat
    // some stuff
    j++   // way-out
}

// POSTTEST LOOPS

do{                            // statements in the loop always occur at least once
    // do something
    // ask if want to contuine  // good when asking for user input
} while(ans != "no");



// define a function

function myFunc( [ param1 [, param2 ] ] ) {}         // standard way
var myFunc = function( [ param1 [, param2 ] ] ) {} // assiging function to a variable
myFunc = ( [ param1 [, param2 ] ] ) => {}          // more modern way



// define a class
class MyClass {      // use capitial letters at start
    constructor( [ param1 [, param2 ] ] ) {               // min requirements

    }
}