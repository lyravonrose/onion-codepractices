const { increase } = require("./increase");

// test takes two argument:
// 1st a string that describes out testcase
// 2nd a callback function that contains our actual unit test

// NaN
test("Passing NaN produces the string 'Error'", () => {
    const result = increase(NaN); // step 1, we call our function with the value that we want to test
    expect(result).toBe("Error");
});

//0
test("Passing 0 produces the string 'Error'", () => {
    const result = increase(0); // step 1, we call our function with the value that we want to test
    expect(result).toBe("Error");
});

//negative numbers
test("Passing a num below 0 produces the string 'Error'", () => {
    const result = increase(-9); // step 1, we call our function with the value that we want to test
    expect(result).toBe("Error");
});

// test positive number below a million
test("Passing a num below a million but greater than a million produces the string 'Error'", () => {
    // const result = increase(-9); // step 1, we call our function with the value that we want to test
    expect(increase(-9)).toBe(2000000);
    //if we wanted to use a different matcher we could also test the following
    expect(increase(2)).toBeGreaterThan(1000000);
});

test("Passing a num larger than a million produces that value as a result", () => {
    //expect(increase(2)).tobe(2000000);
    //if we wanted to use a different matcher we could also test the following
    expect(increase(2000000)).toBe(2000000);
});
