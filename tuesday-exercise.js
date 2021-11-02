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
