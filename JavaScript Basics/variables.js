//////    Variables    //////

// Variables are like labels for values

// . We can store a value and give it a name so that we can :
// . Refer back to it later
// . Use that value to do ..... stuff 
// . Or change it later one

/////   BASIC SYNTAX   //////

let year = 1995;

// Make me a variable called "year" and give it the value of 1995

/// RECALL VALUES ///

let cars = 4;

let bikes = 2;

cars + bikes //6

let total = cars + bikes; // 6

//////   Increment ( ++ ) and Decrement ( -- ) Operators   //////

// It will increment by 1 and decrement by 1

let pens = 5;
let books = 8;

pens++;
books--;

/////////// Post Increment and Pre Increment /////////

let ball = 10;
let bat = 20;

ball++; // post increment
++bat; // pre incremet

/////////// Post Decrement and Pre Decrement /////////

ball--; //post decrement
--bat;  //pre decrement


///////////////   CONST Keyword ////////////////

// Block Scope {}

const table = 4;              // . const works just like let, except you CANNOT change the value
table = 10; //ERROR!

const chair = 15;
chair = chair + 1; //ERROR!   // . NOT ALLOWED!


///////// WHY USE CONST ? /////////////

// Once we cover Arrays & Objects, we will see other situation where const makes sense over let.

const pi = 3.14159;

const daysInWeek = 7;

const minAgeToVote = 18;

///////////////    Var Keyword    ////////////////

// Function scope 

// THE OLD VARIABLE KEYWORD
// Before let & const, var was the only way to decalaring variables. 
// These day's, there isn't really a reason to use it.


////////////////  Let Keyword ///////////////////
