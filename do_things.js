var x;
var doubleX;

x = 22;

function timesTwo(num) {
    return num * 2;
}

doubleX = timesTwo(x);

var numbers;

numbers = [x, doubleX];

for (var i = 0; numbers.length > i; i++) {
    console.log(numbers[i]);
}

numbers = {};

numbers.y = doubleX;
