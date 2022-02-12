// Lecture



function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("inputs need to be numbers!");
    }
    return a + b;
}

var mySum = sum(a: "7", b:"11");

try {
    //try something
} catch(err) {
// do something if it went wrong
} finally {
    //do regardkess if wheether if succeeded or not
}



