const {} = require("fs");

function sayHello() {
    console.log(`"Lyra says hi to the MacBook brain 🌚"`);
}
module.exports.sayHello = sayHello;

module.exports.starsify = function (str) {
    return "🌝✨🕊";
};

exports.anotherWayToExport = `It's going to be all fine`;

// function tick(n) {
//     if (n > 0) {
//         console.log(n);
//         setTimeout(() => {
//             n = n - 1;
//             tick(n);
//         }, 1000);
//     }
// }
// tick(10);
