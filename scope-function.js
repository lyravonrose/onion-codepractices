setTimeout(function () {
    console.log("hello onion");
}, 2000);

// same //
var logger = function () {
    console.log("hello onion");
};

setTimeout(logger, 2000);

function nameAndAge(name, age) {
    return "hello " + name[1] + " you are " + age + " years old";
}
console.log(nameAndAge("Lyra", 37));
