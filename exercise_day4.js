function each(param1, param2) {
    if (typeof param1 === "object" && typeof param2 === "function") {
        for (var prop in param1) {
            param2(param1[prop], prop);
        }
    } else if (Array.isArray(param1) && typeof param2 === "function") {
        for (var i = 0; i < param1.length; i++) {
            param2(param1[i], i);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// #2. Exercise: Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

function func(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {}
}

console.log(newArr);

// #.3 Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.
var newArr = [];
function getLessThanZero(arr) {
    return arr.filter(function (num) {
        return num < 0;
    });
}

console.log(newArr);

console.log(getLessThanZero([1, 2, -1, -90, 10]));
console.log(getLessThanZero([1, 2]));
