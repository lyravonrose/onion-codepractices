// Ex. 1    Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.

function Rectangle(w, h) {
    this.w = w;
    this.h = h;
    this.getArea = function () {
        return this.w * this.h;
    };
}

function Square(num) {
    this.num = num;
    this.getArea = function () {
        return this.num * this.num;
    };
}

var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20

console.log(square, rect);

// // Ex 2. Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. The toUpperCase and toLowerCase methods that all strings have will come in handy here.

function InvertCase(str) {
    var newStr = "";
    for (var i = 0; str.length > i; i++) {
        console.log(str[i]);
        var isUpperCase = str[i] === str[i].toUpperCase();
        console.log(isUpperCase);
        var changedCase = isUpperCase
            ? str[i].toLowerCase()
            : str[i].toUpperCase();
        console.log(changedCase);

        newStr += changedCase;
    }
    return newStr;
}

console.log(InvertCase("LyraLikesRoses*!"));
