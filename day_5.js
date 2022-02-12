function Person(n) {
    this.name = n;
    this.sleep = function () {
        console.log(`🥶`);
    };
}

function getPerson(n) {
    return {
        name: n,
        sleep: function () {
            console.log(``);
        },
    };
}

var p1 = new Person("Lyra");
var p2 = new Person("Julian");
var p3 = getPerson("Otter");
console.log(p1, p2, p3);

// constructor: consistant functions
var leo = {
    name: "Leonardo",
    age: 46,
    oscars: 1,
};
var pcrz = Object.create(leo);
pcrz.name = "Penelope";
console.log(pcrz.age, pcrz.oscars, pcrz.name, leo.name);

console.log(pcrz.hasOwnProperty("oscars"));

console.log(Object.prototype.hasOwnProperty == pcrz.hasOwnProperty);

console.log(Object.getPrototypeOf(pcrz));
function Actor(n, o) {
    this.name = n;
    this.oscars = o;
}

Actor.prototype = Object.create(Person.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function () {
    console.log("to be or not to be, that is the question 🐧");
};

// Assignements

function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Square(n) {
    this.width = n;
    this.height = n;
}

var r = new Rectangle(4, 5);
var s = new Square(5);

r.getArea();
s.getArea();

// call, apply, constructor

console.log("a" == "a".toUpperCase());
