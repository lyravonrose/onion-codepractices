// #1. Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

function sum() {
    var total = 0;
    for (var i = 0; arguments.length > i; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(2, 4, 6, 8, 10));
console.log(sum(5, 10, 15, 100, 200));

// #2. Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

function waitThenRun(function2) {
    setTimeout(function () {
        function2();
    }, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});

// #3. Write a function that expects a number as an argument.
// If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'.
// If the number that is passed in is greater than or equal to 1000000 it should simply return the number.
// Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

function passingNum(param) {
    if (param <= 0 || isNaN(param)) {
        return "'ERROR'";
    } else if (param >= 1000000) {
        return param;
    } else {
        return passingNum(param * 10);
    }
}

console.log(passingNum(22));
