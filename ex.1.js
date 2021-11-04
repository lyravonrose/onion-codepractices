function each(param1, param2) {
    if (typeof param1 === "object" && typeof param2 === "function") {
        for (var prop in param1) {
            param2(param1[prop], prop);
        }
    } else if (Array.isArray(param1) && typeof param2 === "function") {
        for (var i = 0; i < param1.length; i++) {
            param2(param1[i], i);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
    },
    function (val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'
