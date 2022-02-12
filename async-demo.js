function first(callback) {
    setTimeout(() => {
        console.log("first");
        callback();
    }, 2000);
}

const second = (callback) => {
    setTimeout(() => {
        console.log("second");
        callback();
    }, 3000);
};

const third = () => {
    console.log("third");
};

// first();
// second();
// third();

first(() => {
    second(() => {
        third();
    });
});
