console.log("hello from stars");
console.log("__dirname", __dirname);
console.log("__filename", __filename);
console.log("module", module);
// every module has an exports object, and this is where we add things to make them accessible across modules
console.log("module.exports", module.exports);

const stars = require("./stars");
console.log("*****index.js, stars", stars);

stars.sayHello();
console.log(stars.starsify("Onion"));

//CORE node modules::

const os = require("os");

console.log("os.platform()", os.platform(), "home directory", os.homedir());

const url = require("url");

console.log("url:", url);

// console.log("url.parse()", url.parse("https://www.lyravonrose.com/music"));

const chalk = require("chalk");
const {} = require("fs");
console.log("chalk:", chalk);
console.log(chalk.cyan("Hello :D"));
console.log(chalk.bgMagenta.italic.bold(`"Hello Darling"`));

//Event Emitters
process.on("beforeExit", function () {
    console.log("just about to exit the process");
});

process.on("iWantAMuffin", function () {
    console.log("I want a muffin 🧁...");
});
setTimeout(() => {
    process.emit("iWantAMuffin");
}, 2000);

//almost everything in node is asynchronous

const fs = require("fs");

// passing in a corrent file path
fs.readdir(`${__dirname}/somethingThatDoesNotExist`, (err, content) => {
    if (err) {
        console.log(
            chalk.red("something went wrong reading this directory", err)
        );
    }
    console.log("content", content);
});

//asynchronisity

// function getUser(cb) {
//     setTimeout(()=> {

//     }
//     return {
//         name: "Lyra",
//         secretPowers: "can type fast",
//         lovesMusic: true,
//     };

// const myUserData = getUser();
// console.log(myUserData);
const warning = chalk.keyword("orange");
