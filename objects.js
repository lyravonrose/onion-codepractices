var person = {
    name: "Lyra",
    age: 37,
    "favourite food": ["sushi", "pizza"],
};

console.log(person);
person.age += 20;
person.name = "Bob";
person["age"] = 300;
console.log(person);
person.address = {
    street: "Big Street",
    number: 102,
    postCode: 10245,
    pets: false,
    children: "Too many",
};
person.secret = undefined;
person.greeting = function () {
    console.log("Hello Tomato 🍅");
};
person.greeting();
console.log(person.hasOwnProperty("secret"));
person["favourite food"].push("chocolate");

delete person.secret;

console.log(person);
var artist = "Jimi Hendrix";
var music = {
    [artist + "!!!"]: "Happy Birthday",
};

console.log; //cns. enter
console.log("music: ", music);

var newObj = new Object();
console.log(newObj);

var anotherObject = Object.create(null);

var objVals = Object.keys(person);
console.log(objVals);
