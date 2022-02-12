var colors = ["green", "blue", "tomato", "yellow"];

console.log("colors: ", colors[2]);

console.log(colors[colors.length - 1]);

colors.push("black"); // adds an item to the back
console.log(colors);

colors.push(["black", "orange"]);
console.log(colors);
console.log(colors[5][1]);

var popped = colors.pop();
console.log(popped);

//shift & unshift

colors.unshift("thistle");
console.log(colors);

colors.shift();
console.log(colors);

colors.splice(1, 2, "lime", "orange"); //second one is the amount to take off
console.log(colors);

var moreColors = colors.slice(2); // with no value will duplicate the array but with an index, it will duplicate from the index position
var moreColors2 = colors.slice(2, 4); // prints 2 and 3
console.log(moreColors2);
console.log(colors.indexOf("yellow"));

colors[colors.indexOf("yellow")] = "brown";

console.log(colors);

var longNames = colors.filter(function (color) {
    console.log("color: ", color);
});

console.log(longNames);

var longNames = colors.filter(function (color) {
    if (color.length > 5) {
        return true;
    } else {
        return false;
    }
});

console.log(longNames);

var mappedVals = colors.map(function (color, i) {
    return {
        name: color.toUpperCase() + "!!!!!",
        id: i,
    };
});

console.log(mappedVals);
