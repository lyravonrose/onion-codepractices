// CONTROL FLOW

// LOGICAL OPERATORS
// logical not !
var a = !""; // a is true because null is falsey, and NOT null is therefore true
var b = !"blue"; // b is false because "blue" is a string
// and strings are truthy values, NOT truthy evaluates to false

// logical and &&
var a = true && 500;
// console.log("value of a:", a);
var b = 500 && false;
// console.log("value of b", b);

// logical and statements in IF conditionals: both sides of the double
// ampersands must be true in order for subsequent code block to run
if (false && 200) {
    // this code won't run because not both sides of the double ands are true
    console.log("you will never see this log");
}

if (true && []) {
    console.log("we will see this log running");
}

// logical or ||
var a = true || 100; // a is true
var b = false || 500; // b is 500

var c = 200 || 100; //
console.log("c has the value:", c); // 200

// COMPARISON OPERATORS
// equality ==
console.log(1 == 1); // true
console.log(1 == "1"); // also logs true, with equality JS does type cohercion

// stric equality ===
console.log(1 === 1); // true
console.log(1 === "1"); // false

// inequality
console.log(10 != 10); // false
console.log(10 != "10"); //false

// strict inequality
console.log(10 !== 10); // false
console.log(10 !== "10"); // true, the numder ten is not equal to the string 10

// greater than
console.log(3 > 2); //true
console.log(3 > 3); // false
// great equal than
console.log(3 >= 3); // true
// less than
console.log(4 < 5); // true

// less than or equal
console.log(4 <= 4); // true

// CONDITIONAL OPERATOR
// ternary operator
var a = true;
console.log(a ? "yes" : "no"); // will log yes

var a = false;
console.log(a ? "yes" : "no"); // will log no

// CONDITIONALS
// ONE OF THE BLOCKS BELOW WILL RUN
if (5 > 1) {
    console.log("FIRST IF: this log will run");
} else if (null === null) {
    console.log(
        "NULL CHECK: this log will appear IF the block above it did NOT run"
    );
} else if ("") {
    console.log("EMPTY STRING: this log will NEVER appear");
} else {
    console.log("will appear if all other ones above are false");
}

// MULTIPLE BLOCKS CAN RUN
if (5 > 1) {
    console.log("FIRST IF: this log will run");
}
if (null === null) {
    console.log("NULL CHECK: this log will appear");
}
if ("") {
    console.log("EMPTY STRING: this log will NOT appear");
} else {
    console.log(
        "this log will appear if because the IF block before did not run"
    );
}

console.log("---------------- SIMPLE IF ELSE CHECK");
if (4 > 6) {
    console.log("this won't run");
} else {
    console.log("but this will run as the condition before did NOT run");
}

// switch example:
var animal = "🦕";
switch (animal) {
    case "🐮":
    case "🦒":
    case "🐕":
    case "🐖":
        console.log("animal is not extinct!"); // log does not run
        break;
    case "🦕":
    case "🦖":
        console.log("this animal is extinct!"); // log does run
}

// LOOPS
var colors = [
    "blue",
    "pink",
    "yellow",
    "red",
    "green",
    "purple",
    "black",
    "sparkle",
];
// Accessing array values via their index
console.log("colors[0]", colors[0]);
console.log("colors[1]", colors[1]);
console.log("colors[2]", colors[2]);
console.log("_________________________ VALUES FROM FOR LOOP");
for (var i = 0; i < colors.length; i++) {
    console.log("index of value", i);
    console.log("color value in array", colors[i]);
}

//LOOPING OVER OBJECT KEY VALUE PAIRS
var obj = {
    name: "Merle",
    age: 34,
    prop: "I exist",
};
console.log("obj.name", obj.name); // Merle
console.log("obj.prop", obj.prop); // I exist
console.log("obj.doesNotExist", obj.doesNotExist); // undefined
console.log("obj['name']", obj["name"]); // Merle

for (var prop in obj) {
    console.log("prop:", prop); // ---> evaluates to name, age, prop
    console.log("obj.prop", obj.prop); // ---> always logs I exist, as obj.prop has the value "I exist"
    console.log("value of that prop:", obj[prop]); // ---> evalues to: Merle, 34, I exist
}
// WHILE LOOP
var i = 0;
while (i < 5) {
    console.log("while loop ran");
    i++;
}

// Assignments today
// //Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

// Ex. #1

function logType(arg) {
    if (typeof arg === undefined) {
        console.log("undefined!");
    } else if (typeof arg === null) {
        console.log("null!");
    } else if (typeof arg === 22) {
        console.log("number!");
    } else if (isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg === "test") {
        console.log("string!");
    } else if (typeof arg === true) {
        console.log("boolean!");
    } else if (typeof arg === 5n) {
        console.log("bigint!");
    } else if (typeof arg === function()) {
        console.log("function!");
    } else if (typeof arg === {}) {
        console.log("object!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}

//Ex. #2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var key in a) {
     b[a[key]] = key;
}
console.log(b);

//Ex. #3

for (var i = 10; i >= 1; i--) {
    console.log(i);
}
